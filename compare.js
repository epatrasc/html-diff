import chalk from 'chalk';
import pretty from 'pretty';
import * as Diff from 'diff';
import * as clipboard from './clipboard.js';

const defaultString = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
+
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  This is a change!
</body>
</html>`;

clipboard.getClipboard(function(err, text) {
  if (err) throw err;

  const html =  text.split('+').length > 1 ? text : defaultString;

  const htmlDiff = html.split('+').map((val) => val.trim()).map(pretty);

  const diff = Diff.diffChars(...htmlDiff);

  diff.forEach((part) => {
    const color = part.added ? chalk.green : part.removed ? chalk.red : chalk.grey;
    console.log(color(part.value));
  });
});


