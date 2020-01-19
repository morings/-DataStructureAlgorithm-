function f(arr) {
  let max = 0;
  for(let i=arr.length-1;i>=0;i--){
    for(let j = 0;j<i;j++){
      if(a[j]>a[j+1]){
        let tmp = a[j];
        a[j] = a[j+1];
        a[j+1] = tmp;
      }     
    }
    if(i!=arr.length-1){
      let dis = arr[i+1] - arr[i]
      max = max<dis?dis:max;
    }
  }
  return max;
}