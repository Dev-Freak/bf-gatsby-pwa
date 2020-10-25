export const firstCharToUpper = (word: string): string => word.charAt(0).toUpperCase() + word.slice(1)

export const formatKey = (name: string): string => {
  if (!name.includes('_')) {
    return firstCharToUpper(name)
  }

  const nameArray = name.split('_');
  const firstElToUpper = firstCharToUpper(nameArray[0])

  return `${firstElToUpper} ${nameArray[1]}`
}