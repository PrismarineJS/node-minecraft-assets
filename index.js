const mcDataToNode = require('./lib/loader')
const fs = require('fs')
const path = require('path')
const cache = {} // prevent reindexing when requiring multiple time the same version
const absoluteCache = {}

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
  const majorVersion = require('minecraft-data')(mcVersion).version.majorVersion
  if (!(majorVersion in absoluteCache)) {
    absoluteCache[majorVersion] = {}
  }
  assets.getAbsoluteTexture = (item, fixName = true) => {
    let fixedName = !fixName
      ? item.name
      : item.name
        .replace(/compass_\d+/, 'compass_00')
        .replace(/clock_\d+/, 'clock_00')
        .replace(/(.+)_door/, 'door_$1')
        .replace('wood', 'wooden')
        .replace('armor_stand', 'wooden_armorstand')

    const displayNameMapping = {
      'Bonemeal White': 'dye_powder_white',
      'Ink Black': 'dye_powder_black',
      'Cocoa Brown': 'dye_powder_brown',
      'Rose Red': 'dye_powder_red',
      'Cactus Green': 'dye_powder_green',
      'Lapis Lazuli': 'dye_powder_blue',
      'Dandelion Yellow': 'dye_powder_yellow',
      Gray: 'dye_powder_gray',
      'Light Gray': 'dye_powder_light_gray',
      Orange: 'dye_powder_orange',
      Lime: 'dye_powder_lime',
      'Light Blue': 'dye_powder_light_blue',
      Cyan: 'dye_powder_cyan',
      Pink: 'dye_powder_pink',
      Purple: 'dye_powder_purple',
      Magenta: 'dye_powder_magenta'
    }
    if (item.displayName in displayNameMapping) {
      fixedName = displayNameMapping[item.displayName]
    }
    if (!(item in absoluteCache[majorVersion])) {
      const imgPath = path.join(__dirname, 'minecraft-assets', 'data', majorVersion, 'items', fixedName + '.png')
      absoluteCache[majorVersion][item] = fs.existsSync(imgPath) ? fs.readFileSync(imgPath) : assets.getTexture(item.name)
    }
    return absoluteCache[majorVersion][item]
  }
  assets.getTexture = item => {
    return assets.textureContent[item.name].texture
  }
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
