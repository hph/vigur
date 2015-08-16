'use strict';

/**
 * Vigur
 *
 * A two-dimensional vector library written with clarity and ease of use in
 * mind. Leverages on new ES6 features and syntax.
 */

class Vector {
  /**
   * Class constructor.
   *
   * ### Example:
   *     new Vector(2, 3);
   *     // => Vector {x: 2, y: 3}
   *
   * @param {Number} x Value of the x axis.
   * @param {Number} y Value of the y axis.
   * @return {Vector} A new instance of Vector.
   */
  constructor (x, y) {
    [this.x, this.y] = [x, y];
  }

  /**
   * Magnitude (or length) of the vector.
   *
   * ### Example:
   *     new Vector(2, 3).magnitude;
   *     // => 3.605551275463989
   *
   * @return {Number} Magnitude (or length) of the vector.
   */
  get magnitude () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * Alias for Vector#magnitude.
   *
   * ### Example:
   *     new Vector(2, 3).length;
   *     // => 3.605551275463989
   *
   * @return {Number} Magnitude (or length) of the vector.
   */
  get length () {
    return this.magnitude;
  }

  /**
   * Get the normalized vector without affecting the current instance.
   *
   * ### Example:
   *     let vector = new Vector(2, 3);
   *     vector.normalized;
   *     // => Vector {x: 0.5547001962252291, y: 0.8320502943378437}
   *     vector;
   *     // => Vector {x: 2, y: 3}
   *
   * @return {Vector} A new instance of Vector.
   */
  get normalized () {
    return this.clone().normalize();
  }

  /**
   * Get the inverted vector without affecting the current instance.
   *
   * ### Example:
   *     let vector = new Vector(2, 3)
   *     vector.inverted;
   *     // => Vector {x: -2, y: -3}
   *     vector;
   *     // => Vector {x: 2, y: 3}
   *
   * @return {Vector} A new instance of Vector.
   */
  get inverted () {
    return this.clone().invert();
  }

  /**
   * Get the the vector with rounded values.
   *
   * ### Example:
   *     let vector = new Vector(2.3, 3.5);
   *     vector.rounded;
   *     // => Vector {x: 2, y: 4}
   *     vector;
   *     // => Vector {x: 2.3, y: 3.5}
   *
   * @return {Vector} A new instance of Vector.
   */
  get rounded () {
    return this.clone().round();
  }

  /**
   * Check if the vector is the zero vector.
   *
   * ### Example:
   *     new Vector(2, 3).isZero;
   *     // => false
   *
   * @return {Boolean}
   */
  get isZero () {
    return this.x === 0 && this.y === 0;
  }

  /**
   * The horizontal angle of the vector.
   *
   * ### Example:
   *     new Vector(2, 3).horizontalAngle;
   *     // => 0.982793723247329
   *
   * @return {Number} The angle in radians.
   */
  get horizontalAngle () {
    return Math.atan2(this.y, this.x);
  }

  /**
   * The vertical angle of the vector.
   *
   * ### Example:
   *     new Vector(2, 3).verticalAngle;
   *     // => 0.5880026035475675
   *
   * @return {Number} The angle in radians.
   */
  get verticalAngle () {
    return Math.atan2(this.x, this.y);
  }

  /**
   * The direction of the vector (alias for Vector#horizontalAngle).
   *
   * ### Example:
   *     new Vector(2, 3).direction;
   *     // => 0.982793723247329
   *
   * @return {Number} The direction in radians.
   */
  get direction () {
    return this.horizontalAngle;
  }

  /**
   * Normalize the vector.
   *
   * ### Example:
   *     new Vector(2, 3).normalize();
   *     // => Vector {x: 0.5547001962252291, y: 0.8320502943378437}
   *
   * @return {Vector} The vector instance.
   */
  normalize () {
    [this.x, this.y] = [this.x / this.magnitude, this.y / this.magnitude];
    return this;
  }

  /**
   * Invert the vector.
   *
   * ### Example:
   *     new Vector(2, 3).invert();
   *     // => Vector {x: -2, y: -3}
   *
   * @return {Vector} The vector instance.
   */
  invert () {
    [this.x, this.y] = [-this.x, -this.y];
    return this;
  }

  /**
   * Round the values of both axes to their nearest integers.
   *
   * ### Example:
   *     new Vector(2.3, 3.5).round();
   *     // => Vector {x: 2, y: 4}
   *
   * @return {Vector} The vector instance.
   */
  round () {
    [this.x, this.y] = [Math.round(this.x), Math.round(this.y)];
    return this;
  }

  /**
   * Make the vector the zero vector.
   *
   * ### Example:
   *     new Vector(2, 3).zero();
   *     // => Vector {x: 0, y: 0}
   *
   * @return {Vector} The vector instance.
   */
  zero () {
    this.x = this.y = 0;
    return this;
  }

  /**
   * Return a new instance of the same vector.
   *
   * ### Example:
   *     new Vector(2, 3).clone();
   *     // => Vector {x: 2, y: 3}
   *
   * @return {Vector} A new instance of Vector.
   */
  clone () {
    return new Vector(this.x, this.y);
  }

  /**
   * Check if the vector is equal to another vector.
   *
   * ### Example:
   *     new Vector(2, 3).isEqual(new Vector(2, 5));
   *     // => false
   *
   * @param {Vector} other Another vector instance to compare.
   * @return {Boolean}
   */
  isEqual (other) {
    return this.x === other.x && this.y === other.y;
  }

