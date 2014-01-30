// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
var returnStr="";

	//router based on type of obj
	switch (Object.prototype.toString.call(obj)){
		case "[object Object]":
			return stringifyObj(obj);
			break;
		case "[object Array]":
			return stringifyArray(obj);
			break;
		case "[object String]":
			return '"'+obj+'"';
			break;
		case "[object Null]":
			return obj="null";
			break;
		case "[object Boolean]":
			return obj.toString();	
			break;
		case "[object Number]":
			return obj+"";
			break;
		case "[object Function]":
		case "[object Undefined]":
			return null;
			break;	
	};
	
	function stringifyArray(arr){
		for(var i=0; i<arr.length; i++){
			returnStr += stringifyJSON(arr[i])+",";
		}
		returnStr = returnStr.substr(0,returnStr.length-1);
		return ("["+returnStr+"]");
	}

	function stringifyObj(obj){
		for(var key in obj){
			if(stringifyJSON(obj[key]) != null)
				returnStr += stringifyJSON(key) + ":" + stringifyJSON(obj[key])+",";
		}
		returnStr = returnStr.substr(0,returnStr.length-1);
		return ("{"+returnStr+"}");
	}
};
