/**
 * 유사 배열 객체
 */
function generatePriceList() {
  console.log(Array.isArray(arguments)); // false

  for (let index = 0; index < arguments.length; index++) {
    const element = arguments[index];

    console.log(element); // 100, 200, 300, 400, 500, 600
  }

  // return Array.from(arguments).map((arg) => arg + "원");
}

generatePriceList(100, 200, 300, 400, 500, 600);
