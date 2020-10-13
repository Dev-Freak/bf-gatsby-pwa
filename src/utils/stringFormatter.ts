export const formatKey = (name: string): string => {
  const nameArray = name.split('_');
  const firstElToUpper = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1);

  return `${firstElToUpper} ${nameArray[1]}`
}