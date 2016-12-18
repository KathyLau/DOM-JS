console.log("");
var i = 4;
var j = 2;


var header = "hello world";

var o = {'name': 'fluffy',
      age: 3
    };

var f=function(x) {
  var j = 30;
  return j+x;
};

var fact = function(n) {
   var j = n;
   while (n > 1) {
     n-=1;
     j *= n;
   }
   return j;
 };

var factR = function(n) {
    if (n == 1)
      {return 1;}
    else{
      return fact(n-1)* n;
    }
};

var red = function(){
  var items = document.getElementsByTagName('li');
  for (var i=0; i<items.length; i++) {
    items[i].classList.add('red');
  }
}

<<<<<<< HEAD
var addItem = function() {
=======
var green = function(){
  var items = document.getElementsByTagName('li');
  for (var i=0; i<items.length; i++) {
    items[i].classList.add('green');
  }
}

var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = "item " + i;
  list.appendChild(newitem);
  i+=1;

  for (var j = 0; j < item.length; j ++) {
    item[j].addEventListener('click', removeItem());
    item[j].addEventListener('mouseover', function() change());
  }

};

var reset = function() {
    var head = document.getElementById("h");
  head.innerHTML = header;
}

var change = function(text) {
  var header = document.getElementById("h");
  header.innerHTML = text;
}


var removeItem = function() {
  /*
  var listitems = document.getElementsByTagName("li");
  listitems[n].remove();*/
  return function(){this.remove();};
};

var buttonCallBack = function(e){
  console.log(e);
  console.log(this);
};

var redCallBack = function(e) {
    console.log(this);
    this.classList.add('red');
    red();
};

var b = document.getElementById('b');
b.addEventListener('click', addItem);

var item = document.getElementsByTagName('li');
//var item2 = document.getElementsByTagName('thelist');
//item.addEventListener('click', removeItem);

for (var i = 0; i < item.length; i ++) {
  item[i].addEventListener('click', removeItem())
}

var item = document.getElementById('thelist');
item.addEventListener('click', red);
