//优化普通元素对重复值过多影响效率问题
function sort(arr,l,r){
    function swap(l,r){
        let p = arr[l]
        arr[l] = arr[r]
        arr[r] = p
    }
    debugger;
    let p1 = l+1;//[l+1,p1)<=arr[l]
    let p2 = r;//(p2,r]>=arr[l]
    while(true){
        while(p1<=p2 && arr[p1]<arr[l]){
            p1++;
        }
        while(p2>=p1 && arr[p2]>arr[l]){
            p2--;
        }
        if(p1>p2){
            break;
        }
        swap(p1,p2);
        p1++;
        p2--;
    }
    swap(l,p2)
    if(p2-1>l){
        sort(arr,l,p2-1);
    }
    if(p2+1<r){
        sort(arr,p2+1,r)
    }
    return arr
}