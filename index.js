// Write your solution in this file!
let driver = {}
function updateDriverWithKeyAndValue(obj, key, val){
  let newDriver = {...obj}
  newDriver[key] = val
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val) {
  
}

//let updateDriverWithKeyAndValue = function(obj, key, val){
//  return Object.assign({}, obj, {[key]: val})
//}
