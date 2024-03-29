interface Array<T> {
  each(callback: (item: any, idx: number) => any) : void;
  equals(array: Array<T>): boolean;
}

Array.prototype.each = (callback: (item: any, idx: number) => any): void => {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
};

// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = (array): boolean => {
  // if the other array is a falsy value, return
  if (!array) {
    return false;
  }

  // compare lengths - can save a lot of time
  if (this.length !== array.length) {
    return false;
  }

  for (var i = 0, l = this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i])) {
        return false;
      }
    }
    else if (this[i] !== array[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
};

