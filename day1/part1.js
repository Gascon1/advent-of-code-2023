import fs from 'fs';

const main = () => {
  const data = fs.readFileSync('data.txt', 'utf8').split('\n');
  let total = 0;

  data.forEach((line) => {
    let leftIndex = 0;
    let rightIndex = line.length - 1;

    let leftNumber;
    let rightNumber;

    while (!(leftNumber && rightNumber)) {
      const potentialLeftNumber = parseInt(line[leftIndex]);
      const potentialRightNumber = parseInt(line[rightIndex]);

      if (
        typeof potentialLeftNumber === 'number' &&
        !isNaN(potentialLeftNumber)
      ) {
        leftNumber = line[leftIndex];
      } else {
        leftIndex++;
      }

      if (
        typeof potentialRightNumber === 'number' &&
        !isNaN(potentialRightNumber)
      ) {
        rightNumber = line[rightIndex];
      } else {
        rightIndex--;
      }

      if (leftNumber && rightNumber) {
        total += parseInt(`${leftNumber}${rightNumber}`);
      }
    }
  });

  console.log(total);
  return total;
};

main();
