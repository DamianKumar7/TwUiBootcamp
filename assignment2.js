console.log(
    "%cImplement the JSON.stringify method yourself for plain objects containing only primitive values. Bonus, if you can recursion for nested objects. The object does not contain values that are functions, circular references or functions... ",

);

let calledJSONStringify = 0;

const JSONStringify = (obj) => {
    if (calledJSONStringify === 25) {
        throw new Error("Multiple recursions is very bad :(");
    }
    calledJSONStringify++;

    let str = "";
    str += "{";
    for (key in obj) {
        let value = obj[key];

        // console.log(key, typeof value);

        if (typeof value == "function") continue;

        if (str.length > 1) str += ",";
        str += `"${key}":`;

        if (value === null) str += `${value}`;
        else if (typeof value == "object") str += JSONStringify(value);
        else if (typeof value == "string") str += `"${value}"`;
        else str += `${value}`;
    }
    str += "}";

    return str;
};

const obj = {
    primitive: {
        null: null,
        boolean: true,
        int: 1,
        float: 2.2,
        string: "a",
    },
    function: () => {
        console.log("This is a function");
    },
};
obj.nestedSimple = { primitive: obj.primitive };

// Normal Object
console.log("Normal Object:");
const JSONString = JSONStringify(obj);
console.log("Stringifies JSON: ", JSONString);
const parsedJSON = JSON.parse(JSONString);
console.log("Parsed JSON: ", parsedJSON);

// Recursive Object
obj.nestedRecursion = obj;
console.log("Recursive Object:");
JSONStringify(obj);