//Show instructions:
// const userModal = document.getElementById('userModal')


const cardsArray = [{
        name: 'angular',
        img: 'img/angular.svg'
    },
    {
        name: 'aurelia',
        img: 'img/aurelia.svg'
    },
    {
        name: 'backbone',
        img: 'img/backbone.svg'
    },
    {
        name: 'ember',
        img: 'img/ember.svg'
    },
    {
        name: 'js',
        img: 'img/js-badge.svg'
    },
    {
        name: 'react',
        img: 'img/react.svg'
    }
]

const game = document.getElementsByClassName('game');
const grid = document.createElement('section')
const card = document.createElement('div')


var firstGuess = '';
var secondGuess = '';
var flipped = 0;
var previousTarget = null;
var delay = 1200;
var counter = 0;

var gameBoard = ''

$(document).ready(function() {
    $('#newgame').click(function() {
        var doubleArray = shuffledCards(cardsArray)

        for (var i = 0; i < doubleArray.length; i++) {
            gameBoard += "<div id='box-" + i + " ' class ='box-picture'>  <img src=" + doubleArray[i].img + '> </div>';
        }
        $('.game').append(gameBoard)

        console.log(doubleArray)


        console.log('test')
    });

})

function imgAssign(array) {

}



function shuffledCards(array) {
    var doubleArray = array.concat(array);
    doubleArray.sort(() => Math.random() - 0.5)
    return doubleArray
}
// window.onload = function() {
//     document.getElementById('newgame').addEventListener('click', function() {
//         console.log('test')
//     })
// }