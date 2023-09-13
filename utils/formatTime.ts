export function formatTime(date: string) {
  const now = new Date();
  const hourDifference = Math.floor(
    (now.getTime() - new Date(date).getTime()) / (1000 * 60 * 60)
  );

  if (hourDifference < 1) {
    const minsDifference = hourDifference * 60;
    if (minsDifference < 1) {
      const secsDifference = minsDifference * 60;
      return Math.floor(secsDifference) + "s";
    }
    return Math.floor(minsDifference) + " min";
  } else if (hourDifference < 24) {
    return hourDifference + "h";
  } else {
    const daysDifference = Math.floor(hourDifference / 24);
    if (daysDifference === 1) {
      return "Yesterday";
    } else {
      return daysDifference + " days";
    }
  }
}
