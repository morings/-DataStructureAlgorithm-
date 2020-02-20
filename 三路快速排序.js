//优化普通元素对重复值过多影响效率问题
export default function sort(arr,l,r){
    function swap(l,r){
        let p = arr[l]
        arr[l] = arr[r]
        arr[r] = p
    }
    let p1 = l+1;//[l+1,p1)<arr[l]
    let p2 = r;//(p2,r]>arr[l]
    let i = l+1;
    debugger
    while(i<=p2){
        if(arr[i]>arr[l]){
            swap(i,p2);
            p2--
        }else if(arr[i] < arr[l]){
            swap(i,p1);
            p1++;
            i++;
        }else{
            i++
        }
    }
    swap(l,p1-1)
    if(p1-2>l){
        sort(arr,l,p1-2);
    }
    if(p2+1<r){
        sort(arr,p2+1,r)
    }
    return arr
}