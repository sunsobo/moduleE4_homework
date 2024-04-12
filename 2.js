function hasProperty(propName, obj) {
  return propName in obj;
}



function hasProperty(propName, obj) {
  return obj.hasOwnProperty(propName);
}



const myObject = {
  name: 'John',
  age: 30
};



console.log(hasProperty('name', myObject));
console.log(hasProperty('height', myObject));
