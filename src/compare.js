import chalk from 'chalk';
import pretty from 'pretty';
import * as Diff from 'diff';
import * as clipboard from './clipboard.js';

const isHtml = (text) => [/html/, /body/, /div/].some((tag) => tag.test(text)) && text.split('+').length > 1;

clipboard.getClipboard(function(err, text) {
  if (err) throw err;

  if (!isHtml(text)) {
    console.log(chalk.yellow(text));
    console.log();
    console.log(chalk.yellow('WARNING: Did you copy some html to compare?'));

    process.exit(1);
  }

  const htmlDiff = text.split('+').map((val) => val.trim()).map(pretty);

  const diff = Diff.diffChars(...htmlDiff);

  diff.forEach((part) => {
    const color = part.added ? chalk.green : part.removed ? chalk.red : chalk.grey;
    process.stdout.write(color(part.value));
  });

  console.log()
});


