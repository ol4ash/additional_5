module.exports = function check(str, bracketsConfig) {
  
str = str.split("");
config = bracketsConfig;

for (var y=0; y<str.length-1; y++) {
  var z = y+1;
  var arrayTest = [str[y],str[z]];

for (var i=0; i<config.length; i++){
  arrayCheck = config[i];

if ((arrayTest[0]===arrayCheck[0])&&(arrayTest[1]===arrayCheck[1])){
  str.splice(y,2);
  y=-1;
}
}
}

if (str.length ===0){
	result = true;
}
  else {
  	result = false;
  }


return result

}
