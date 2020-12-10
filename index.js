// Code your solution here
function findMatching(drivers, str){
  
   return drivers.filter(function(name){
    return name.toLowerCase() === str.toLowerCase();
  })
}