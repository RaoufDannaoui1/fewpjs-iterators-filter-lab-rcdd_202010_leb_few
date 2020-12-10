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