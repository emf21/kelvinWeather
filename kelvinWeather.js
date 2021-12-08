//This is to convert temperature
const kelvin = 0;

//the new difference equals celcius
const celcius = kelvin - 273;

//calculating fahrenheit
let fahrenheit = celcius * (9 / 5) + 32;

//rounding up value of fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
