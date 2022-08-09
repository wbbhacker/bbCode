/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
   this.queue = new Array(k)
   this.frontIdx = 0
   this.rearidx = 0
   console.log(this.queue[0])
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {

};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {

};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {

};

new MyCircularQueue(3)

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */