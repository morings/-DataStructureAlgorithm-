 function sort(arr,left,right){
     debugger
    if(right>left){
        let p = parseInt((right-left)/2+left);
        sort(arr,left,p);
        sort(arr,p+1,right);
        sort1(left,p,right);
    }else{
        return 
    }
    return arr 
    function sort1(left,mid,right){
        let b = arr.slice(left,right+1);
        let p1 = left;
        let p2 = mid+1;
        for(let i=left;i<=right;i++){
            if(p1>mid){
                arr[i] = b[p2-left];
                p2++
            }else if(p2>right){
                arr[i] = b[p1-left];
                p1++
            }else{
                if(b[p1-left]>b[p2-left]){
                    arr[i] = b[p2-left]
                    p2++
                }else{
                    arr[i] = b[p1-left]
                    p1++
                }
            }
        }
    }
}