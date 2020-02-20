class Heap{
    constructor(){
        this.arr = [];
        this.count = 0
    }
    swap(l,r){
        let arr = this.arr;
        let p = arr[l]
        arr[l] = arr[r]
        arr[r] = p
    }
    //插入数据
    insert(item){
        this.arr.push(item)
        this.count++;
        this.shiftUp(this.count-1)
    }
    //取出最大值后的数组
    getMax(){
        if(this.count<1){
            return this.arr;
        }
        this.swap(0,this.count-1)
        let result = this.arr.pop();
        this.count--
        if(this.count>2){
            this.shiftDown(0)
        }
        return this.arr       
    }
    shiftDown(i){
        let j = 2*i+1;
        if(j<this.count){
            if(j+1<this.count && this.arr[j+1]>this.arr[j]){
                j++
            }
            if(this.arr[j]>this.arr[i]){
                this.swap(j,i);
                this.shiftDown(j)
            }
        }
        return        
    }
    shiftUp(i){
        if(i>0){
            let parent = Math.ceil(i/2-1);
            if(this.arr[parent]<this.arr[i]){
                this.swap(i,parent);
                return this.shiftUp(parent)
            }else{
                return;
            }
        }
        return this.arr
    }
}
export default Heap