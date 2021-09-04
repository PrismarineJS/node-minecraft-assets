const mcDataToNode = require('./lib/loader')
const cache = {} // prevent reindexing when requiring multiple time the same version

function getVersion (mcVersion) {
  if (cache[mcVersion]) { return cache[mcVersion] }
  const mcData = data[mcVersion]
  if (mcData == null) { return null }
  const nmcData = mcDataToNode(mcData, mcVersion)
  cache[mcVersion] = nmcData
  return nmcData
}

function toMajor (version) {
  const [a, b] = (version + '').split('.')
  return a + '.' + b
}

function minor (version) {
  const [, , c] = (version + '.0').split('.')
  return parseInt(c, 10)
}

module.exports = function (mcVersion) {
  // Check exact version first
  let assets = getVersion(mcVersion)
  if (assets) { return assets }
  // If not found, resort to the last of major
  assets = getVersion(lastOfMajor[toMajor(mcVersion)])
  return assets
}

const data = {
  '1.8.8': {
    blocksTextures: require('./minecraft-assets/data/1.8.8/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.8.8/items_textures'),
    textureContent: require('./minecraft-assets/data/1.8.8/texture_content'),
    blocksStates: require('./minecraft-assets/data/1.8.8/blocks_states'),
    blocksModels: require('./minecraft-assets/data/1.8.8/blocks_models')
  },
  1.9: {
    blocksTextures: require('./minecraft-assets/data/1.9/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.9/items_textures'),
    textureContent: require('./minecraft-assets/data/1.9/texture_content'),
    blocksStates: require('./minecraft-assets/data/1.9/blocks_states'),
    blocksModels: require('./minecraft-assets/data/1.9/blocks_models')
  },
  '1.10': {
    blocksTextures: require('./minecraft-assets/data/1.10/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.10/items_textures'),
    textureContent: require('./minecraft-assets/data/1.10/texture_content'),
    blocksStates: require('./minecraft-assets/data/1.10/blocks_states'),
    blocksModels: require('./minecraft-assets/data/1.10/blocks_models')
  },
  '1.11.2': {
    blocksTextures: require('./minecraft-assets/data/1.11.2/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.11.2/items_textures'),
    textureContent: require('./minecraft-assets/data/1.11.2/texture_content'),
    blocksStates: require('./minecraft-assets/data/1.11.2/blocks_states'),
    blocksModels: require('./minecraft-assets/data/1.11.2/blocks_models')
  },
  1.12: {
    blocksTextures: require('./minecraft-assets/data/1.12/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.12/items_textures'),
    textureContent: require('./minecraft-assets/data/1.12/texture_content'),
    blocksStates: require('./minecraft-assets/data/1.12/blocks_states'),
    blocksModels: require('./minecraft-assets/data/1.12/blocks_models')
  },
  1.13: {
    blocksTextures: require('./minecraft-assets/data/1.13/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.13/items_textures'),
    textureContent: require('./minecraft-assets/data/1.13/texture_content'),
    blocksStates: require('./minecraft-assets/data/1.13/blocks_states'),
    blocksModels: require('./minecraft-assets/data/1.13/blocks_models')
  },
  '1.13.2': {
    blocksTextures: require('./minecraft-assets/data/1.13.2/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.13.2/items_textures'),
    textureContent: require('./minecraft-assets/data/1.13.2/texture_content'),
    blocksStates: require('./minecraft-assets/data/1.13.2/blocks_states'),
    blocksModels: require('./minecraft-assets/data/1.13.2/blocks_models')
  },
  '1.14.4': {
    blocksTextures: require('./minecraft-assets/data/1.14.4/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.14.4/items_textures'),
    textureContent: require('./minecraft-assets/data/1.14.4/texture_content'),
    blocksStates: require('./minecraft-assets/data/1.14.4/blocks_states'),
    blocksModels: require('./minecraft-assets/data/1.14.4/blocks_models')
  },
  '1.15.2': {
    blocksTextures: require('./minecraft-assets/data/1.15.2/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.15.2/items_textures'),
    textureContent: require('./minecraft-assets/data/1.15.2/texture_content'),
    blocksStates: require('./minecraft-assets/data/1.15.2/blocks_states'),
    blocksModels: require('./minecraft-assets/data/1.15.2/blocks_models')
  },
  '1.16.1': {
    blocksTextures: require('./minecraft-assets/data/1.16.1/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.16.1/items_textures'),
    textureContent: require('./minecraft-assets/data/1.16.1/texture_content'),
    blocksStates: require('./minecraft-assets/data/1.16.1/blocks_states'),
    blocksModels: require('./minecraft-assets/data/1.16.1/blocks_models')
  },
  '1.16.4': {
    blocksTextures: require('./minecraft-assets/data/1.16.4/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.16.4/items_textures'),
    textureContent: require('./minecraft-assets/data/1.16.4/texture_content'),
    blocksStates: require('./minecraft-assets/data/1.16.4/blocks_states'),
    blocksModels: require('./minecraft-assets/data/1.16.4/blocks_models')
  },
  '1.17.1': {
    blocksTextures: require('./minecraft-assets/data/1.17.1/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.17.1/items_textures'),
    textureContent: require('./minecraft-assets/data/1.17.1/texture_content'),
    blocksStates: require('./minecraft-assets/data/1.17.1/blocks_states'),
    blocksModels: require('./minecraft-assets/data/1.17.1/blocks_models')
  }
}

module.exports.versions = Object.keys(data)

const lastOfMajor = {}
for (const version in data) {
  const major = toMajor(version)
  if (lastOfMajor[major]) {
    if (minor(lastOfMajor[major]) < minor(version)) {
      lastOfMajor[major] = version
    }
  } else {
    lastOfMajor[major] = version
  }
}
