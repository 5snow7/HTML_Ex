
let words=[];words.push("testone");let word;
//note:  the onchange function engages when u click outside the box
function origName(){
 document.getElementById("fn").innerHTML ="Firstname";
}

function fName(){
document.getElementById('fn').innerHTML="OneClick";
 }
 
function jill(){
 word=document.getElementById("in").value;
document.getElementById("jill").innerHTML=word;
words.push(word);
}

function jack(){
 word=document.getElementById("inJ").value;
document.getElementById("jill").innerHTML=word;
words.push(word);
}


function wordAr(){
document.getElementById('p1').innerHTML=words;
document.getElementById('joh').innerHTML=words[words.length-1];
}

function but(){
text = "<ul>";
for (let i = 0; i < words.length; i++) {
  text += "<li>" + words[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;
}


