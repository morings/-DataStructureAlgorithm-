function f(str,words){
    let arr = []
    let result = []
    search([],words)
    //递归函数
    function search(cur,sub){
        if(cur.length===words.length){
            arr.push(cur.join(''))
        }else{
            for(let i=0;i<sub.length;i++){
                
                search(cur.concat([sub[i]]),sub.slice(0,i).concat(sub.slice(i+1)))
            }
        }
    }
    arr = new Set(arr);//去除重复值
    for(let value of arr){
        let index = str.indexOf(value)
        if(index!=-1){
            result.push({
                index,
                value
            })
        }
    }
    return result;
    
}
console.log(f('barfoothefoobarman',['foo','bar']))
