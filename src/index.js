class SmartCalculator {
  constructor(initialValue) {
    // your implementation
      this.initialValue = String(initialValue);
  }
  add(number) {
    // your implementation
      this.initialValue = this.initialValue + '+' + number;
      return this;
  }
  subtract(number) {
    // your implementation
      this.initialValue = this.initialValue + '-' + number;
      return this;
  }
  multiply(number) {
    // your implementation
      this.initialValue = this.initialValue + '*' + number;
      return this;
  }
  devide(number) {
    // your implementation
      this.initialValue = this.initialValue + '/' + number;
      return this;
  }
  pow(number) {
    // your implementation
      this.initialValue = this.initialValue + '**' + number;
      return this;
  }
  toString() {
      return eval(this.initialValue);
  }
}
module.exports = SmartCalculator;