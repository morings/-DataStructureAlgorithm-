//两种实现方式
//第一种便于查询
class FindQuick{
    constructor(n){
        this.arr = [];
        this.count = n;
        for(let i=0;i<n;i++){
            this.arr.push(i)
        }
    }
    //链接两点
    union(p,q){
        let m = this.arr[p];
        let j = this.arr[q];
        if(m==j){
            return
        }
        for(let i=0;i<this.arr.length;i++){
            if(this.arr[i] == j){
                this.arr[i] = m
            }
        }
    }
    //查询
    find(p){
        return this.arr[p]
    }

}
//第二种，优化链接
class UnionQuick{
    constructor(n){
        this.count = n;
        this.parent = [];
        this.rank = []//表示以i为根的集合中元素的层数,基于rank的优化
        for(let i=0;i<n;i++){
            this.parent.push(i);
            this.rank.push(1)
        }
    }
    find(p){
        if(p!=this.parent[p]){
            this.parent[p] = this.find(this.parent[p])
        }
        return this.parent[p]
            
    }
    union(p,q){
        let i = this.find(p);
        let j = this.find(q);
        if(i==j){
            return ;
        }
        if(this.rank[i]>this.rank[j]){
            this.parent[j] = i;
        }else if(this.rank[j]>this.rank[i]){
            this.parent[i] = j;
        }else{
            this.parent[j] = i;
            this.rank[i]++;
        }
        
    }
}
let union1 = new FindQuick(10)
union1.union(2,5)
union1.union(3,1)
console.log(union1.arr)
