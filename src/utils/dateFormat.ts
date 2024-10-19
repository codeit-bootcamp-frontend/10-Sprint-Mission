export function formatDateWithDot(targetDate: string): string {
  const date = new Date(targetDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
}

export function formatDateToTimeAgo(targetDate: string): string {
  const date = new Date(targetDate);

  if (isNaN(date.getTime())) {
    return '유효하지 않은 날짜';
  }

  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  if (seconds < 60) return '방금 전';

  const intervals = [
    { label: '일', seconds: 86400 },
    { label: '시간', seconds: 3600 },
    { label: '분', seconds: 60 },
  ];

  for (const interval of intervals) {
    const time = Math.floor(seconds / interval.seconds);
    if (time >= 1) {
      return `${time}${interval.label} 전`;
    }
  }

  return '오래 전';
}
