
/*----------------------------------------------------------------
Minimal Squares in a Rectangle Given a rectangle of dimensions a and b,
we want to divide it into the minimal number of covering squares.
The following rectangle has a dimensions of 5 x 3.
It can be cut into 4 squares: [ 3x3, 2x2, 1x1, 1x1 ]
Implement a function that will take two numbers representing
the sides of the rectangle and will return an array containing the dimension of each resulting square.
*/

function squaresInRect(a ,b){
    var arr = [3,4];

    return arr; 
}

var sqrs = squaresInRect(5, 3); console.log(sqrs); // [3, 2, 1, 1]
sqrs = squaresInRect(3, 5); console.log(sqrs); // [3, 2, 1, 1]
sqrs = squaresInRect(5, 5); console.log(sqrs); // [5]
