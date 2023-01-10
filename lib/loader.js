const fs = require('fs')
const path = require('path')

module.exports = mcDataToNode

function mcDataToNode (mcData, registry) {
  const indexes = require('./indexes.js')(mcData, registry)
  function findItemOrBlockByName (name) {
    const item = indexes.itemsByName[name]
    if (item !== undefined) return item
    return indexes.blocksByName[name]
  }
  function getTexture (name) {
    return findItemOrBlockByName(name).texture
  }
  return {
    blocks: indexes.blocksByName,
    blocksArray: mcData.blocksTextures,

    items: indexes.itemsByName,
    itemsArray: mcData.itemsTextures,

    textureContent: indexes.textureContentByName,
    textureContentArray: mcData.textureContent,

    blocksStates: mcData.blocksStates,
    blocksModels: mcData.blocksModels,
    blockStateVariantsByStateId: indexes.blockStateVariantsByStateId,
    version: registry.version,

    findItemOrBlockByName,
    getTexture,

    getImageContent: function (name) {
      const texture = getTexture(name)
      if (texture == null) { return null }
      return 'data:image/png;base64,' + fs.readFileSync(path.join(mcData.directory, texture, '.png'), 'base64')
    }
  }
}
