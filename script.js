//Modificamos el color del fondo
let from = document.getElementById('calculadora');
from.style.backgroundColor = 'white';
//Constantes
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const DIARIO= document.getElementById('diario')
//Codigo para agregar un event listener que espere el click en el boton
CALCULAR.addEventListener('click',() =>{
    const DATO = document.getElementById('peso').valueAsNumber
    //Validamos que se carge un dato
    if(DATO > 0){
        //Codigo para cuando el kg sea mayor a 30,haga los calculos correspondientes
        if (DATO>30) {
            ERROR.style.display = 'none';
            let flujo = superficie(DATO);
            let diario = flujo * 2000;
            let mantenimiento = flujo * 1500;
            FLU.innerHTML = flujo + 'cc/hr';
            MAN.innerHTML = 'opcion_1' + " " + Math.ceil(mantenimiento) + 'cc/hr';
            DIARIO.innerHTML= 'opcion_2' + " " + Math.ceil(diario) + 'cc/hr';
            FLU.style.display = 'block';
            MAN.style.display= 'block';
            DIARIO.style.display= 'block';
        //Codigo para cuando el kg sea menor a 30,haga los calculos correspondientes
        }else{
            ERROR.style.display = 'none';
            let flujo = holliday(DATO);
            let mantenimiento = flujo/24;
            let diario = mantenimiento*1.5;
            FLU.innerHTML = flujo + 'cc/hr';
            MAN.innerHTML = 'mantenimiento' + " " + Math.ceil(mantenimiento) + 'cc/hr';
            DIARIO.innerHTML= 'm+m/2' + " " + Math.ceil(diario) + 'cc/hr';
            FLU.style.display = 'block';
            MAN.style.display= 'block';
            DIARIO.style.display= 'block';
        }
    //Manda error si no se cargo algun dato
    }else{
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        DIARIO.style.display = 'none';
    }
    //console.log('Dato ingresado: ', DATO)
})
//Metodo Holliday-Segar para calcular cuanto "cc/hr" deben aplicarse
function holliday(peso){
    if (peso < 10){
        peso *= 100;
        return peso;
    }else if (peso > 10 && peso <= 20) {
        peso = (peso - 10) * 50 + 1000;
        return peso;
    }else if (peso > 20 && peso <= 30){
        peso= (peso - 20) * 20 + 1500;
        return peso;
    }
}
//Metodo Superficie Corporal para calcular cuanto "cc/hr" deben aplicarse
function superficie (peso){
        peso=((peso *4) + 7) / (peso + 90);
        return peso
}