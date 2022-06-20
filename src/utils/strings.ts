import '../types.d.ts'

/**
 * Trims the values and compare them in a case insensitive way
 * @param valueA string
 * @param valueB string
 * @returns boolean
 */
const compare = (valueA: string, valueB: string): boolean =>
  valueA.standarize() === valueB.standarize()

/**
 * Adds a letter 's' at the end of the singular term
 * when units is greater than one
 * @param singularTerm string
 * @param units number
 * @returns string
 */
const pluralize = (singularTerm: string, units: number): string =>
  `${singularTerm}${units > 1 ? 's' : ''}`

export { compare, pluralize }
