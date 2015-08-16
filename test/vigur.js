'use strict';

var expect = require('chai').expect;
var Vector = require('../dist/vigur');


describe('constructor', function () {
  function checkExpectations (vector) {
    expect(vector).to.be.an.instanceof(Vector);
    expect(vector.x).to.equal(2);
    expect(vector.y).to.equal(3);
  }

  it('should create a new instance from two numeric arguments', function () {
    checkExpectations(new Vector(2, 3));
  });

  it('should create a new instance from an array of two numeric values', function () {
    checkExpectations(new Vector([2, 3]));
  });

  it('should create a new instance from an object of with two numeric values', function () {
    checkExpectations(new Vector({x: 2, y: 3}));
  });
});

describe('getter methods with non-vector return values', function () {
  var vector = new Vector(2, 3);

  describe('Vector#magnitude', function () {
    it('should return the magnitude of the vector', function () {
      expect(vector.magnitude).to.equal(3.605551275463989);
    });
  });

  describe('Vector#length', function () {
    it('should return the length (magnitude) of the vector', function () {
      expect(vector.length).to.equal(vector.magnitude);
    });
  });

  describe('Vector#isZero', function () {
    it('should return true or false depending on whether it is the zero vector', function () {
      expect(new Vector(0, 0).isZero).to.be.true;
      expect(vector.isZero).to.be.false;
    });
  });

  describe('Vector#horizontalAngle', function () {
    it('should return the horizontal angle of the vector', function () {
      expect(vector.horizontalAngle).to.equal(0.982793723247329);
    });
  });

  describe('Vector#verticalAngle', function () {
    it('should return the vertical angle of the vector', function () {
      expect(vector.verticalAngle).to.equal(0.5880026035475675);
    });
  });

  describe('Vector#direction', function () {
    it('should return the direction (horizontal angle) of the vector', function () {
      expect(vector.direction).to.equal(vector.horizontalAngle);
    });
  });
});

describe('getter methods with vector return values', function () {
  var vector = new Vector(2, 3);

  describe('Vector#normalized', function () {
    it('should return the normalized vector without side effects', function () {
      expect(vector.normalized.isEqual(vector.clone().normalize())).to.be.true;
      expect(vector.isEqual(new Vector(2, 3))).to.be.true;
    });
  });

  describe('Vector#inverted', function () {
    it('should return the inverted vector without side effects', function () {
      expect(vector.inverted.isEqual(vector.clone().invert())).to.be.true;
      expect(vector.isEqual(new Vector(2, 3))).to.be.true;
    });
  });

  describe('Vector#rounded', function () {
    it('should return the rounded vector without side effects', function () {
      expect(vector.rounded.isEqual(vector.clone().round())).to.be.true;
      expect(vector.isEqual(new Vector(2, 3))).to.be.true;
    });
  });
});

describe('instance methods that do not take arguments', function () {
  var vector;

  beforeEach(function () {
    vector = new Vector(2, 3);
  });

  describe('Vector#normalize', function () {
    it('should set and return the normalized vector', function () {
      var normalizedVector = new Vector(0.5547001962252291, 0.8320502943378437);
      expect(vector.normalize().isEqual(normalizedVector)).to.be.true;
      expect(vector.isEqual(normalizedVector)).to.be.true;
    });
  });

  describe('Vector#invert', function () {
    it('should set and return the inverted vector', function () {
      var invertedVector = new Vector(-2, -3);
      expect(vector.invert().isEqual(invertedVector)).to.be.true;
      expect(vector.isEqual(invertedVector)).to.be.true;
    });
  });

  describe('Vector#round', function () {
    it('should set and return the rounded vector', function () {
      var floatedVector = new Vector(1.5, 2.5);
      expect(vector.isEqual(floatedVector.round())).to.be.true;
      expect(vector.isEqual(floatedVector)).to.be.true;
    });
  });

  describe('Vector#zero', function () {
    it('should set and return the zero vector', function () {
      var zeroVector = new Vector(0, 0);
      expect(vector.zero().isEqual(zeroVector)).to.be.true;
      expect(vector.isEqual(zeroVector)).to.be.true;
    });
  });

  describe('Vector#clone', function () {
    it('should create a new instance of the vector', function () {
      expect(vector.clone().isEqual(vector)).to.be.true;
      expect(vector.clone()).not.to.equal(vector);
    });
  });

  describe('Vector#toString', function () {
    it('should convert the vector to a string', function () {
      expect(new Vector(2, 3).toString()).to.equal('Vector {x: 2, y: 3}');
    });
  });

  describe('Vector#toArray', function () {
    it('should convert the vector to an array', function () {
      expect(new Vector(2, 3).toArray()).to.deep.equal([2, 3]);
    });
  });

  describe('Vector#toObject', function () {
    it('should convert the vector to an object', function () {
      expect(new Vector(2, 3).toObject()).to.deep.equal({x: 2, y: 3});
    });
  });
});

describe('instance methods that take arguments', function () {
  var vector, other;

  beforeEach(function () {
    vector = new Vector(2, 3);
    other = new Vector(2, 2);
  });

  describe('Vector#add', function () {
    var result = new Vector(4, 5);

    it('should add a number to both axes of the vector', function () {
      expect(vector.add(2).isEqual(result)).to.be.true;
    });

    it('should add a vector to the vector', function () {
      expect(vector.add(other).isEqual(result)).to.be.true;
    });
  });

  describe('Vector#subtract', function () {
    var result = new Vector(0, 1);

    it('should subtract a number from both axes of the vector', function () {
      expect(vector.subtract(2).isEqual(result)).to.be.true;
    });

    it('should subtract a vector from the vector', function () {
      expect(vector.subtract(other).isEqual(result)).to.be.true;
    });
  });

  describe('Vector#multiply', function () {
    var result = new Vector(4, 6);

    it('should multiply both axes of the vector with a number', function () {
      expect(vector.multiply(2).isEqual(result)).to.be.true;
    });

    it('should multiply the vector with a vector', function () {
      expect(vector.multiply(other).isEqual(result)).to.be.true;
    });
  });

  describe('Vector#divide', function () {
    var result = new Vector(1, 1.5);

    it('should divide both axes of the vector with a number', function () {
      expect(vector.divide(2).isEqual(result)).to.be.true;
    });

    it('should divide the vector with a vector', function () {
      expect(vector.divide(other).isEqual(result)).to.be.true;
    });
  });

  describe('Vector#dot', function () {
    it('should return the dot product of the vector with another vector', function () {
      expect(vector.dot(other)).to.equal(10);
    });
  });

  describe('Vector#cross', function () {
    it('should return the cross product of the vector with another vector', function () {
      expect(vector.cross(other)).to.equal(-2);
    });
  });

  describe('Vector#isEqual', function () {
    it('should return true or false depending on the equality of the two vectors', function () {
      expect(vector.isEqual(vector)).to.be.true;
      expect(vector.isEqual(other)).to.be.false;
    });
  });

  describe('Vector#distance', function () {
    it('should return the distance of the vector and another vector', function () {
      expect(vector.distance(other)).to.equal(1);
    });
  });
});

describe('static methods', function () {
  describe('Vector.degreesToRadians', function () {
    it('should convert degrees to radians', function () {
      expect(Vector.degreesToRadians(180)).to.equal(Math.PI);
    });
  });

  describe('Vector.radiansToDegrees', function () {
    it('should convert radians to degrees', function () {
      expect(Vector.radiansToDegrees(Math.PI)).to.equal(180);
    });
  });
});
