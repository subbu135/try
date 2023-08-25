console.log("script running")
document.querySelector(".cross").style.display = "none"; 
document.querySelector(".symbol").addEventListener("click", ()=>{
    document.querySelector(".one").classList.toggle("oneGo");
    if(document.querySelector(".one").classList.contains("oneGo")){
        document.querySelector(".threeline").style.display = "inline"
        document.querySelector(".cross").style.display = "none"
    }
    else{
        document.querySelector(".threeline").style.display = "none"
        setTimeout(()=>{
            document.querySelector(".cross").style.display = "inline"
        },555)
    }

}); 
function myFunction(){
    var  dot =document.getElementById("dot");
    var moretext = document.getElementById("more");
    var buttontext = document.getElementById("btn");
    if(dot.style.display === "none"){
        dot.style.display = "inline";
        buttontext.style.display = "Read More";
        moretext.style.display = "none";
    }
    else{
        dot.style.display = "none";
        buttontext.style.display = "Read Less";
        moretext.style.display = "inline";
    }
}

function myFunction1(){
    var  dot =document.getElementById("dots");
    var moretext = document.getElementById("mores");
    var buttontext = document.getElementById("btn");
    if(dot.style.display === "none"){
        dot.style.display = "inline";
        buttontext.style.display = "Read More";
        moretext.style.display = "none";
    }
    else{
        dot.style.display = "none";
        buttontext.style.display = "Read Less";
        moretext.style.display = "inline";
    }
}

function myFunction2(){
    var  dot =document.getElementById("doc");
    var moretext = document.getElementById("most");
    var buttontext = document.getElementById("btn2");
    if(dot.style.display === "none"){
        dot.style.display = "inline";
        buttontext.style.display = "Read More";
        moretext.style.display = "none";
    }
    else{
        dot.style.display = "none";
        buttontext.style.display = "Read Less";
        moretext.style.display = "inline";
    }
}

function myFunction3(){
    var  dot =document.getElementById("dot1");
    var moretext = document.getElementById("more1");
    var buttontext = document.getElementById("btn3");
    if(dot.style.display === "none"){
        dot.style.display = "inline";
        buttontext.style.display = "Read More";
        moretext.style.display = "none";
    }
    else{
        dot.style.display = "none";
        buttontext.style.display = "Read Less";
        moretext.style.display = "inline";
    }
}