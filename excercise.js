/**
 * 1. Write a One liner JavaScript function to create an array of objects from an array of strings in the format:

const input = ['Dirk', 'Plato', 'Gwen'];
const output = [
    {
        index: 0,
        name: 'Dirk',
    },
    {
        index: 1,
        name: 'Plato',
    },
    {
        index: 2,
        name: 'Gwen',
    },
];

 */
const input = ['Dirk', 'Plato', 'Gwen'];
const ArrayOfObjects = (input)=> input.map((item,idx)=>({index:idx,name:item}));
console.log(ArrayOfObjects(input))

/**
 * 2. Write a one liner function to calculate the total amount donated to a charity by all donors.
 * The data is presented in an array of objects:
 */

const donorsInfo = [
    {
        name: 'Donor1',
        amount: 500,
    },
    {
        name: 'Donor1',
        amount: 500,
    },
    {
        name: 'Donor1',
        amount: 500,
    },
];

const initialValue = 0;
const sumWithInitial = donorsInfo.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    initialValue
);

console.log(sumWithInitial);

/**
 * 3. Write a one liner Function in JS to get all the keys of an object in an array in lowercase.
 */
const object = {
    firstName: 'val',
    lastName: 'val',
};

const getKeysInLowerCase = (object) => Object.keys(object).map(key => key.toLowerCase());
console.log(getKeysInLowerCase(object))

/**
 * 4. Write a JS Function to get the first and last index of the nth largest element in an array that satisfies a condition.
 * EG:
 * In an array of donors as below:
 */
const donorsInfo2 = [
    {
        name: 'Donor1',
        amount: 1500,
    },
    {
        name: 'Donor1',
        amount: 2500,
    },
    {
        name: 'Donor1',
        amount: 5500,
    },
];
/**
 * Consider only the donors who have donated more than 5000 and find the first index of the nth largest donor.
 */

donorsInfo2.sort((a,b)=>{
    return a.amount-b.amount
})
const arrayOfDonors = (array)=> array.filter(element=> element.amount>5000)


