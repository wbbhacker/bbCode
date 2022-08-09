var maximumBags = function(capacity, rocks, additionalRocks) {
    let queue = []

    let res = 0

    for (let i = 0; i < capacity.length; i++) { 
        let diff = capacity[i] - rocks[i]
        console.log(diff)
        if (queue.length === 0) {
            queue.push(diff)
        } else { 
            let j = queue.length - 1
            while (j >= 0) {
                if (diff <= queue[0]) {
                    queue.unshift(diff)
                } else if (diff >= queue[j]) { 
                    queue.splice(i,0,diff)
                }
                j--
            }
        }
    }
    while (additionalRocks >= 0) {
        additionalRocks = additionalRocks - queue[0] 
        if (additionalRocks >= 0) {
            res++
            queue.shift()
        }
    }
    return res
};


const res = maximumBags([2, 3, 4, 5], [1, 2, 4, 4], 2)
console.log(res)