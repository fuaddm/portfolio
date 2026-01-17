export function format2(value: number): string {
  return value.toString().padStart(2, '0');
}

export function formatTimeGMT4(date: Date): string {
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60_000;

  const gmt4Date = new Date(utcTime + 4 * 60 * 60_000);

  return `${format2(gmt4Date.getHours())}:${format2(gmt4Date.getMinutes())}`;
}

export function formatMonthYear(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(date);
}
