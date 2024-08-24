class Queue{
    constructor(){
        this.items = []
    }
    enqueue(x){
        this.items.push(x)
    }
    dequeue(){
        if(this.isEmpty()){
            return "stack is under flow"
        }
        let removed = this.items.shift()
        this.items.shift()
        return removed
    }
    front(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.items[0]
    }
}