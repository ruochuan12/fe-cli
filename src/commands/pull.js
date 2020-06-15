/**
 * pull 冲突的代码
 * @author luoxiaochuan <lxchuan12@163.com>
 * @date 2020-06-15
 */
const shell = require('shelljs');

exports.pull = function(){

    if (!shell.which('git')) {
        shell.echo('Sorry, this script requires git');
        shell.exit(1);
    }

    console.log('pull');

    // Run external tool synchronously
    if (shell.exec('git stash && git pull && git stash pop').code !== 0) {
        shell.echo('Error: Git 拉取代码失败');
        shell.exit(1);
    }
}