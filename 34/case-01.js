/**
 * 배열 요소에 접근하기
 */

function operateTime(input, operators, is) {
  const [firstInput, secondInput] = inputs;
  inputs[firstInput].split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });

  inputs[secondInput].split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });
}
