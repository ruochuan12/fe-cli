const releaseIt = require('release-it');
// import { join } from 'path';

// const PLUGIN_PATH = join(__dirname, '../compiler/vant-cli-release-plugin.js');

module.exports = async function release() {
  await releaseIt({
    plugins: {
    //   [PLUGIN_PATH]: {},
    },
    git: {
      tagName: 'v${version}',
      commitMessage: 'chore: release ${version}',
    },
  });
}