/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function (arr) {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};

const arr = [1, 2, 3];
console.log(arr.last());
; // 3


// 2-usul

Array.prototype.last = function (arr2) {
  return this.length ? this[this.length - 1] : -1
}

const arr2 = [];
console.log(arr2.last());
