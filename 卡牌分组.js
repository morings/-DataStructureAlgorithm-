function f(arr) {
  let str = arr.sort().join("");
  let group = str.match(/(\d)\1+|\d/g)//分组
  //求最大公约数
  let gcd = (a,b)=>{
    if(b==0){
      return a;
    }else{
      return gcd(b,a%b)
    }
  }
  //遍历
  while (group.length>1) {
    let a = group.shift().length;
    let b = group.shift().length;
    let v = gcd(a,b);
    if(v>1){
      group.unshift('0'.repeat(v));
    }else{
      return false;
    }
  }
  return group.length?group[0].length>1:false
}