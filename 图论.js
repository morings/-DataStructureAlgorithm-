//邻接矩阵表示
class DenseGraph{
    constructor(n,direct){
        this.n = n//节点数
        this.direct = direct//是否为有向图
        this.m = 0//边数
        this.edgs = [];//邻接矩阵
        for(let i=0;i<n;i++){
            let arr = [];
            for(let i=0;i<n;i++){
                arr.push(false)
            }
            this.edgs.push(arr)
        }
    }
    //添加边
    addEdgs(v,w){
        if(this.hasEdgs(v,w)){
            return 
        }
        if(v<this.n && w <this.n){
            if(this.direct){
                this.edgs[v][w] = true
            }else{
                this.edgs[v][w] = true
                this.edgs[w][v] = true
            }         
        }
        m++        
    }
    //判断是否有边
    hasEdgs(v,w){
        if(v<this.n&&w<this.n){
            return this.edgs[v][w]
        }else{
            return false
        }
        
    }
    //返回一个节点的所有相连的点
    adj(v){
        if(v>=n) return null
        let adj = []
        for(let i =0;i<this.n;i++){
            if(this.edgs[v][i]){
                adj.push(i)
            }
        }
        return adj
    }
}
//相邻节点迭代器
class DenseIterator{
    constructor(g,v){
        this.arr = g.adj(v);
        this.index = 0;
        this.v = v;
        this.size = this.arr.length
    }
    begin(){
        this.index=0;
        if(this.size){
            return this.arr[this.index]
        }
        return -1
    }
    next(){
        this.index++;
        if(this.index<this.size){
            return this.arr[this.index]
        }else{
            return -1
        }
    }
    end(){
        return this.index<this.size
    }
}
class SparseGraph{
    constructor(n,direct){
        this.n = n//节点数
        this.direct = direct//是否为有向图
        this.m = 0//边数
        this.edgs = [];//图的具体数据
        for(let i=0;i<n;i++){
            let arr = new Set();
            this.edgs.push(arr)
        }
    }
    addEdgs(v,w){
        if(v<this.n&& w<this.n){
            this.edgs[v].add(w)
            if(!this.direct){
                this.edgs[w].add(v)
            }
        }
    }
    hasEdgs(v,w){
        if(v<this.n&&w<this.n){
            return this.edgs[v].has(w)
        }else{
            return false
        }
    }
    adj(v){
        if(v>=this.n){
            return null
        }else{
            return [...this.edgs[v]]
        }
    }
}
//相邻节点迭代器
//相邻节点迭代器
class SparseIterator{
    constructor(g,v){
        this.arr = g.adj(v);
        this.index = 0;
        this.v = v;
        this.size = this.arr.length
    }
    begin(){
        this.index=0;
        if(this.size){
            return this.arr[this.index]
        }
        return -1
    }
    next(){
        this.index++;
        if(this.index<this.size){
            return this.arr[this.index]
        }else{
            return -1
        }
    }
    end(){
        return this.index<this.size
    }
}
//臨界表找两点路径//利用广度优先遍历
class Path{
    constructor(g,v){
        this.g = g;
        this.v = v;
        this.form = []//路径存储
        this.visit = []//是否訪問過
        for(let i =0;i<this.g.n;i++){
            this.form[i] = -1
            this.visit[i] = false
        }
        this.read(v)
    }
    //获得v与w之间的路径
    getPath(w){
        let arr = []
        if(this.form[w]==-1){
            return '两者之间没有路径'
        }
        arr.push(w)
        while(this.form[w]!=-1){
            if(this.form[w]==this.v){
                break;
            }else{
                arr.unshift(this.form[w]);
                w = this.form[w]
            }
        }
        arr.unshift(this.v);    
        return arr
    }
    read(v){
        this.visit[v] = true;
        let ita = new SparseIterator(this.g,v);     
        for(let j = ita.begin();ita.end();j=ita.next()){
            if(!this.visit[j]){
                this.form[j] = v;
                this.read(j)
            }
        }
    }
}
let eds = new SparseGraph(10,false)
eds.addEdgs(3,2)
eds.addEdgs(2,1)
eds.addEdgs(2,5)
let path = new Path(eds,3)
console.log(path.getPath(4 ))

