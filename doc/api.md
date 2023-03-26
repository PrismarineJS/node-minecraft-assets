# API

## Blocks

### blocks

blocks textures by name

### blocksArray

array of blocks textures

### blocksModels

map of block variant => model

### blockStates

array of block states

## Items

### items

items textures by name

### itemsArray

array of items textures

## Texture content

### textureContent

texture content by name

### textureContentArray

array of texture content

### blockStateVariantsByStateId

Returns an array of block model variants mapped by block state ID, lookup with .blocksModels field

## version

## directory

## versions

list of supported versions

## Functions

### findItemOrBlockByName(name)

get a block or item texture by name

### getTexture(name)

get the texture path by name

### getImageContent(name)

generate the base64 representation of a texture from the name
