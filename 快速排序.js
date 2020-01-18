
function f(a){
  if(a.length<2){
    return a
  }
  let i = 0
  let left = [];
  let right = []; 
  for(let j=i+1;j<a.length;j++){
    if(a[j]>a[i]){
      right.push(a[j])
    }else{
      left.push(a[j])
    }
  }      
  return f(left).concat(a[i]).concat(right)
}


//高阶方法
function f1(a){
  let swap = (index1,index2)=>{
    let tmp = a[index1];
    a[index1] = a[index2];
    a[index2] = tmp;
  }
  let getCenter = (left,right)=>{
    let sign = a[left];
    let odd = left+1;
    for(let i=odd;i<=right;i++){
      if(a[i]<sign){
        swap(odd,i);
        odd++
      }
    }
    swap(odd-1,left);
    return odd
  }
  let sort = (left,right)=>{
    if(left<right){
      let center = getCenter(left,right);
      sort(left.center-1)
      sort(center,right)
    }
  }
  sort(0,a.length-1)
  return a
}