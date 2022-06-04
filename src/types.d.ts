declare global {
  interface String {
    standarize(): string
  }
}

// TOLEARN: this not available in arrow functions
String.prototype.standarize = function () {
  return String(this).trim().toUpperCase()
}

export {}
