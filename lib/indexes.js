const indexer = require('./indexer.js')

module.exports = function (mcData) {
  return {
    blocksByName: indexer.buildIndexFromArray(mcData.blocksTextures, 'name'),
    itemsByName: indexer.buildIndexFromArray(mcData.itemsTextures, 'name'),
    textureContentByName: indexer.buildTextureContentByName(mcData.textureContent)
  }
}
