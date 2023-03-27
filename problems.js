function romanToInt(arr) {


  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let result = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (romanNumerals[arr[i][j]] < romanNumerals[arr[i][j + 1]]) {
        result -= romanNumerals[arr[i][j]];
      } else {
        result += romanNumerals[arr[i][j]];
      }
    }
    resultArr.push(result);
  }

  return resultArr;
}
