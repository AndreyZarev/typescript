const getParamNumber = (param) => {
    return `Your parameter is of type ${typeof param}!`;
};
const getParamString = (param) => {
    return `Your parameter is of type ${typeof param}!`;
};
const getParamObj = (param) => {
    return `Your parameter is of type ${typeof param}!`;
};
function getFullNameFromAnyObject(obj) {
    return `${obj.fName} ${obj.lName}`;
}
const fullName = getFullNameFromAnyObject({
    a21321: 213,
    asdsad: "asdsad",
    fName: "Pesho",
    lName: "Stoyanov",
});
console.log(fullName);
