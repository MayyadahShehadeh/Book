alert('Welcome to My Fav Book Page');

var userAge = prompt('Enter Your Age :');
if (userAge <= 10) {
  alert('sorry you are under age');
  document.write('<h3>' + ' sorry read another book ' + '</h3>');
  document.write('<img src="https://acegif.com/wp-content/gifs/book-93.gif">');

} else if (userAge >= 11) {
  alert('you can read the book');
  document.write('<h3>' + 'enjoy reading the Book ' + '</h3>');

  document.write('<img src= "https://media1.giphy.com/media/gLukNCxcQ1dBcRnf3y/giphy.gif">');

}
