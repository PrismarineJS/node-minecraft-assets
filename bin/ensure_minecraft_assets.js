#!/usr/bin/env node

const fs = require('fs')
const { spawnSync } = require('child_process')

const assetsCheck = 'minecraft-assets/data/26.1.2/blocks_textures.json'
const assetsRepo = 'https://github.com/mneuhaus/minecraft-assets.git'
const assetsBranch = 'add-26.1.2-assets'

if (fs.existsSync(assetsCheck)) process.exit(0)

if (fs.existsSync('.git')) {
  const result = spawnSync('git', ['submodule', 'update', '--init', '--recursive'], { stdio: 'inherit' })
  if (result.status === 0 && fs.existsSync(assetsCheck)) process.exit(0)
}

fs.rmSync('minecraft-assets', { recursive: true, force: true })

const clone = spawnSync('git', ['clone', '--depth', '1', '--filter=blob:none', '--sparse', '--branch', assetsBranch, assetsRepo, 'minecraft-assets'], { stdio: 'inherit' })
if (clone.status !== 0) process.exit(clone.status || 1)

const sparse = spawnSync('git', ['-C', 'minecraft-assets', 'sparse-checkout', 'set', 'data'], { stdio: 'inherit' })
if (sparse.status !== 0) process.exit(sparse.status || 1)

if (!fs.existsSync(assetsCheck)) {
  console.error(`Could not load ${assetsCheck}`)
  process.exit(1)
}
