export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("ko-kr", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

export const formatDateWithTime = (date: string) =>
  new Date(date).toLocaleDateString("ko-kr", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

export const timeAgo = (date: string) => {
  const now: Date = new Date();
  const past: Date = new Date(date);
  const diffMs = now.getTime() - past.getTime();
  const diffSec = Math.floor(diffMs / 1000);

  const minute = 60;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;

  if (diffSec < minute) return "방금 전";
  if (diffSec < hour) return `${Math.floor(diffSec / minute)}분 전`;
  if (diffSec < day) return `${Math.floor(diffSec / hour)}시간 전`;
  if (diffSec < week) return `${Math.floor(diffSec / day)}일 전`;

  return formatDateWithTime(date);
};
