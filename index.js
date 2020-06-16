/**
 * 脚手架
 * @author 若川 <lxchuan12@163.com>
 * @date 2020-06-01
 */

const program = require('commander');
const packageJson = require('./package.json');
const version = packageJson.version;
const { exec } = require('child_process');
const release = require('./src/commands/release.js');
const commit = require('./src/commands/commit.js');
const changelog = require('./src/commands/changelog.js');
const { pull } = require('./src/commands/pull.js');

// console.log('release', release);
// const inquirer = require('inquirer');

program
    .version(version)
    .command('commit')
    .description('使用 git-cz 提交 message')
    .action(commit);
program
    .version(version)
    .command('release')
    .description('release')
    .action(release);
program
    .version(version)
    .command('pull')
    .description('git pull 防止冲突的拉取代码')
    .action(pull);
program
    .command('changelog')
    .description('生成 changelog')
    .action(changelog);
console.log('fe-cli');

console.log('commit');
program.parse(process.argv);