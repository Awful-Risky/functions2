
//------------------------------------

// var objName = {
// 	name: 'Name',
// 	age: '65',
// };
// function getName (obj) {
// 	var Name = (obj.name);
// 	return Name;
// };

// testIt = getName(objName);
// console.log(testIt);


//------------------------------------


// var arrayOfStrings = ['this', 'is', 'a', 'string']

// function totalLetters (array) {
// 	letterCount = 0;
// 	for (var i = 0; i<array.length; i+=1) {
// 		letterCount += array[i].length;
// 	};
// 	return letterCount;
// }
//  testIt = totalLetters(arrayOfStrings);
//  console.log(testIt);


//------------------------------------

// function keyValue (arg1, arg2) {
// 	var obj = {arg1 : arg2};
// 	return obj;
// }

// testIt = keyValue('agr1', 'arg2');
// console.log(testIt);

//------------------------------------

// var arrayOfStrings = ['this', 'is', 'a', 'string']

// function negativeIndex (array, negNumber) {
// 	var negIndex = (array[array.length + negNumber]);
// 	return negIndex;
// }

// testIt = negativeIndex(arrayOfStrings, -2);
// console.log(testIt);

//------------------------------------
// var str = 'smtmrmimngm'
// console.log(str);

// function removeM (string) {
// 	var array = string.split('');
// 	for (var i = 0; i<array.length; i+=1) {
// 		if (array[i] === 'm') {
// 			array[i] = '';
// 		}
	
// 	}
// 	var newString = array.join('');
// 	return newString;
// }

// testIt = removeM(str);
// console.log(testIt);
// console.log(str);

//------------------------------------

// var objName = {
// name: 'Name',
// age: '65',
// place: 'Lima',
// };

//  function printObject (obj) {
//  	for (var i in obj) {
//  		console.log(i + ' is ' + obj[i]);
//  	}
//  }

// printObject(objName);

//------------------------------------

// var str = 'aweiouy'
// function vowels (string) {
// 	var array = string.split('');
// 	console.log(array);
// 	var newArray = array.filter(function doIT (element) {
// 		var check = element.toLowerCase();
// 		if (check === 'a' || check ===  'e' || check ===  'i' || check ===  'o' || check ===  'u') {
// 				return true;
// 		}
// 		else {
// 				return false;
// 		}
// 	});
// 	return newArray;
// };



// testVowels = vowels(str);
// console.log(testVowels);

//------------------------------------

// var arr1 = [1,1,2,2,3,3]
// var arr2 = [1,1,2,3,4,5]

// function twins (array) {
// 	for ( i = 0; i < array.length-2; i+=2) {
// 		if (array[i] !== array[i+1]) {
// 			return false;
// 		}                     
// 	}
// 	return true;
// }
// testIt = twins(arr1);
// console.log(testIt);

//------------------------------------

// var booArr1 = [true, true]                       //true
// var booArr2 = [false, false, false, true, false] //true
// var booArr3 = []                                 //false
// var booArr4 = [false, false]                     //false

// function or (booleanArray) {
// 	for (var i = 0; i<booleanArray.length; i++) {
// 		if (booleanArray[i]===true) {
// 			return true;
// 		} 
// 	}
// 	return false;
// }



// testIt = or(booArr4);
// console.log(testIt);

//------------------------------------

// arr = [1,1,2,2,3,3,4,4,5,5]

// function unique (Array) {
// 	var uniqueArray = _.uniq(Array);
// 	return uniqueArray;
// };


// testIt = unique(arr)
// console.log(testIt);

//------------------------------------

























