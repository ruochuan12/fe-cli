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

console.log('release', release);
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
console.log('fe-cli');

console.log('commit');
program.parse(process.argv);