function direita(){
    var x = document.getElementById("rolagem").scrollLeft;
    document.getElementById("rolagem").scrollTo(x+600,0);
    // if(x>500){
    //     document.getElementById("rolagem").scrollTo(0,0)
    // }
    
}
function esquerda(){
    var x = document.getElementById("rolagem").scrollLeft;
    document.getElementById("rolagem").scrollTo(x-600,0);
    // if(x<400){
    //     document.getElementById("rolagem").scrollTo(520,0)
    // }
}