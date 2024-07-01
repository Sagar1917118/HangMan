let display=document.querySelector(".display");
let keyboard=document.querySelector(".keyboard");
const MAINARRAY=[["LION","ELEPHANT","TIGER","BEAR","RHINOCEROS","PANDA","LEOPARD","CHEETAH","GORILLA","KANGAROO"],
["BRAHMAPUTRA","GANGES","YAMUNA","GODAVARI","KRISHNA","KAVERI","INDUS","NARMADA","TAPI","MAHANADI"],
["APPLE","BANANA","ORANGE","STRAWBERRY","GRAPES","WATERMELON","MANGO","PINEAPPLE","PEACH","PAPAYA"],
["CARROT", "CHILLI", "SPINACH", "TOMATO", "CABBAGE", "CUCUMBER", "POTATO", "ONION", "GUARD", "LADYFINGER"],
["DELHI", "MUMBAI", "BANGALORE", "CHENNAI", "HYDERABAD", "KOLKATA", "PUNE", "AHMEDABAD", "JAIPUR", "LUCKNOW"],
["NEWDELHI","BEIJING","TOKYA","NEWYORK","KATHMANDU","PARIS","MOSCOW","KABUL","ISLAMABAD","LONDON"],
];
var ARRAY=[];
// const ARRAY=["LION"];
let box=document.querySelector(".displayDivs");
let errorNumber=document.querySelector(".mistake");
let totalErrorNumber=document.querySelector(".totalMistakes");
let MessageOverlay=document.querySelector(".errorOverlay");
let LooseOverlay=document.querySelector("#Lost");
let wonOverlay=document.querySelector("#Won");
let levelIndicator=document.querySelector(".levelIndicator");
let keysColor=document.querySelectorAll(".wht");

// -----js for Hangman Image--------
let hangman=document.querySelectorAll(".hangman");
let head=document.querySelector(".head");
let body=document.querySelector(".body");
let rHand=document.querySelector(".rHand");
let lHand=document.querySelector(".lHand");
let lFoot=document.querySelector(".lFoot");
let rFoot=document.querySelector(".rFoot");
// ---------------------------------
let option=document.querySelector("#Categories");
var Index=0;
var mistake=0;
var correct=0;
var totalMistake=0;
var word;
var NewArray;
var level=0;
let x;
function play(){
    // ----------Select Options--------
    let y=option.selectedIndex;
    ARRAY=MAINARRAY[y];
    // ----------------
    hangman.forEach(element => {
        element.classList.remove("hangmanActive"); 
    });
    keysColor.forEach(element => {
         element.style.backgroundColor="white";
    });
    mistake=0;
    correct=0;
    display.innerHTML="";
    word=ARRAY[Index];
    x=word.length;
    console.log(word,x,correct,mistake);
    NewArray=[];
    let i=0;
    while(x--){
    let y=document.createElement("div");
    NewArray[i]=y;
    y.innerHTML=box.innerHTML;
    display.appendChild(y);
    i++;
    }
    keyboard.addEventListener("click",letDoIt);
}
function letDoIt(e){
    let x=e.target;
    let text;
if(x.nodeName=="DIV"&&x.style.backgroundColor!="rgb(11, 163, 96)")
{   
    x.style.transform="scale(0.8)";
    setTimeout(()=>{
        x.style.transform="scale(1)";
    },150)
    text=x.textContent;
    console.log(text);
    // ---
    let flag=true;
    for(let j=0;j<word.length;j++){
        if(word[j]==text){
            x.style.backgroundColor="#0ba360";
            console.log("sagar");
            correct +=1;
            console.log(correct);
            NewArray[j].innerText=text;
            flag=false;
        }
        if(j==word.length){
            console.log("loop ended");
        }
    }
    // -----------------
    if(correct==word.length){
     Index +=1;
     keyboard.removeEventListener("click",letDoIt);
     errorNumber.innerText=0;
     level +=1;
    //  console.log(level);
     levelIndicator.textContent=level;
     if(Index==ARRAY.length){
        MessageOverlay.style.transform="scale(1)";
        totalErrorNumber.innerText=totalMistake;
        wonOverlay.classList.add("active"); 
     }
     play();
    }
    // -----------------------
    if(flag){
        x.style.backgroundColor="#fe5196";
        mistake +=1;
        // -----------------
        if(mistake==1)
        head.classList.add("hangmanActive");
        else if(mistake==2)
        body.classList.add("hangmanActive");
        else if(mistake==3)
        lHand.classList.add("hangmanActive");
        else if(mistake==4)
        rHand.classList.add("hangmanActive");
        else if(mistake==5)
        lFoot.classList.add("hangmanActive");
        else if(mistake==6)
        rFoot.classList.add("hangmanActive");
        // ----------------
        totalMistake +=1;
        errorNumber.innerText=mistake;
        if(mistake==6){
            MessageOverlay.style.transform="scale(1)";  
            LooseOverlay.classList.add("active");
        }
    }
}    // ---
} 

