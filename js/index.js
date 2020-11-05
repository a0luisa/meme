
function Start(){
  var randomNumber= Math.floor(Math.random()*50)+1;
  var randomImage= "images/meme"+ randomNumber + ".jpg";
  var image = document.querySelector('img');
  image.setAttribute("src",randomImage);

}
