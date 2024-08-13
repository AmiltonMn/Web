let list = [1, 2, 3];
var pontos = 0;
let Points = document.getElementById('pontosH1');
let button = document.getElementById('button');

function soma(a, b, c)
{
    return a + b + c;
};

console.log(soma(1, 2, 3));

// setTimeout(() => {
//     alert("AAA")
// }, 5000);

// setInterval(() => {
//     alert("AAA")
// }, 5000);


function myClick()
{
    pontos += 1;
    Points.innerHTML = `Pontos: ${pontos}`;
};

setInterval (() => {
    if (pontos >= 50) {
        
    }
}, 500)