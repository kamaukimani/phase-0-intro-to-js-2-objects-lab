const employee = {
    name: "paul",
    streetAddress: "123",
}
function updateEmployeeWithKeyAndValue(obj, key, value){
return {
    ...obj,
    [key]: value,
};
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
obj[key] = value;
return obj;
}
function deleteFromEmployeeByKey(employee, key){
   const newObj = {...employee}
   delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}