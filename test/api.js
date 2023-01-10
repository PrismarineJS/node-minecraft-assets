/* eslint-env mocha */
const assert = require('assert')
const versions = ['bedrock_1.19.1', '1.8', '1.9', '1.10', '1.11', '1.12', '1.13.2', '1.14.4', '1.15.2', '1.16.1', '1.17', '1.18']

describe('api works', function () {
  for (const version of versions) {
    it('on ' + version, function () {
      const registry = require('prismarine-registry')(version)
      const mcAssets = require('minecraft-assets')(registry)

      assert(Object.values(mcAssets.blockStateVariantsByStateId).length > 0)

      console.log('Read', Object.values(mcAssets.blockStateVariantsByStateId).length, 'blockStateVariants')
    })
  }
})
