function f(arr) {
  arr = arr.filter(item=>item>0)
  let l = arr.length;
  for(let i=l-1;i>0;i--){
    for(let j=0;j<i;j++){
      if(arr[j]<arr[j+1]){
        let tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
    }
    if(i==l-1 && arr[i]-1>0){
      return (arr[i]-1)
    }
    if(i!=l-1 && arr[i]-arr[i+1]>1 && (arr[i+1]+1)>0){
      return (arr[i+1]+1)
    }
  }
  if(l==0){
    return 1
  }
}