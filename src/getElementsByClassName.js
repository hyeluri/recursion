// If life was easy, we could just do things the easy way:
 //var getElementsByClassName = function (className) {
 //  return document.getElementsByClassName(className);
 //};
// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {

var results=[];

var mainBod = document.body;

findInChild(mainBod);

//function to walk through the DOM tree starting at childElement
	function findInChild(childElement){

		if(childElement.hasChildNodes()){
			var children = childElement.firstChild;
			//had to use while loop beacuse could not use .length on some node types
			while(children){
				//check to see if node is an HTMLElement
				if(children.nodeType === 1){
					if(children.classList.contains(className)){
						results.push(children);
					}
					//recursively walk through the DOM tree(interested in only HTMLElement nodes)
					findInChild(children);
				}
				//advance to next node of this branch
				children = children.nextSibling;
			}
		};
	};

return results;

};

