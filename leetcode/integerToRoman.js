//12. Integer to Roman
//Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const intToRoman = (num) => {
    var n = num.toString().split('');
    var word = '';
    
    for(var i = 0; i < n.length; i++) {
      word += map[n.length - i - 1][parseInt(n[i])];
    }
    
    return word;
}

var map = [
    ['', 'I', "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'M', 'MM', 'MMM']
  ];

intToRoman(3234);