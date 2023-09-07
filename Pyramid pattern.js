function pattern(Row) {
  const col = 2 * Row - 1;
  let Matrix = new Array(Row).fill(" ").map(() => new Array(col).fill(" "));
  for (let i = 0; i < Row; i++) {
    let SkipIndex = 0;
    const DoneSkip = Row - i - 1;
    let StartPrint = 0;
    const MaxPrintDone = 2 * i + 1;
    for (let j = 0; j < col; j++) {
      if (SkipIndex < DoneSkip) {
        SkipIndex++;
        continue;
      }
      if (StartPrint < MaxPrintDone) {
        Matrix[i][j] = "*";
        StartPrint++;
      }
    }
  }
  return Matrix;
}

let PyramidPattern = pattern(3);

console.log(PyramidPattern);
