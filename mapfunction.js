
var words = ["ground", "control", "to", "major", "tom"];
function map(array, cb){
  var newArray =[];
  for(var i = 0; i < array.length; i++){
    length = cb(array[i]);
    newArray.push(length);
    //Return an array based on result
  }
  console.log(newArray);

}


//Test Cases
map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

