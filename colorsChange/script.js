   
       var r = parseInt(document.getElementById("red").value);
       var g = parseInt(document.getElementById("green").value);
       var b = parseInt(document.getElementById("blue").value);
   
       document.getElementById("r").innerHTML=r;
       document.getElementById("g").innerHTML=g;
       document.getElementById("b").innerHTML=b;
   
   
       function colorChange(){
       var r = parseInt(document.getElementById("red").value);
       var g = parseInt(document.getElementById("green").value);
       var b = parseInt(document.getElementById("blue").value);
   
       document.getElementById("r").innerHTML=r;
       document.getElementById("g").innerHTML=g;
       document.getElementById("b").innerHTML=b;
   
       
           document.getElementById("doc").style.color = "rgb(" + r + ',' + g + ',' + b + ")";
       }