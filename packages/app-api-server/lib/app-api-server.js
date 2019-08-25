const appIso = require('@alincode/app-iso')

module.exports = appApiServer

function appApiServer() {
  console.log('appApiServer')
  feature1()
  feature2()
  console.log('do refactor')
}

function feature1() {}
function feature2() {}
