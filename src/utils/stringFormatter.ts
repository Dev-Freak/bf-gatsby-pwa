export const firstCharToUpper = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1)

export const formatKey = (name: string): string => {
  if (!name.includes("_")) {
    return firstCharToUpper(name)
  }

  const nameArray = name.split("_")
  nameArray[0] = firstCharToUpper(nameArray[0])

  return `${[...nameArray].join(' ')}`
}
