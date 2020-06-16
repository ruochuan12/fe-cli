/**
 * pull 冲突的代码
 * @author luoxiaochuan <lxchuan12@163.com>
 * @date 2020-06-15
 */
const conventionalChangelog =  require('conventional-changelog');
const { createWriteStream, readFileSync } = require('fs-extra');
const ora = require('ora');
const DIST_FILE = process.cwd();

exports.changelog = async function(){
    const spinner = ora('Generating changelog...').start();
    console.log('--------changelog');
    return new Promise(resolve => {
        conventionalChangelog(
          {
            preset: 'angular',
          },
          null,
          null,
          null,
          {
            // mainTemplate,
            // headerPartial,
            // commitPartial,
            // transform,
          }
        )
          .pipe(createWriteStream(DIST_FILE))
          .on('close', () => {
            spinner.succeed(`Changelog generated at ${DIST_FILE}`);
            resolve();
          });
      });
}