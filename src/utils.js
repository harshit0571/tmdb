export function convertMinutesToHoursAndMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
}
export function getPathColor(percentage) {
  if (percentage < 50) {
    const greenValue = Math.round((percentage / 50) * 255);
    return `rgb(255, ${greenValue}, 0)`;
  } else {
    const redValue = Math.round(((100 - percentage) / 50) * 255);
    return `rgb(${redValue}, 255, 0)`;
  }
}

export const removeDuplicates = (crew) => {
  const crewById = crew.reduce((acc, member) => {
    acc[member.id] = member;
    return acc;
  }, {});
  return Object.values(crewById);
};
