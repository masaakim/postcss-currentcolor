var postcss = require('postcss')

module.exports = postcss.plugin('postcss-currentcolor', function() {
  return function (root) {
    root.walkDecls(function (decl) {
      if (decl.value.match(/currentcolor/)) {
        decl.value = decl.value.replace(/currentcolor/g, 'currentColor')
      } else if (decl.value.match(/current-color/)) {
        decl.value = decl.value.replace(/current-color/g, 'currentColor')
      }
    })

    return root
  }
})
