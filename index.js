var postcss = require('postcss')

module.exports = postcss.plugin('postcss-currentcolor', function() {
  return function (root) {
    root.walkDecls(function (decl) {
      decl.value = decl.value.replace(/\bcurrent-?color\b/g, 'currentColor')
    })
  }
})