  /**
   * Add a value or another vector to the vector.
   *
   * ### Example
   *     new Vector(2, 3).add(2);
   *     // => Vector {x: 4, y: 5}
   *     new Vector(2, 3).add(new Vector(2, 5));
   *     // => Vector {x: 4, y: 8}
   *
   * @param {Number|Vector} value The value or vector to add.
   * @return {Vector} The vector instance.
   */
  add (value) {
    if (value instanceof Vector) {
      [this.x, this.y] = [this.x + value.x, this.y + value.y];
    } else {
      [this.x, this.y] = [this.x + value, this.y + value];
    }
    return this;
  }

  /**
   * Subtract a value or another vector from the vector.
   *
   * ### Example:
   *     new Vector(2, 3).subtract(2);
   *     // => Vector {x: 0, y: 1}
   *     new Vector(2, 3).subtract(new Vector(2, 5));
   *     // => Vector {x: 0, y: -2}
   *
   * @param {Number|Vector} value The value or vector to add.
   * @return {Vector} The vector instance.
   */
  subtract (value) {
    if (value instanceof Vector) {
      [this.x, this.y] = [this.x - value.x, this.y - value.y];
    } else {
      [this.x, this.y] = [this.x - value, this.y - value];
    }
    return this;
  }

  /**
   * Multiply the vector with a value or another vector.
   *
   * ### Example:
   *     new Vector(2, 3).multiply(2);
   *     // => Vector {x: 4, y: 6}
   *     new Vector(2, 3).multiply(new Vector(2, 5));
   *     // => Vector {x: 4, y: 15}
   *
   * @param {Number|Vector} value The value or vector with which to multiply.
   * @return {Vector} The vector instance.
   */
  multiply (value) {
    if (value instanceof Vector) {
      [this.x, this.y] = [this.x * value.x, this.y * value.y];
    } else {
      [this.x, this.y] = [this.x * value, this.y * value];
    }
    return this;
  }

  /**
   * Divide the vector with a value or another vector.
   *
   * ### Example:
   *     new Vector(2, 3).divide(2);
   *     // => Vector {x: 1, y: 0.5}
   *     new Vector(2, 3).divide(new Vector(2, 5));
   *     // => Vector {x: 1, y: 0.6}
   *
   * @param {Number|Vector} value The value or vector with which to divide.
   * @return {Vector} The vector instance.
   */
  divide (value) {
    if (value instanceof Vector) {
      [this.x, this.y] = [this.x / value.x, this.y / value.y];
    } else {
      [this.x, this.y] = [this.x / value, this.y / value];
    }
    return this;
  }

  /**
   * The dot product with another vector.
   *
   * ### Example:
   *     new Vector(2, 3).dot(new Vector(2, 5));
   *     // => 19
   *
   * @param {Vector} other The other vector with which to calculate.
   * @return {Number} The dot product.
   */
  dot (other) {
    return this.x * other.x + this.y * other.y;
  }

  /**
   * The cross product with another vector.
   *
   * ### Example:
   *     new Vector(2, 3).cross(new Vector(2, 5));
   *     // => 4
   *
   * @param {Vector} other The other vector with which to calculate.
   * @return {Number} The cross product.
   */
  cross (other) {
    return this.x * other.y - this.y * other.x;
  }

  /**
   * The Euclidean distance of another vector.
   *
   * ### Example:
   *     new Vector(2, 3).distance(new Vector(2, 5));
   *     // => 2
   *
   * @param {Vector} other The other vector with which to calculate.
   * @return {Number} The distance between the two vectors.
   */
  distance (other) {
    return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
  }

  /**
   * Convert the Vector instance to a string.
   *
   * ### Example:
   *     new Vector(2, 3).toString();
   *     // => Vector {x: 2, y: 3}
   *
   * @return {String} The string representation of the vector.
   */
  toString () {
    return `Vector {x: ${this.x}, y: ${this.y}}`;
  }

  /**
   * Convert the Vector instance to an array.
   *
   * ### Example:
   *     new Vector(2, 3).toArray();
   *     // => [2, 3]
   *
   * @return {Array} The vector as an array.
   */
  toArray () {
    return [this.x, this.y];
  }

  /**
   * Convert the Vector instance to an object.
   *
   * ### Example:
   *     new Vector(2, 3).toObject();
   *     // => {x: 2, y: 3}
   *
   * @return {Object} The vector as an object.
   */
  toObject () {
    return {x: this.x, y: this.y};
  }

  /**
   * Convert degrees to radians.
   *
   * ### Example:
   *     Vector.degreesToRadians(180);
   *     // => 3.141592653589793
   *
   * @param {Number} degrees The degrees to convert.
   * @return {Number} The degrees in radians.
   */
  static degreesToRadians (degrees) {
    return degrees * Math.PI / 180;
  }

  /**
   * Convert radians to degrees.
   *
   * ### Example:
   *     Vector.radiansToDegrees(Math.PI);
   *     // => 180
   *
   * @param {Number} radians The radians to convert.
   * @return {Number} The radians in degrees.
   */
  static radiansToDegrees (radians) {
    return radians / Math.PI * 180;
  }
}
