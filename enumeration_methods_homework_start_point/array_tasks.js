var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2)

	},

	insertAt: function (arr, itemToAdd, index) {
   arr.splice(index,0,itemToAdd);
	 return arr;
	},

	square: function (arr) {
		let newArray = [];
		for(let item of arr){
			 item = item*item;
			newArray.push(item);
		}
		return newArray;

	},

	sum: function (arr) {
		let total =0;
		for( let item of arr){
			  total +=item;
		}
		return total;

	},

	findDuplicates: function (arr) {

	},

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter(function(item){
			return item  !== valueToRemove;
		});
	},

	findIndexesOf: function (arr, itemToFind) {
      let newarray = [];

		arr.forEach(function (item, index) {
					if(item ===itemToFind){
						newarray.push(index);
					}
			})
			return newarray;
	},

sumOfAllEvenNumbersSquared: function(arr){
 let total = 0 ;
 for(let item of arr){
	 if(item % 2 === 0){
		 total +=item**2;
	 }

 }
return total;
}
}

module.exports = arrayTasks
