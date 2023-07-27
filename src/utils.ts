export const testIsValidPassword = (validationFn: (arg: string) => string) => {
  // Too short input
  console.log(validationFn('P1!a')); // Outputs: false

  // Too long input
  console.log(validationFn('P1!aaaaaaP1!aaaaaaP1!aaaaaaP1!aaaaaaP1!aaaaaa')); // Outputs: false

  // Missing uppercase
  console.log(validationFn('validpass1!')); // Outputs: false

  // Missing lowercase
  console.log(validationFn('VALIDPASS1!')); // Outputs: false

  // Missing special character
  console.log(validationFn('ValidPass1')); // Outputs: false

  // Missing digit
  console.log(validationFn('ValidPass!')); // Outputs: false

  // Excess whitespace characters in various positions
  console.log(validationFn(' ValidPass1! ')); // Outputs: false
  console.log(validationFn('ValidPass1! ')); // Outputs: false
  console.log(validationFn(' ValidPass1!')); // Outputs: false
  console.log(validationFn('Valid Pass1!')); // Outputs: true
};
