var stylus = require('stylus');

module.exports = function() {
  return function(style) {

    /**
     * Check if file exists in file system
     * @param  {string} relative file path
     * @return {boolean} is file exists (`true/false`)
     */
    style.define('file-exists', function(path) {
      return !!stylus.utils.lookup(path.string, this.paths);
    });
  };
};