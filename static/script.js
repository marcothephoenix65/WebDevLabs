var x=5;
var y=7; 
var z=x+y;
console.log(z);
var A="Hello ";
var B="world!";
var C=A.concat(B);
console.log(C);

function SumNPrint(x1, x2)
{
    var x3=x1+x2;
    console.log(x3);
}

SumNPrint(x,y);
SumNPrint(A,B);

if(C.length==z)
{
    console.log("good job!");
}
else
{
    if(C.length>z)
    {
        console.log(C);
    }
    else
    {
        console.log(z);
    }

}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

//function findTheBanana(L)
//{
    //for(var i=0; i<L.length; i++)
    //{
        //if(L[i]==="Banana")
        //{
            //alert("found the Banana in "+i);
        //}
    //}
//}

function findTheBanana(L)
{
    L.forEach((element, index)=>
    {
        if(element==="Banana")
        {
            //alert("We found a banana in the array");
        }
    });
}

findTheBanana(L1);
findTheBanana(L2);

function greetingFunc()
{
    var d = new Date();
    var h= d.getHours();
    var greeting = document.getElementById('greeting');

    if(h<5)
    {
        greeting.innerHTML="Hi, My name is Justin Wu and good night";
    }
    else if(h<12)
    {
        greeting.innerHTML="Hi, My name is Justin Wu and good morning";
    }
    else if(h<18)
    {
        greeting.innerHTML="Hi, My name is Justin Wu and good afternoon";
    }
    else if(h<20)
    {
        greeting.innerHTML="Hi, My name is Justin Wu and good evening";
    }
    else if(h<24)
    {
        greeting.innerHTML="Hi, My name is Justin Wu and good night";
    }
}
if (document.getElementById('greeting')) {
    greetingFunc();
}

function addYear()
{
    var d = new Date().getFullYear();
    ele=document.getElementById('copyYear');

    ele.textContent=d;

}

//function showList()
//{
    //document.getElementById('Hobbylist').style.display='block';
    //document.getElementById('button').style.display='none';
//}

$(document).ready(function() 
{
    $('#readmoreb').click(function()
    {
        $('#shortBio, #longBio').toggle();
        $(this).text($(this).text() === 'Read More' ? 'Read Less' : 'Read More');
    });
});



function getAdvice()
{
    fetch('https://api.adviceslip.com/advice')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("adviceText").innerText = data.slip.advice;
    })
    .catch(error => {
        console.error('Error fetching advice:', error);
        document.getElementById("adviceText").innerText = 
            "Couldn't fetch advice right now. Try again later!";
    });
}




             
             

