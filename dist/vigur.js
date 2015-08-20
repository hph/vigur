'use strict';

/**
 * Vigur
 *
 * A two-dimensional vector library written with clarity and ease of use in
 * mind. Leverages on new ES6 features and syntax.
 */

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Vector = (function () {
  /**
   * Class constructor. Takes either two numeric arguments or a single array or
   * object with values for both axes.
   *
   * ### Example:
   *     new Vector(2, 3);
   *     // => Vector {x: 2, y: 3}
   *     new Vector([2, 3]);
   *     // => Vector {x: 2, y: 3}
   *     new Vector({x: 2, y: 3});
   *     // => Vector {x: 2, y: 3}
   *
   * @param {Number|Array|Object} x Value of the x axis or array or object of both axes.
   * @param {Number|undefined} y Value of the y axis or undefined.
   * @return {Vector} A new instance of Vector.
   */

  function Vector(x, y) {
    _classCallCheck(this, Vector);

    if (typeof x === 'number' && typeof y === 'number') {
      var _ref = [x, y];
      this.x = _ref[0];
      this.y = _ref[1];
    } else if (Array.isArray(x) && x.length === 2 && y === undefined) {
      var _x = _slicedToArray(x, 2);

      this.x = _x[0];
      this.y = _x[1];
    } else if (typeof x === 'object' && y === undefined) {
      var _ref2 = [x.x, x.y];
      this.x = _ref2[0];
      this.y = _ref2[1];
    } else {
      throw Error('Invalid instantiation');
    }
  }

  // Expose Vector as a Node.js module.

  /**
   * Magnitude (or length) of the vector.
   *
   * ### Example:
   *     new Vector(2, 3).magnitude;
   *     // => 3.605551275463989
   *
   * @return {Number} Magnitude (or length) of the vector.
   */

  _createClass(Vector, [{
    key: 'normalize',

    /**
     * Normalize the vector.
     *
     * ### Example:
     *     new Vector(2, 3).normalize();
     *     // => Vector {x: 0.5547001962252291, y: 0.8320502943378437}
     *
     * @return {Vector} The vector instance.
     */
    value: function normalize() {
      var _ref3 = [this.x / this.magnitude, this.y / this.magnitude];
      this.x = _ref3[0];
      this.y = _ref3[1];

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
  }, {
    key: 'invert',
    value: function invert() {
      var _ref4 = [-this.x, -this.y];
      this.x = _ref4[0];
      this.y = _ref4[1];

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
  }, {
    key: 'round',
    value: function round() {
      var _ref5 = [Math.round(this.x), Math.round(this.y)];
      this.x = _ref5[0];
      this.y = _ref5[1];

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
  }, {
    key: 'zero',
    value: function zero() {
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
  }, {
    key: 'clone',
    value: function clone() {
      return new Vector(this.x, this.y);
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
  }, {
    key: 'toString',
    value: function toString() {
      return 'Vector {x: ' + this.x + ', y: ' + this.y + '}';
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
  }, {
    key: 'toArray',
    value: function toArray() {
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
  }, {
    key: 'toObject',
    value: function toObject() {
      return { x: this.x, y: this.y };
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
  }, {
    key: 'add',
    value: function add(value) {
      if (value instanceof Vector) {
        var _ref6 = [this.x + value.x, this.y + value.y];
        this.x = _ref6[0];
        this.y = _ref6[1];
      } else {
        var _ref7 = [this.x + value, this.y + value];
        this.x = _ref7[0];
        this.y = _ref7[1];
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
  }, {
    key: 'subtract',
    value: function subtract(value) {
      if (value instanceof Vector) {
        var _ref8 = [this.x - value.x, this.y - value.y];
        this.x = _ref8[0];
        this.y = _ref8[1];
      } else {
        var _ref9 = [this.x - value, this.y - value];
        this.x = _ref9[0];
        this.y = _ref9[1];
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
  }, {
    key: 'multiply',
    value: function multiply(value) {
      if (value instanceof Vector) {
        var _ref10 = [this.x * value.x, this.y * value.y];
        this.x = _ref10[0];
        this.y = _ref10[1];
      } else {
        var _ref11 = [this.x * value, this.y * value];
        this.x = _ref11[0];
        this.y = _ref11[1];
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
  }, {
    key: 'divide',
    value: function divide(value) {
      if (value instanceof Vector) {
        var _ref12 = [this.x / value.x, this.y / value.y];
        this.x = _ref12[0];
        this.y = _ref12[1];
      } else {
        var _ref13 = [this.x / value, this.y / value];
        this.x = _ref13[0];
        this.y = _ref13[1];
      }
      return this;
    }

    /**
     * Rotate the vector by an angle.
     *
     * ### Example:
     *     new Vector(1, 0).rotate(Math.PI / 2).rounded;
     *     // => Vector {x: 0, y: 1}
     *
     * @param {Number} angle The angle in radians.
     * @return {Vector} The vector instance.
     */
  }, {
    key: 'rotate',
    value: function rotate(angle) {
      var _ref14 = [this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle)];
      this.x = _ref14[0];
      this.y = _ref14[1];

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
  }, {
    key: 'dot',
    value: function dot(other) {
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
  }, {
    key: 'cross',
    value: function cross(other) {
      return this.x * other.y - this.y * other.x;
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
  }, {
    key: 'isEqual',
    value: function isEqual(other) {
      return this.x === other.x && this.y === other.y;
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
  }, {
    key: 'distance',
    value: function distance(other) {
      return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
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
  }, {
    key: 'magnitude',
    get: function get() {
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
  }, {
    key: 'length',
    get: function get() {
      return this.magnitude;
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
  }, {
    key: 'isZero',
    get: function get() {
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
  }, {
    key: 'horizontalAngle',
    get: function get() {
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
  }, {
    key: 'verticalAngle',
    get: function get() {
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
  }, {
    key: 'direction',
    get: function get() {
      return this.horizontalAngle;
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
  }, {
    key: 'normalized',
    get: function get() {
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
  }, {
    key: 'inverted',
    get: function get() {
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
  }, {
    key: 'rounded',
    get: function get() {
      return this.clone().round();
    }
  }], [{
    key: 'degreesToRadians',
    value: function degreesToRadians(degrees) {
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
  }, {
    key: 'radiansToDegrees',
    value: function radiansToDegrees(radians) {
      return radians / Math.PI * 180;
    }
  }]);

  return Vector;
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Vector;
}