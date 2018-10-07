// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution2( N ) {
    let str = N.toString( 2 ), 
        zeroCount = 0,
        result = 0;
 
    for ( let digit of str ) {
        console.log(digit);
        if ( digit === '0' ) {
            console.log("in if");
            zeroCount += 1;
        } else /* if ( digit === '1' ) */ {
            console.log("in else");
            result = Math.max( result, zeroCount );
            zeroCount = 0;
        }
    }
 
    return result;
}

const INT1 = 10000; // 10011100010000
const INT2 = 343; // 101010111
const INT3 = 117; // 1110101
const INT4 = 8; // 10000

var sol1 = solution2(INT1);
var sol2 = solution2(INT2);
var sol3 = solution2(INT3);
var sol4 = solution2(INT4);

console.log({sol1, sol2, sol3, sol4});
// console.log({sol4});