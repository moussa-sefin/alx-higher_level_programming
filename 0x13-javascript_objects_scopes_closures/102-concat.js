#!/usr/bin/node
// script that concats 2 files.

const { argv } = process;
const [file1, file2, outputFile] = argv.slice(2);
const fs = require('fs');

const readStream1 = fs.createReadStream(file1);
const readStream2 = fs.createReadStream(file2);
const writeStream = fs.createWriteStream(outputFile);

readStream1.pipe(writeStream);
readStream2.pipe(writeStream);
