/// <reference path="../typings/globals/jquery/index.d.ts" />

function Dodaj(){   
   /* var x=document.getElementById("tablicaid");
    var y=document.getElementById("formaid");
    //x.style.display="none";
    y.style.visibility= "visible";
    y.style.display="block";*/
    $("#tablicaid").css("display","none");
    $("#formaid").css("visibility", "visible");
    $("#formaid").css("display","block");    
    
}

//var brojac=1;
function Spremi(){
    /*var x=document.getElementById("tablicaid");
    var y=document.getElementById("formaid");
    y.style.display="none";
    x.style.display="block";*/
    
    /*var ime=document.getElementById("imeid").value;
    var prezime=document.getElementById("prezimeid").value;
    var broj=document.getElementById("brojid").value;
    var tablica= document.getElementById("tablica");*/
    
   // botun.onclick = function() {Promjena()};
    $("#tablicaid").css("display","block");
    $("#formaid").css("display","none");  
    var botun= document.createElement("BUTTON");
    var t = document.createTextNode("EDIT");
    botun.appendChild(t);
    //var red=tablica.insertRow(brojac);
    var name = $("#imeid").val();
    var surname = $("#prezimeid").val();
    var num= $("#brojid").val();

    var markup = "<tr><td>" + name + "</td><td>" + surname + "</td><td>"+ num + "</td><td>"+ botun + "</td></tr>";
    $("table").append(markup);
    /*var celija1= red.insertCell(0);
    var celija2= red.insertCell(1);
    var celija3= red.insertCell(2);
    var celija4= red.insertCell(3);
    celija1.innerHTML= $("#imeid").val();
    celija2.innerHTML= $("#prezimeid").val();
    celija3.innerHTML= $("#brojid").val();
    celija4.appendChild(botun);
    brojac=brojac+1;*/
    /*document.getElementById("imeid").value="";
    document.getElementById("prezimeid").value="";
    document.getElementById("brojid").value="";*/
    $("#imeid,#prezimeid,#brojid").val("");
}

function Odustani(){
    /*var x=document.getElementById("tablicaid");
    var y=document.getElementById("formaid");
    y.style.display="none";
    x.style.display="block";
    document.getElementById("imeid").value="";
    document.getElementById("prezimeid").value="";
    document.getElementById("brojid").value="";*/
    $("#tablicaid").css("display","block");
    $("#formaid").css("display","none"); 
    $("#imeid,#prezimeid,#brojid").val(""); 
}

