

function myEach(collection, callback) {
  let working;
  if (!Array.isArray(collection)) {
    working = Object.values(collection);
  } else working = collection;

  for (let element of working) {
    callback(element);
  }

  return collection;
}

function myMap(collection, callback) {
  let working;
  if (!Array.isArray(collection)) {
    working = Object.values(collection);
  } else working = collection;

  let result = [];

  for (let element of working) {
    result.push(callback(element));
  }

  return result;
}

function myReduce(collection, callback, initial) {
  let working;
  if (!Array.isArray(collection)) {
    working = Object.values(collection);
  } else working = collection;

  let i;
  let accumulator;
  if (initial === undefined) {
    i = 1;
    accumulator = working[0];
  } else {
    i = 0;
    accumulator = initial;
  }

  for (; i < working.length; i++) {
    accumulator = callback(accumulator, working[i], collection);
  }

  return accumulator;
}

function myFind(collection, predicate) {
  let working;
  if (!Array.isArray(collection)) {
    working = Object.values(collection);
  } else working = collection;

  for (let element of working) {
    if (predicate(element)) {
      return element;
    }
  }
}

function myFilter(collection, predicate) {
  let working;
  if (!Array.isArray(collection)) {
    working = Object.values(collection);
  } else working = collection;

  let result = [];

  for (let element of working) {
    if (predicate(element)) {
      result.push(element);
    }
  }

  return result;
}

function mySize(collection) {
  let working;
  if (!Array.isArray(collection)) {
    working = Object.values(collection);
  } else working = collection;

  return working.length;
}

function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  }

  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(array[i]);
  }

  return result;
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  }

  let result = [];

  for (let i = array.length - n; i < array.length; i++) {
    result.push(array[i]);
  }

  return result;
}

function myKeys(object) {
  let result = [];

  for (let key in object) {
    result.push(key);
  }

  return result;
}

function myValues(object) {
  let result = [];

  for (let key in object) {
    result.push(object[key]);
  }

  return result;
}