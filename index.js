const mcDataToNode = require('./lib/loader')
const path = require('path')
const data = {
  pc: {
    '1.8.8': {
      directory: path.join(__dirname, './minecraft-assets/data/1.8.8/'),
      blocksTextures: require('./minecraft-assets/data/1.8.8/blocks_textures'),
      itemsTextures: require('./minecraft-assets/data/1.8.8/items_textures'),
      textureContent: require('./minecraft-assets/data/1.8.8/texture_content'),
      blocksStates: require('./minecraft-assets/data/1.8.8/blocks_states'),
      blocksModels: require('./minecraft-assets/data/1.8.8/blocks_models')
    },
    1.9: {
      directory: path.join(__dirname, './minecraft-assets/data/1.9/'),
      blocksTextures: require('./minecraft-assets/data/1.9/blocks_textures'),
      itemsTextures: require('./minecraft-assets/data/1.9/items_textures'),
      textureContent: require('./minecraft-assets/data/1.9/texture_content'),
      blocksStates: require('./minecraft-assets/data/1.9/blocks_states'),
      blocksModels: require('./minecraft-assets/data/1.9/blocks_models')
    },
    '1.10': {
      directory: path.join(__dirname, './minecraft-assets/data/1.10/'),
      blocksTextures: require('./minecraft-assets/data/1.10/blocks_textures'),
      itemsTextures: require('./minecraft-assets/data/1.10/items_textures'),
      textureContent: require('./minecraft-assets/data/1.10/texture_content'),
      blocksStates: require('./minecraft-assets/data/1.10/blocks_states'),
      blocksModels: require('./minecraft-assets/data/1.10/blocks_models')
    },
    '1.11.2': {
      directory: path.join(__dirname, './minecraft-assets/data/1.11.2/'),
      blocksTextures: require('./minecraft-assets/data/1.11.2/blocks_textures'),
      itemsTextures: require('./minecraft-assets/data/1.11.2/items_textures'),
      textureContent: require('./minecraft-assets/data/1.11.2/texture_content'),
      blocksStates: require('./minecraft-assets/data/1.11.2/blocks_states'),
      blocksModels: require('./minecraft-assets/data/1.11.2/blocks_models')
    },
    1.12: {
      directory: path.join(__dirname, './minecraft-assets/data/1.12/'),
      blocksTextures: require('./minecraft-assets/data/1.12/blocks_textures'),
      itemsTextures: require('./minecraft-assets/data/1.12/items_textures'),
      textureContent: require('./minecraft-assets/data/1.12/texture_content'),
      blocksStates: require('./minecraft-assets/data/1.12/blocks_states'),
      blocksModels: require('./minecraft-assets/data/1.12/blocks_models')
    },
    1.13: {
      directory: path.join(__dirname, './minecraft-assets/data/1.13/'),
      blocksTextures: require('./minecraft-assets/data/1.13/blocks_textures'),
      itemsTextures: require('./minecraft-assets/data/1.13/items_textures'),
      textureContent: require('./minecraft-assets/data/1.13/texture_content'),
      blocksStates: require('./minecraft-assets/data/1.13/blocks_states'),
      blocksModels: require('./minecraft-assets/data/1.13/blocks_models')
    },
    '1.13.2': {
      directory: path.join(__dirname, './minecraft-assets/data/1.13.2/'),
      blocksTextures: require('./minecraft-assets/data/1.13.2/blocks_textures'),
      itemsTextures: require('./minecraft-assets/data/1.13.2/items_textures'),
      textureContent: require('./minecraft-assets/data/1.13.2/texture_content'),
      blocksStates: require('./minecraft-assets/data/1.13.2/blocks_states'),
      blocksModels: require('./minecraft-assets/data/1.13.2/blocks_models')
    },
    '1.14.4': {
      directory: path.join(__dirname, './minecraft-assets/data/1.14.4/'),
      blocksTextures: require('./minecraft-assets/data/1.14.4/blocks_textures'),
      itemsTextures: require('./minecraft-assets/data/1.14.4/items_textures'),
      textureContent: require('./minecraft-assets/data/1.14.4/texture_content'),
      blocksStates: require('./minecraft-assets/data/1.14.4/blocks_states'),
      blocksModels: require('./minecraft-assets/data/1.14.4/blocks_models')
    },
    '1.15.2': {
      directory: path.join(__dirname, './minecraft-assets/data/1.15.2/'),
      blocksTextures: require('./minecraft-assets/data/1.15.2/blocks_textures'),
      itemsTextures: require('./minecraft-assets/data/1.15.2/items_textures'),
      textureContent: require('./minecraft-assets/data/1.15.2/texture_content'),
      blocksStates: require('./minecraft-assets/data/1.15.2/blocks_states'),
      blocksModels: require('./minecraft-assets/data/1.15.2/blocks_models')
    },
    '1.16.1': {
      directory: path.join(__dirname, './minecraft-assets/data/1.16.1/'),
      blocksTextures: require('./minecraft-assets/data/1.16.1/blocks_textures'),
      itemsTextures: require('./minecraft-assets/data/1.16.1/items_textures'),
      textureContent: require('./minecraft-assets/data/1.16.1/texture_content'),
      blocksStates: require('./minecraft-assets/data/1.16.1/blocks_states'),
      blocksModels: require('./minecraft-assets/data/1.16.1/blocks_models')
    },
    '1.16.4': {
      directory: path.join(__dirname, './minecraft-assets/data/1.16.4/'),
      blocksTextures: require('./minecraft-assets/data/1.16.4/blocks_textures'),
      itemsTextures: require('./minecraft-assets/data/1.16.4/items_textures'),
      textureContent: require('./minecraft-assets/data/1.16.4/texture_content'),
      blocksStates: require('./minecraft-assets/data/1.16.4/blocks_states'),
      blocksModels: require('./minecraft-assets/data/1.16.4/blocks_models')
    },
    '1.17.1': {
      directory: path.join(__dirname, './minecraft-assets/data/1.17.1/'),
      blocksTextures: require('./minecraft-assets/data/1.17.1/blocks_textures'),
      itemsTextures: require('./minecraft-assets/data/1.17.1/items_textures'),
      textureContent: require('./minecraft-assets/data/1.17.1/texture_content'),
      blocksStates: require('./minecraft-assets/data/1.17.1/blocks_states'),
      blocksModels: require('./minecraft-assets/data/1.17.1/blocks_models')
    },
    '1.18.1': {
      directory: path.join(__dirname, './minecraft-assets/data/1.18.1/'),
      blocksTextures: require('./minecraft-assets/data/1.18.1/blocks_textures'),
      itemsTextures: require('./minecraft-assets/data/1.18.1/items_textures'),
      textureContent: require('./minecraft-assets/data/1.18.1/texture_content'),
      blocksStates: require('./minecraft-assets/data/1.18.1/blocks_states'),
      blocksModels: require('./minecraft-assets/data/1.18.1/blocks_models')
    },
    '1.19.1': {
      directory: path.join(__dirname, './minecraft-assets/data/1.19.1/'),
      blocksTextures: require('./minecraft-assets/data/1.19.1/blocks_textures'),
      itemsTextures: require('./minecraft-assets/data/1.19.1/items_textures'),
      textureContent: require('./minecraft-assets/data/1.19.1/texture_content'),
      blocksStates: require('./minecraft-assets/data/1.19.1/blocks_states'),
      blocksModels: require('./minecraft-assets/data/1.19.1/blocks_models')
    },
    '1.20.2': {
      blocksTextures: require('./minecraft-assets/data/1.20.2/blocks_textures'),
      itemsTextures: require('./minecraft-assets/data/1.20.2/items_textures'),
      textureContent: require('./minecraft-assets/data/1.20.2/texture_content'),
      blocksStates: require('./minecraft-assets/data/1.20.2/blocks_states'),
      blocksModels: require('./minecraft-assets/data/1.20.2/blocks_models')
    }
  }
}

Object.assign(data, {
  bedrock: {
    '1.19.1': data.pc['1.19.1'],
    '1.20.0': data.pc['1.20.2']
  }
})

const reduce = (what) => what.reduce((acc, cur) => {
  const major = cur.split('.').slice(0, 2).join('.')
  const arr = acc[major] = acc[major] || []
  arr.push(cur)
  return acc
}, {})

const cache = { pc: {}, bedrock: {} } // prevent reindexing when requiring multiple time the same version

module.exports = function (registry) {
  if (typeof registry === 'string') registry = require('prismarine-registry')(registry)
  const v = registry.version
  if (cache[v.type][v.minecraftVersion]) return cache[v.type][v.minecraftVersion]

  // Check exact version first, else check the last minor version of the major
  const assets = data[v.type][v.minecraftVersion] || data[v.type][lastOfMajor(v.type, v.majorVersion)]
  const updated = cache[v.type][v.minecraftVersion] = mcDataToNode(assets, registry)
  return updated
}
module.exports.versions = { pc: Object.keys(data.pc), bedrock: Object.keys(data.bedrock) }
