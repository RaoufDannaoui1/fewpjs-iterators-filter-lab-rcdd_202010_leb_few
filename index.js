// Code your solution here
function findMatching(drivers, str){

   return drivers.filter(function(name){
    return name.toLowerCase() === str.toLowerCase();
  })
}

function fuzzyMatch(drivers, str){
  return drivers.filter(function(name){
    return name.slice(0, str.length) === str;
  })
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
