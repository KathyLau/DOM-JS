
//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO");


//assign an anonymous fxn to a var
var f = function(x) {
    var j=30;
    return j+x;
};


//(define fact (lambda (n) ...)
var fact = function(n) {
    var prod=1;
    for ( ; n > 1 ; n--){
	prod = prod * n;
    }
    return prod;
};


//(define fact (lambda (n) ...)
var factR = function(n) {
    if ( n<=1 ) {
	return 1;
    }
    else {
	return n * factR(n-1);
    }
};


//set the whole list to red
var red = function() {
    var items = document.getElementsByTagName("li");
    for(var i = 0; i < items.length; i++) {
	items[i].classList.add('red');
    }
};


//instantiate an object
var o = { 'name' : 'Thluffy',
	  age : 15,
	  items : [10, 20, 30, 40],
	  morestuff : {a : 1, b : 'ayo'},
	  func : function(x) {
	      return x+30;
	  }
	};
//THE END OF THE OLD EXCESS FXNS

//the Original header, the OGH
var original_h = "Hello World!";

//this changes the header
var change_h = function (input) {
    var head = document.getElementById("h");
    head.innerHTML = input; //this lets us put html in a specfic place 
};

var size = 8;//a global var

//adds item
var addItem = function () {
    var list = document.getElementById("thelist");
    var items = document.getElementsByTagName("li");
    var new_element = document.createElement("li");
    var n = size;
    new_element.innerHTML = ("item " + n);
    add_listeners(new_element);
    list.appendChild(new_element);
    size+=1;
};

//this makes the elements listen 
var add_listeners = function (input) {
    input.addEventListener(
        "mouseover",
	function () {
	    change_h(this.innerHTML);
	}
    );
    
    input.addEventListener(
        "mouseout",
        function () {
	    change_h(original_h);//header_inital)
	}
    );
    
    input.addEventListener(
        "click",
        function () {
	    this.remove();
	}
    );
};

//the fib fxns

var fib_1 = 0;
var fib_2 = 1;


var addFib = function () {
    /*
    if(fib_1 == 0){
	console.log("AYO");
	var list = document.createElement("ol");
	list.setAttribute("id", "fiblist");
	document.body.appendChild(list);
    */
    //else{
    var list = document.getElementById("fiblist");
    //}
    
    var items = document.getElementsByTagName("li");
    var new_element = document.createElement("li");
    var n = fib_1;
    new_element.innerHTML = ("fib item " + n);
    add_listeners(new_element);
    list.appendChild(new_element);

    var hold_2 = fib_2;
    fib_2=fib_1+fib_2;
    fib_1 = hold_2;
    
}


//the first button listener    
var button = document.getElementById("b");
button.addEventListener("click", addItem);


//the second button
var button = document.getElementById("c");
button.addEventListener("click", addFib);

//the list listener
var items = document.getElementsByTagName("li");
for (var k = 0; k < items.length; k++) {
    add_listeners(items[k]);
};

