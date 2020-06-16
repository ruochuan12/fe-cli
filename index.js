/**
 * 脚手架
 * @author 若川 <lxchuan12@163.com>
 * @date 2020-06-01
 */

const program = require('commander');
const packageJson = require('./package.json');
const { exec } = require('child_process');
const release = require('./src/commands/release.js');
const commit = require('./src/commands/commit.js');
const { pull } = require('./src/commands/pull.js');
const { changelog } = require('./src/commands/changelog.js');
// console.log();
program.version(packageJson.version);
// console.log('release', release);
// const inquirer = require('inquirer');

program.command('commit')
    .description('使用 git-cz 提交 message')
    .action(commit);

program.command('release')
    .description('release')
    .action(release);

program.command('pull')
    .description('git pull 防止冲突的拉取代码')
    .action(pull);

program.command('changelog')
    .description('git changelog 防止冲突的拉取代码')
    .action(changelog);

console.log('fe-cli');

program.parse(process.argv);