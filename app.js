import { union, uniq } from 'ramda';

import sum, { sub, multiplicacao, div as dividir } from './utils.js';

import react from 'react';
import reactDOM from 'react-dom';

const arr1 = [1,1,1,2,2,2,3,4,5,6,6];
const arr2 = [5,6,6,6,6,7,7,8,9,10,11];

const arr3 = union(arr1, arr2);

const arr4 = uniq(arr1);

console.log(arr3);
console.log(arr4);

console.log(sum(3,2));
console.log(sub(3,2));
console.log(multiplicacao(3,2));
console.log(dividir(3,2));