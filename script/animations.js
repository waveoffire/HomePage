animacje = setInterval(function() {
var aktualny_scroll=document.body.scrollTop
var wysokosc_okna = document.body.clientHeight
var okno=aktualny_scroll/wysokosc_okna
if(okno>0.7){
    document.getElementById("dlakogo").classList.add("slide-right")
    document.getElementById("dlakogophoto").classList.add("slide-left")
}
if(okno>1.7){
    document.getElementById("pocophoto").classList.add("slide-right")
    document.getElementById("poco").classList.add("slide-left")
}
if(okno>2.7){
    document.getElementById("zkim").classList.add("slide-right")
    document.getElementById("zkimphoto").classList.add("slide-left")
}
},100);

function scrolling(nazwa){
    document.querySelector('#'+nazwa+'start').scrollIntoView({ 
        behavior: 'smooth' ,
        alignTo:"False"
})}