import { firstCharToUpper, formatKey, formatCurrency } from "../stringFormatter"

describe("StringFormatter", () => {
  it("Capitalize the first letter of a given word", () => {
    const capitalizedFirstWord = firstCharToUpper("word")
    const capitalizedSecondWord = firstCharToUpper("Test")

    expect(capitalizedFirstWord).toEqual("Word")
    expect(capitalizedSecondWord).toEqual("Test")
  })

  it("Formats a key string to be legible. (Ej: 'this_is_a_key' ==> 'This is a key')", () => {
    const formattedFirstKey = formatKey("this_is_a_key")
    const formattedSecondKey = formatKey("this_is_a_test")

    expect(formattedFirstKey).toEqual("This is a key")
    expect(formattedSecondKey).toEqual("This is a test")
  })

  it("Formats a number to a currency value. (Ej: '5213548' ==> '$5,213,548.00')", () => {
    const formattedFirstValue = formatCurrency("321654")
    const formattedSecondValue = formatCurrency("1321")

    expect(formattedFirstValue).toEqual("A$321,654.00")
    expect(formattedSecondValue).toEqual("A$1,321.00")
  })
})
