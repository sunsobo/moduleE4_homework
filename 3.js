function createObjectWithoutPrototype() {
  return Object.create(null);
}

// Пример использования
const obj = createObjectWithoutPrototype();
console.log(obj); 
console.log("toString" in obj); 
