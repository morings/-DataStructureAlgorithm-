function f(str) {
  var l = str.length;
  var result = [];
  for(var i = 0 ;i<l-1;i++){
    let test = match(str.slice(i))
    if(test){
      result.push(test)
    }
  }
  return result;
}
function match(str){
  let j = str.match(/^(0+|1+)/) [0];
  let o = (j[0] ^ 1).toString().repeat(j.length);
  let test = new RegExp('^('+j+o+')')
  if(test.test(str)){
    return str.match(test)[0]
  }else{
    return ''
  }
}