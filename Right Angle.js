function pattern(Row) {
  let col = Row;
  let MatrixData = new Array(Row).fill(" ").map(() => new Array(col).fill(" ")); //Create Two Diamentional Array
  for (let i = 0; i < Row; i++) {
    let startPrint = 0;
    const PrintDone = i + 1;
    for (let j = 0; j < col; j++) {
      if (startPrint < PrintDone) {
        MatrixData[i][j] = "*";
        startPrint++;
      }
    }
  }
  return MatrixData;
}

let RightPattern = pattern(5);
console.log(RightPattern);
