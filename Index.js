

function Dodaj(){   
    var x=document.getElementById("tablicaid");
    var y=document.getElementById("formaid");
    x.style.display="none";
    y.style.visibility= "visible";
    y.style.display="block";
        
    
}

var brojac=1;
function Spremi(){
    var x=document.getElementById("tablicaid");
    var y=document.getElementById("formaid");
    y.style.display="none";
    x.style.display="block";
    var ime=document.getElementById("imeid").value;
    var prezime=document.getElementById("prezimeid").value;
    var broj=document.getElementById("brojid").value;
    var tablica= document.getElementById("tablica");
    var botun= document.createElement("BUTTON");
    var t = document.createTextNode("EDIT");
    botun.appendChild(t);
   // botun.onclick = function() {Promjena()};
   
    var red=tablica.insertRow(brojac);
    var celija1= red.insertCell(0);
    var celija2= red.insertCell(1);
    var celija3= red.insertCell(2);
    var celija4= red.insertCell(3);
    celija1.innerHTML= ime;
    celija2.innerHTML= prezime;
    celija3.innerHTML= broj;
    celija4.appendChild(botun);
    brojac=brojac+1;
    document.getElementById("imeid").value="";
    document.getElementById("prezimeid").value="";
    document.getElementById("brojid").value="";
}

function Odustani(){
    var x=document.getElementById("tablicaid");
    var y=document.getElementById("formaid");
    y.style.display="none";
    x.style.display="block";
        
    document.getElementById("imeid").value="";
    document.getElementById("prezimeid").value="";
    document.getElementById("brojid").value="";
}


