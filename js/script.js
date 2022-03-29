function sumAvg(arr) {
  let sum = 0;
  for (let i of arr) sum += i;
  return sum / arr.length;
}

console.log(sumAvg([1, 2, 3, 4, 5, 6]));
console.log(sumAvg([5, 10, 15, 20, 25, 30]));
console.log(sumAvg([10, 20, 30, 40, 50, 60]));

//-------------------------------------------------------------------------

function minNum(arr) {
  let min = Infinity;
  for (let i of arr) {
    min = i < min ? i : min;
  }
  return min;
}
console.log(minNum([1, 2, 3, 4, 5, 6]));
console.log(minNum([5, 10, 15, 20, 25, 30]));
console.log(minNum([10, 20, 30, 40, 50, 60]));

//-------------------------------------------------------------------------

function largestStr(arr) {
  let max = 0;
  for (let i of arr) {
    max = i.length > max ? i.length : max;
  }
  return max;
}

console.log(largestStr(["hosen", "elias", "yussef", "abcdefgh"]));
console.log(largestStr(["amal", "murjan", "neven", "tyser"]));
console.log(largestStr(["hmoud", "balsam", "malek", "nareen"]));

//-------------------------------------------------------------------------

function largestStr2(arr) {
  let max = "";
  for (let i of arr) {
    if (max.length < i.length) {
      max = i;
    }
  }
  return max;
}

console.log(largestStr2(["hosen", "elias", "yussef", "abcdefgh"]));
console.log(largestStr2(["amal", "murjan", "neven", "tyser"]));
console.log(largestStr2(["hmoud", "balsam", "malek", "nareen"]));

//-------------------------------------------------------------------------

function aboveAVG(arr) {
  let avg = 0,
    cnt = 0;
  for (let index of arr) {
    avg += index;
  }
  avg = avg / arr.length;
  for (let index of arr) {
    index > avg ? cnt++ : avg;
  }
  return cnt;
}

console.log(aboveAVG([1, 2, 3, 4, 5, 6,7,8,9,10]));
console.log(aboveAVG([5, 10, 15, 20, 25, 30,5,10,21,25,4,5,4,400,200]));
console.log(aboveAVG([10, 20, 30, 40, 50, 60]));

//-------------------------------------------------------------------------

function primeNum(x) {
  let prime = true;
  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

console.log(primeNum(7));
console.log(primeNum(21));
console.log(primeNum(101));

//-------------------------------------------------------------------------

function primeArray(arr) {
  let isPrime = true;
  for (const i of arr) {
    if (!primeNum(i)) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

console.log(primeArray([1, 3, 5, 7, 10]));
