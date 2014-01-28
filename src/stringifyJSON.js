// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
var returnStr="";

	if(typeof obj == "string")
		return obj;
	else if(obj == null)
		return obj="null";
	else if(typeof obj === "boolean")
		return obj.toString();	
	else if(typeof obj == "string")
		return '"'+obj+'"';
	
	var tmpArray = [];
	
	for(var key in obj){
		
		if((Array.isArray(obj[key]) || typeof obj[key] === "object") && (obj[key] != null))
			tmpArray.push(stringifyJSON(obj[key]));
		else if(Array.isArray(obj)){
			if(obj[key] == null)
				tmpArray.push("null");
			else if(typeof obj[key] == "boolean")
				tmpArray.push(obj[key].toString()+"");
			else if(typeof obj[key] == "string")
				tmpArray.push('"'+obj[key].toString()+'"');
			else
				tmpArray.push(obj[key]+"");
		}
		else if(typeof obj === "object"){
			if(obj == null)
				tmpArray.push('"'+key+'"'+":"+"null");
			else if(typeof obj[key] == "boolean")
				tmpArray.push('"'+key+'"'+":"+obj[key].toString());
			else if(typeof obj[key] == "string")
				tmpArray.push('"'+key+'"'+":"+'"'+obj[key].toString()+'"');
			else
				tmpArray.push('"'+key+'"'+":"+obj[key]);
		}		
		
	}
	if(Array.isArray(obj)){
		return ("["+tmpArray+"]");
	}
	else if(typeof obj == "object"){
		return ("{"+tmpArray+"}");
	}
};
