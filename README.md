# Vigur [![Build Status](https://travis-ci.org/hph/vigur.svg?branch=master)](https://travis-ci.org/hph/vigur)

A two-dimensional vector library written with clarity and ease of use in mind.
Leverages on new ES6 features and syntax and has 100% test coverage.

### Setup & usage
To use Vigur on Node.js, install it with `npm install vigur` and start playing
around:

```javascript
let Vector = require('vigur');
let myVector = new Vector(2, 3);
```

To use Vigur on the front end via bower, install it with `bower install vigur`
and add the script to your template:

```html
<script src="./bower_components/vigur/dist/vigur.min.js"></script>
<script>
  var myVector = new Vector(2, 3);
</script>
```

### Examples
```javascript
// Create a vector
let vector = new Vector(2, 3); // => Vector {x: 2, y: 3}

// Some properties are available as getter methods
vector.magnitude;  // => 3.605551275463989
vector.normalized; // => Vector {x: 0.5547001962252291, y: 0.8320502943378437}
vector.direction;  // => 0.982793723247329

// Some methods accept both values and vectors as params; some take none
vector                        // => Vector {x: 2, y: 3}
  .multiply(3)                // => Vector {x: 6, y: 9}
  .multiply(new Vector(1, 3)) // => Vector {x: 6, y: 27}
  .rotate(Math.PI / 2)        // => Vector {x: -27, y: 6.000000000000002}
  .rounded;                   // => Vector {x: -27, y: 6}

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
full list of available methods and documentation about them. The
[tests](https://github.com/hph/vigur/blob/master/test/vigur.js) are also a good
resource.
