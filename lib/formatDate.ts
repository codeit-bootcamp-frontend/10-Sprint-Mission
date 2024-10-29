export const formatDate = (date: string) =>
  new Date(date)
    .toLocaleDateString("ko-kr", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\.$/, "");
