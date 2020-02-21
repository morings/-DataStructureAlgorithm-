class Node{
    constructor(key,value){
        this.left = null;
        this.right = null;
        this.value = value;
        this.key = key
    }
}
class SearchTree{
    constructor(){
        this.root = null;//根节点
        this.count = 0;//节点数量
    }
    //插入元素
    insert(key,value){
        this.root = this._insert(this.root,key,value)
    }
    //检索元素
    search(key){
        return this._search(this.root,key)
    }
    //删除节点
    del(key){
       this._del(this.root,key) 
    }
    _del(root,key){
        if(root==null){
            return root
        }
        if(root.key>key){
            root.left = this._del(root.left,key)
        }else if(root.key<key){
            root.right = this._del(root.right,key)
        }else{
            if(!root.right){
                let node = root.left;
                root.left = null;
                this.count--
                return node
            }else if(!root.left){
                let node = root.right;
                root.right = null;
                this.count--
                return node
            }else{
                let node = this.minimum(root.right);
                root.key = node.key;
                root.value = node.value;
                root.right = this.removeMin(root.right)
                return root
            }
        }
        return root
    }
    //找出root树最小的节点
    minimum(root){
        if(root.left==null){
            return root
        }else{
            return this.minimum(root.left)
        }
    }
    //删除最小节点
    removeMin(root){
        if(root.left==null){      
            let node = root.right;
            root.right = null;
            this.count--
            return node;
        }
        root.left = this.removeMin(root.left);
        return root;
    }
    getFloor(key){
        return this._getFloor(this.root,key)
    }
    _getFloor(root,key){
        if(root==null){
            return null
        }
        if(root.key == key){
            return root
        }else if(root.key>key){
            return this._getFloor(root.left,key)
        }else{
            let tmpNode = this._getFloor(root.right,key);
            if(tmpNode){
                return tmpNode;
            }
            return root
        }
    }
    _search(root,key){
        if(root==null){
            return null
        }else if(root.key==key){
            return root
        }else if(root.key>key){
            
            return this._search(root.left,key)
            
        }else{
            
            return this._search(root.right,key)
        }
        
    }
    _insert(root,key,value){
        if(root){
            if(root.key==key){
                root.value = value;
            }else if(root.key<key){
                root.right = this._insert(root.right,key,value)
            }else{
                root.left = this._insert(root.left,key,value)
            }
            return root;
        }else{
            this.count++;
            return new Node(key,value);
        }
    }
}
//测试插入
function testInsert(){
    let tree = new SearchTree();
    tree.insert(0,1)
    tree.insert(1,2)
    tree.insert(3,1)
    tree.insert(4,4)
    tree.insert(2,4)
    return tree
}
let tree = testInsert();
let node = tree.getFloor(3.5)

console.log(node)