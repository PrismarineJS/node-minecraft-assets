const indexer = require('./indexer.js')

module.exports = function (mcAssets, registry) {
  return {
    blocksByName: indexer.buildIndexFromArray(mcAssets.blocksTextures, 'name'),
    itemsByName: indexer.buildIndexFromArray(mcAssets.itemsTextures, 'name'),
    textureContentByName: indexer.buildIndexFromArray(mcAssets.textureContent, 'name'),
    blockStateVariantsByStateId: registry.type === 'bedrock'
      ? indexer.buildBedrockBlockStatesArray(registry, mcAssets.blocksStates)
      : indexer.buildPCBlockStatesArray(registry, mcAssets.blocksStates)
  }
}
