import Heap from "./最小堆"//引入最小堆
//图有几种表现方式此处使用邻接矩阵来表示
class Edge{
    constructor(v,w,wieght){
        this.v = v;
        this.w = w;
        this.wieght = wieght
    }
}
class DenseWeightGraph{
    constructor(n,direct){
        this.n = n//节点数
        this.direct = direct//是否为有向图
        this.m = 0//边数
        this.edgs = [];//邻接矩阵
        for(let i=0;i<n;i++){
            let arr = [];
            for(let i=0;i<n;i++){
                arr.push(null)
            }
            this.edgs.push(arr)
        }
    }
    //添加边
    addEdgs(v,w,weight){
        if(this.hasEdgs(v,w)){
            return 
        }
        if(v<this.n && w <this.n){            
            this.edgs[v][w] = new Edge(v,w,weight) 
            if(!this.direct){
                this.edgs[w][v] = new Edge(w,v,weight)  
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