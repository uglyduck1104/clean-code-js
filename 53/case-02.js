/**
 * 복잡한 인자 관리하기
 */
function createCar(name, { brand, color, type }) {
  return {
    name,
    brand,
    color,
    type,
  };
}

createCar("차량 이름", {
  type: "타입",
});
