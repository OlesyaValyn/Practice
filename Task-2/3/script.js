// Реализовать функцию сравнения 2 объектов. Функция выводит true, если 2 объекта равны и false, если нет //
var obj1 = {
	firstName: 'Vasya',
	lastName: 'Pupkin'
};

var obj2 = {
	firstName: 'Vasya',
	lastName: 'Pupkin'
};


// Реализовать функцию сравнения 2 объектов. Функция выводит true, если 2 объекта равны и false, если нет //
function isObjectsEqual(object1, object2) {
    const property1 = Object.getOwnPropertyNames(object1);
    const property2 = Object.getOwnPropertyNames(object2);
  
    if (property1.length !== property2.length) {
      return false;
    }
  
    for (let i = 0; i < property1.length; i += 1) {
      const prop = property1[i];
  
      if (object1[prop] !== object2[prop]) {
        return false;
      }
    }
    return true;
  }

console.log(isObjectsEqual(obj1, obj2));

obj2.lastName = 'Ivanov';

console.log(isObjectsEqual(obj1, obj2));

console.log("");


// Модернизировать функцию для сравнения объектов со вложенными объектами //
var obj3 = {
	firstName: 'Vasya',
	lastName: 'Pupkin',
	father: {
		firstName: 'Ivan',
		lastName: 'Pupkin'
	}
};

var obj4 = {
	firstName: 'Vasya',
	lastName: 'Pupkin',
	father: {
		firstName: 'Ivan',
		lastName: 'Pupkin'
	}
};

function isObjectsEqual(object3, object4) {
    const property3 = Object.getOwnPropertyNames(object3);
    const property4 = Object.getOwnPropertyNames(object4);
  
    if (property3.length !== property4.length) {
      return false;
    }
  
    for (let i = 0; i < property3.length; i += 1) {
      const prop = property3[i];
      const bothAreObjects = typeof(object3[prop]) === 'object' && typeof(object4[prop]) === 'object';
  
      if ((!bothAreObjects && (object3[prop] !== object4[prop])) 
    || (bothAreObjects && !isObjectsEqual(object3[prop], object4[prop]))) {
        return false;
      }
    }
    return true;
}

console.log(isObjectsEqual(obj3, obj4));

obj4.father.lastName = 'Ivanov';

console.log(isObjectsEqual(obj3, obj4));