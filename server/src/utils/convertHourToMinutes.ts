export default function convertHourToMinutes(time: string): number {
  // 08:30 -> [8, 30]
  const [hour, minutes] = time.split(':').map(Number);

  const timeInMinutes = hour * 60 + minutes;

  return timeInMinutes;
}
