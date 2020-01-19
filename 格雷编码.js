//我的方法 
function f(n) {
  let arr = ['0','1'];
  let gcd = (arr)=>{
    let arr_ = [].concat(arr);
    let result = arr.concat(arr_.reverse())
    for(let i=0;i<result.length;i++){
      if(i<result.length/2){
        result[i] = '0'+result[i];
      }else{
        result[i] = '1'+result[i];
      }
    }
    return result
  }
  while (n>1) {
    arr = gcd(arr);
    n--;
  }  
  let result = [];
  for(let i=0;i<arr.length;i++){
    result.push(parseInt(arr[i],2))//二进度转十进制
  }
  return result
}
//视频方法
function f(n){
  if (n === 1) {
    return ['0', '1']
  } else {
    let prev = f(n - 1)
    let result = []
    let max = Math.pow(2, n) - 1
    for (let i = 0, len = prev.length; i < len; i++) {
      result[i] = `0${prev[i]}`
      result[max - i] = `1${prev[i]}`
    }
    return result
  }
}
