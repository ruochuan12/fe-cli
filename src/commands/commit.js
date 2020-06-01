const gitcz = require('git-cz');
// import { join } from 'path';

// const PLUGIN_PATH = join(__dirname, '../compiler/vant-cli-release-plugin.js');

module.exports = async function commit() {
  await gitcz({});
}