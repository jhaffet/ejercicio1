const nombres=["tonny","beymar","jaffet","wilson","cachi","jesus","brayan","william","cori","juan"];

function sortear(){
    

    let ganador=nombres[Math.floor(Math.random() * nombres.length)]
    console.log(nombres);
    
    console.log(nombres)
    console.log(ganador)
    
    document.getElementById('ganador').value=ganador;
    
}

function llamar(){
    let contencion= document.querySelector('.mostar');
    contencion.innerHTML='<ul><ul>' + nombres.join('<li></li>')+ '<li></li>';

}