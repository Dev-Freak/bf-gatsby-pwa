export const firstCharToUpper = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1)

export const formatKey = (name: string): string => {
  if (!name.includes("_")) {
    return firstCharToUpper(name)
  }

  const nameArray = name.split("_")
  nameArray[0] = firstCharToUpper(nameArray[0])

  return `${[...nameArray].join(" ")}`
}

const formatter = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  currencyDisplay: "symbol",
})

export const formatCurrency = (value: number): string => {
  const valueText: string = formatter.format(value)

  if (!valueText.includes("A$")) {
    return valueText.replace("$", "A$")
  }

  return valueText
}
