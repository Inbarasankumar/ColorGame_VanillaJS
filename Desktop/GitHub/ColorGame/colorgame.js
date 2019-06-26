var noOfSqaures =6;
var colors =generaterandomcolors(noOfSqaures);

var squares = document.querySelectorAll('.square');
var pickedcolor = pickrandomcolor();
var colordisplay = document.getElementById('colordisplay');
var message = document.getElementById('message');
var h1=document.querySelector('h1');
var newcolorgame = document.getElementById('newBtn');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click',function()
{
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    noOfSqaures=3;
    colors= generaterandomcolors(noOfSqaures);
    message.textContent="Good Luck!!!";
    pickedcolor=pickrandomcolor();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor="steelblue";
});


hardBtn.addEventListener('click',function()
{
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    noOfSqaures=6;
    colors= generaterandomcolors(noOfSqaures);
    pickedcolor=pickrandomcolor();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
        
    }
});

newcolorgame.addEventListener('click', function()
{
    newcolorgame.textContent="New Colors";
    colors = generaterandomcolors(noOfSqaures);
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
    }
    pickedcolor=pickrandomcolor();
    message.textContent="Good Luck!!!";
    colordisplay.textContent=pickedcolor;
    h1.style.backgroundColor="steelblue";
})
colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++)
{
squares[i].style.backgroundColor=colors[i];

squares[i].addEventListener("click", function()
{
 var clickedColor= this.style.backgroundColor;
 
 if(clickedColor === pickedcolor)
 {
    message.textContent="Correct!!!"; 
    squares.forEach(function(sqaure)
    {
        sqaure.style.backgroundColor=clickedColor;
    });
    h1.style.backgroundColor=clickedColor;
    newcolorgame.textContent="Play Again?";
 }

 else
 {
        this.style.backgroundColor="#232323";
        message.textContent="Try Again :(";
 }

});
}

function pickrandomcolor()
{ 
    var random = Math.floor(Math.random() * colors.length);
	return colors[random];
    
}
function generaterandomcolors(num)
{
    var arr=[];

    for(var i=0;i<num;i++)
    {
        arr.push(randomcolors());
    }
    return arr;
}

function randomcolors ()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 254);
    var b =Math.floor(Math.random() * 255);

    return "rgb("+r+", "+g+", "+b+")";
}