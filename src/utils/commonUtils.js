export const checkObjectIsEmpty = (obj) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

export const formatDate = (date) =>
  new Date(date).toLocaleDateString("ko-kr", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
