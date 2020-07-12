const fs = require('fs')
const path = require('path')

module.exports = mcDataToNode

function mcDataToNode (mcData, mcVersion) {
  const indexes = require('./indexes.js')(mcData)
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
    directory: path.join(__dirname, '/../minecraft-assets/data/', mcVersion, '/'),

    findItemOrBlockByName: findItemOrBlockByName,
    getTexture: getTexture,

    getImageContent: function (name) {
      const texture = getTexture(name)
      if (texture == null) { return null }
      return 'data:image/png;base64,' + fs.readFileSync(path.join(__dirname, '/../minecraft-assets/data/', mcVersion, '/', texture, '.png'), 'base64')
    }
  }
}
