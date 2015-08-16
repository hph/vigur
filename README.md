# Vigur
A two-dimensional vector library written with clarity and ease of use in mind.
Leverages on new ES6 features and syntax.

### Examples
```javascript
// Create a vector
let vector = new Vector(2, 3); // => Vector {x: 2, y: 3}

// Some properties are available as getter methods
vector.magnitude;  // => 3.605551275463989
vector.normalized; // => Vector {x: 0.5547001962252291, y: 0.8320502943378437}
vector.direction;  // => 0.982793723247329

// Some methods accept both values and other vectors
vector                         //=> Vector {x: 2, y: 3}
  .multiply(3)                 //=> Vector {x: 6, y: 9} 
  .multiply(new Vector(1, 3)); //=> Vector {x: 6, y: 27}

// Operations that return vectors are chainable
new Vector(2, 3)               // => Vector {x: 2, y: 3}
  .add(new Vector(2, 5))       // => Vector {x: 4, y: 8}
  .multiply(new Vector(1, 3))  // => Vector {x: 4, y: 24}
  .subtract(new Vector(4, 10)) // => Vector {x: 0, y: 14}
  .invert()                    // => Vector {x: 0, y: -14}
  .cross(new Vector(3, 7));    // => 42

// Also exposes utility methods
Vector.degreesToRadians(180);
// => 3.141592653589793
Vector.radiansToDegrees(Math.PI);
// => 180
```
Check the [source](https://github.com/hph/vigur/blob/master/src/vigur.js) for a
full list of available methods and documentation about them.
