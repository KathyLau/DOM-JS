console.log("");
var i = '';
var j = 2;




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

var green = function(){
  var items = document.getElementsByTagName('li');
  for (var i=0; i<items.length; i++) {
    items[i].classList.add('green');
  }
}

var addItem = function(text) {

  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


var removeItem = function(n) {
  var listitems = document.getElementsByTagName("li");
  listitems[n].remove();
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

var item = document.getElementById('thelist');
item.addEventListener('click', red);

//var item = document.getElementById('thelist');
//for(var n = 0; n<item.length ; n++){
//    item[n]
//}

/*
var greenMe = function(){
    var items = document.getElementsByTagName('li');
    for( var n = 0 ; n < items.length ; n++){ 
	items[n].classList.add('green');
    }
};

var piece = document.getElementsByTagName('li');
//piece[0].classList.add('green');
for(var n = 0; n<piece.length; n++){
    piece[n].addEventListener('click', green);//greenMe(n));
    //items[n].classList.add('red');
}
*/
//var item = document.getElementsByTagName('li');
//item.addEventListener('click', removeItem);
