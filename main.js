function calcula(){
    var copos = document.getElementById("quantidade").value

    conversao = copos*0.25

    if(conversao<=2.5){
        alert("Vá beber água")

    }
    else{
        alert("Você está hidratado!")
    }

}