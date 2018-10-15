const Stack = require('./stack').Stack;

// class SortStack{
//     constructor(){
//         this.s1 = new Stack();
//         this.s2 = new Stack();

//         this.s1.push(7);
//         this.s1.push(10);
//         this.s1.push(5);

//         //S1   // S2
//         //     // 12
//         // 5   // 8
//         // 10  // 3
//         // 7   // 1

//         this.s2.push(1);
//         this.s2.push(3);
//         this.s2.push(8);
//         this.s2.push(12);
//     }

//     sort() {

//     }
// }

// var sortedStack = new SortStack();
// console.log(sortedStack.s1.head.value); //5

var unsortedStack = new Stack();
unsortedStack.push(1);
unsortedStack.push(12);
unsortedStack.push(3);
unsortedStack.push(8);
unsortedStack.push(30);
unsortedStack.peek();
var sortStack = (stack) => {
    var tempStack = new Stack();
    while (!stack.isEmpty()){
        var temp = stack.pop();
        //console.log("this is temp", temp);
        while (!tempStack.isEmpty() && tempStack.peek().value > temp.value){
            stack.push(tempStack.pop().value);
        }
        tempStack.push(temp.value);
        console.log("logging tempstack", tempStack)
        // console.log(tempStack);
    }
    //done sorting
    // console.log("Done sorting")
    // console.log(stack);
    // console.log(tempStack);
    while (!tempStack.isEmpty()){
        console.log({stack, tempStack})
        console.log("BIG PUSH")
        stack.push(tempStack.pop().value);
    }
}

sortStack(unsortedStack);

unsortedStack.peek().value;
console.log(unsortedStack.head);
console.log(unsortedStack.head.next.next.next.next);
console.log("**");
