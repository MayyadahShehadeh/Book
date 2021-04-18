alert('Welcome to My Fav Book Page');

var userAge = prompt('Enter Your Age :');
if (userAge <= 10) {
  alert('sorry you are under the age');
  document.write('<h3>' + ' sorry read another book ' + '</h3>');
  document.write('<img src="https://acegif.com/wp-content/gifs/book-93.gif">');

} else if (userAge >= 11) {
  alert('you can read the book');
  document.write('<h3>' + 'enjoy reading the Book ' + '</h3>');

  document.write('<img src= "https://media1.giphy.com/media/gLukNCxcQ1dBcRnf3y/giphy.gif">');
}

var yourBook;
var x = function (){

yourBook = prompt('what book do you want to read of the Secret Books Collection?');
while (yourBook !== 'the magic' && yourBook !== 'hero') {
  yourBook = prompt('Please enter the name \'the magic\' or \'hero\'');
}
}

x();


var userChoose;
var y= function(){
if (yourBook == 'the magic') {
  userChoose = '<img src="https://images-na.ssl-images-amazon.com/images/I/5115jhMmGrL._SX314_BO1,204,203,200_.jpg">';
} else if (yourBook === 'hero') {
  userChoose = '<img src="https://www.thesecret.tv/wp-content/uploads/2015/05/Hero-Book.png">';
}
var imagesNumber= prompt('How many image do you want?');

for(var i=0 ; i < imagesNumber; i++){
  document.write(userChoose);
}
}
y();
