document.addEventListener('DOMContentLoaded', function(){





let div = document.createElement('div');

let h1 = document.createElement('h1');
let h1Text = document.createTextNode('This is an h1');

let h2 = document.createElement('h2');
let h2Text = document.createTextNode('This is an h2');

let h3 = document.createElement('h3');
let h3Text = document.createTextNode('This is an h3');

let h4 = document.createElement('h4');
let h4Text = document.createTextNode('This is an h4');

let h5 = document.createElement('h5');
let h5Text = document.createTextNode('This is an h5');

let h6 = document.createElement('h6');
let h6Text = document.createTextNode('This is an h6');

div.classList.add('header-container');
document.body.append(div);
let headerContainer = document.getElementsByClassName('header-container');

h1.appendChild(h1Text);
div.appendChild(h1);
h1.classList.add('h1');

h2.appendChild(h2Text);
div.appendChild(h2);
h2.classList.add('h2');

h3.appendChild(h3Text);
div.appendChild(h3);
h3.classList.add('h3');

h4.appendChild(h4Text);
div.appendChild(h4);
h4.classList.add('h4');

h5.appendChild(h5Text);
div.appendChild(h5);
h5.classList.add('h5');

h6.appendChild(h6Text);
div.appendChild(h6);
h6.classList.add('h6');

//Function that produces ranodm color for color array
function randomColor() {
    let colorArray = ['red', 'green', 'blue', 'yellow', 'green', 'purple', 'orange', 'black'];
    let random = Math.floor((Math.random() * colorArray.length));
    return colorArray[random];
}; 

headerContainer[0].addEventListener('dblclick', clickHeader);

function clickHeader(e) {
    if (e.target !== e.currentTarget) {
        e.target.style.color = randomColor()
    };

};

let button = document.createElement('button');
button.classList.add('list-btn');
let btnText = document.createTextNode('Click to add new list item');
button.appendChild(btnText);
document.body.appendChild(button);

let ol = document.createElement('ol');
    document.body.appendChild(ol); 

    var btn = document.getElementsByClassName('list-btn');
    

    var liNum = 1;

    btn[0].addEventListener('click', function () {

        var li = document.createElement('li');
        var liText = document.createTextNode('this is list item ' + liNum);

        liNum++;
        li.append(liText);
        ol.appendChild(li);

        ol.addEventListener('click', liClick);

        function liClick(e) {
            if (e.target !== e.currentTarget) {
                e.target.style.color = randomColor()
            };

        };

        li.addEventListener('dblclick', function(e) {
            ol.removeChild(e.target)
        });
    });

    


}) 