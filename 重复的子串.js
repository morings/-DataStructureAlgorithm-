//我的方法
function f(str) {
  for(let i=2;i<=str.length/2;i++){
    if(str.length%i==0){
      let sub = str.substring(0,str.length/i);
      return sub.repeat(i) == str
    }
  }
  return false;
}
//视频方法
function  f(str){
  var reg = /^(\w+)\1+$/
  return reg.test(str)
}
