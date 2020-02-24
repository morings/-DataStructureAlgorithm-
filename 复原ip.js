
function f(str){
    let arr = [];
    search([],str);
    return arr;
    //递归函数
    function search(cur,sbr){
        if(cur.length===4 && cur.join('').length===str.length){
            arr.push(cur.join('.'))
        }else if(cur.length<4 && cur.join('').length<str.length){
            for(let i=1,len=Math.min(3,sbr.length);i<=len;i++){
                let m = sbr.substring(0,i);
                if(m<256){
                    let n = sbr.substring(i);
                    let tmp = cur.concat([m])
                    search(tmp,n)
                }
            }
        }
    }
}
console.log(f('231123211'))