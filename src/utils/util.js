export function convertToMoney(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
}
