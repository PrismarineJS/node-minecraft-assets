module.exports.buildIndexFromArray = function (array, fieldToIndex) {
  if (array === undefined) { return undefined }
  return array.reduce(function (index, element) {
    index[element[fieldToIndex]] = element
    return index
  }, {})
}

function parseProperties (properties) {
  if (typeof properties === 'object') { return properties }

  const json = {}
  for (const prop of properties.split(',')) {
    const [key, value] = prop.split('=')
    json[key] = value
  }
  return json
}

function matchProperties (block, properties) {
  if (!properties) { return true }

  properties = parseProperties(properties)
  const blockProps = block.getProperties()
  for (const prop in blockProps) {
    if (properties[prop] !== undefined && (blockProps[prop] + '') !== properties[prop]) {
      return false
    }
  }
  return true
}

function getModelVariants (block, blockStates) {
  const state = blockStates[block.name]
  if (!state) return []
  if (state.variants) {
    for (const [properties, variant] of Object.entries(state.variants)) {
      if (!matchProperties(block, properties)) continue
      if (variant instanceof Array) return [variant[0]]
      return [variant]
    }
  }
  if (state.multipart) {
    const parts = state.multipart.filter(multipart => matchProperties(block, multipart.when))
    let variants = []
    for (const part of parts) {
      if (part.apply instanceof Array) {
        variants = [...variants, ...part.apply]
      } else {
        variants = [...variants, part.apply]
      }
    }

    return variants
  }

  return []
}

// This function uses the minecraft-data blockMappings.json to translate the pc blockStates.json
// to bedrock block states. It also handles the special cases of stairs (but not snow layers/waterlogging).
module.exports.buildBedrockBlockStatesArray = function (registry, pcAssetBlockStates) {
  const blockStateVariantsByStateId = {}
  const blockStates = registry.blockStates
  // First make a mapping of pe -> pc blocks from the block mapping schema
  const pe = {}
  const keyFromStates = states => Object.entries(states).map(entry => entry[0] + '=' + (entry[1].value ?? entry[1])).join(',')
  for (const mapping of registry.blockMappings) {
    pe[mapping.pe.name] = pe[mapping.pe.name] || {}
    pe[mapping.pe.name][keyFromStates(mapping.pe.states)] ??= mapping.pc
  }
  // Then iterate over all the bedrock blocks and store the ModelVariants for each state ID
  for (let stateId = 0; stateId < blockStates.length; stateId++) {
    const blockState = blockStates[stateId]
    const mapping = pe[blockState.name][keyFromStates(blockState.states)]
    let variants
    function getProperties () {
      const states = { ...mapping.states }
      // Stairs need special handling
      if (states.shape) states.shape = 'straight'
      return states
    }
    if (mapping) {
      variants = getModelVariants({ name: mapping.name, getProperties }, pcAssetBlockStates)
    } else {
      const fallback = Object.values(pe[blockState.name])[0]
      if (fallback) {
        variants = getModelVariants({ name: fallback.name, getProperties }, pcAssetBlockStates)
      }
    }
    blockStateVariantsByStateId[stateId] = variants
  }
  return blockStateVariantsByStateId
}

module.exports.buildPCBlockStatesArray = function (registry, blockStates) {
  const Block = require('prismarine-block')(registry)
  const blockStateVariantsByStateId = {}
  const minStateId = 0
  let maxStateId = 0
  for (const block of registry.blocksArray) {
    maxStateId = Math.max(maxStateId, block.maxStateId)
    if (isNaN(maxStateId)) throw new Error('maxStateId is NaN')
  }
  for (let i = minStateId; i <= maxStateId; i++) {
    const block = Block.fromStateId(i, 0)
    const variants = getModelVariants(block, blockStates)
    blockStateVariantsByStateId[i] = variants
  }
  return blockStateVariantsByStateId
}
