//我的方法
function f(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] % 2 == i % 2) continue;
    for (let j = i + 1; i < len; j++) {
      if(arr[j] % 2== i % 2) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        break;
      }
    }
  }
  return arr
}
//视频方法
function f(arr){
  // 声明一个空数组用来存储奇偶排序后的数组
  let r = []
  // 记录奇数、偶数位下标
  let odd = 1
  let even = 0
  // 对数组进行遍历
  arr.forEach(item => {
    if (item % 2 === 1) {
      r[odd] = item
      odd += 2
    } else {
      r[even] = item
      even += 2
    }
  })
  return r
}