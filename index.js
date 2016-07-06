var postcss = require('postcss')

module.exports = function () {
  return function (root) {
    root.walkDecls(function (decl) {
      if (decl.value === 'currentcolor' || decl.value === 'current-color') {
        decl.value = 'currentColor'
      }
    })

    return root
  }
}
