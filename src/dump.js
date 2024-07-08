const fs = require('fs');
const path = require('path');

// Step 1: Read the file and convert its contents to a hexadecimal array
const inputFilePath = 'C:\\Users\\Ali\\Downloads\\GeoLite2-Country_20240705\\GeoLite2-Country.mmdb';
const outputFilePath = './geolite2-country.ts';

fs.readFile(inputFilePath, (err, data) => {
  if (err) throw err;

  // Convert file data to a hexadecimal array
  const hexArray = Array.from(data).map(byte => byte.toString(16).padStart(2, '0'));

  // Create a string representation of the JavaScript array
  const jsArrayString = `export const hexArray = [${hexArray.map(hex => `'${hex}'`).join(', ')}];\n`;

  // Write the array to a JavaScript file
  fs.writeFile(outputFilePath, jsArrayString, (err) => {
    if (err) throw err;
    console.log('Hex array written to JavaScript file successfully.');
  });
});