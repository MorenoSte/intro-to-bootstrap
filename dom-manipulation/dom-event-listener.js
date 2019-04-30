var btn = document.getElementsByClassName('button');
var btnUsingSelector = document.querySelector('.button');
btn[0].style.padding = '10px';
btn[0].style.fontSize = '22px';

// add event listener
btnUsingSelector.addEventListener('click', function(){
console.log('Button was clicked from JS!');
});

btnUsingSelector.addEventListener('mouseover', function (event){
    console.log(event);
    console.log(typeof event.target);
    
    var btnText = event.target.innerHTML;
    alert('Mouse over on the' + btnText + 'button.');
});
<button class="button">Submit!</button>
<button class="button">Submit!</button>


document.addEventListener('keypress', function (event) {
    console.log (event.key);
    console.log (event.keyCode);
});

document.addEventListener('keydown', function (event) {
    console.log (event.key);
    console.log (event.keyCode);
});

document.addEventListener('keyup', function (event) {
    console.log (event.key);
    console.log (event.keyCode);
});

document.addEventListener('scroll', function (event) {
    console.log (event);
    console.log (event.);
});


