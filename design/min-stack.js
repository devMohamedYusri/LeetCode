
var MinStack = function() {
        this.stk=[]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stk.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stk.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stk[this.stk.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min=this.stk[0];
    for(const i of this.stk){
        if(min>i){
            min=i;
        }
    }
    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */