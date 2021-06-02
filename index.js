// Write your solution in this file!
let driver = {}
function updateDriverWithKeyAndValue(obj, key, val){
  let newDriver = {...obj}
  newDriver[key] = val
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val) {
  obj[key] = val
  return obj
}

function deleteFromDriverByKey(obj, key) {
  let newDriver = {...obj}
  delete newDriver[key]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key]
  return obj
}
//let updateDriverWithKeyAndValue = function(obj, key, val){
//  return Object.assign({}, obj, {[key]: val})
//}
