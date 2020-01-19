//我的方法
function f(a,k){
  //选择排序
  for(let i = 0;i<k;i++){
    let max = a[i]
    for(let j=i+1;j<a.length;j++){
      if(a[j]>max){
        a[i] = a[j];
        a[j] = max;
        max = a[i];
      }
    }
  }
  return a[k-1]
}