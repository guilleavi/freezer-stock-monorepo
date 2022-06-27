declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface String {
    standarize(): string
  }
}

// TOLEARN: this not available in arrow functions
String.prototype.standarize = function () {
  return String(this).trim().toUpperCase()
}

export {}
