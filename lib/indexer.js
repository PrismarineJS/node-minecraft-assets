module.exports.buildIndexFromArray = function (array, fieldToIndex) {
  if (array === undefined) { return undefined }
  return array.reduce(function (index, element) {
    index[element[fieldToIndex]] = element
    return index
  }, {})
}

// Items come first in texture_content.json, so keep the first entry that has a
// texture: items win and blocks only fill names items resolve to null.
module.exports.buildTextureContentByName = function (textureContent) {
  if (textureContent === undefined) { return undefined }
  return textureContent.reduce(function (index, element) {
    const existing = index[element.name]
    if (existing === undefined || (existing.texture === null && element.texture !== null)) {
      index[element.name] = element
    }
    return index
  }, {})
}
