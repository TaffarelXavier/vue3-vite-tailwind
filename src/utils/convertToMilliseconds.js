export default function convertToMilliseconds(duration) {
  const [hours, minutes, seconds, milliseconds] = duration.split(':').map(Number);
  const totalMilliseconds = (hours * 60 * 60 + minutes * 60 + seconds) * 1000 + milliseconds;
  return totalMilliseconds;
}
