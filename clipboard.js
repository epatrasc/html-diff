import {exec} from 'child_process';

/**
 *
 * @param {*} func
 *
 *  Example:
 *
 *  getClipboard(function(err, text) {
 *    if (err) throw err;
 *    console.log(text);
 *  });
 */
const getClipboard = function(func) {
  exec('pbpaste', function(err, stdout, stderr) {
    if (err || stderr) return func(err || new Error(stderr));
    func(null, stdout);
  });
};


export  {
  getClipboard
};
