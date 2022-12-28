//funcion para calcular tu indice de masa corporal.



function imc(est, kg) {
    kg=prompt("Diga su peso en kilogramos, diga terminar si desea salir: ");
    kilogramos = parseFloat(kg);
    est=prompt("Diga su estatura en centimetros: ");
    est= parseFloat(est) / 100;
    do {
        let estaturaCuad= est ** 2;
        let indiceMasaCorporal= kilogramos / estaturaCuad;
        if(indiceMasaCorporal <= 16){
            alert("Ud se encuentra en infrapeso severo, su imc es: " + indiceMasaCorporal);

        }else if(indiceMasaCorporal > 16 && indiceMasaCorporal <= 16.99){
            alert("Ud se encuentra en infrapeso moderado, su imc es: " + indiceMasaCorporal);

        }else if(indiceMasaCorporal >= 17 && indiceMasaCorporal <= 17.99){
            alert("Ud se encuentra en infrapeso medio, su imc es: " + indiceMasaCorporal);

        }else if(indiceMasaCorporal >= 18 && indiceMasaCorporal <= 19.99){
            alert("Ud se encuentra en infrapeso, su imc es: " + indiceMasaCorporal);

        }else if(indiceMasaCorporal >= 20 && indiceMasaCorporal <= 24.99){
            alert("Ud posee un peso normal, su imc es: " + indiceMasaCorporal);

        }else if(indiceMasaCorporal >= 25 && indiceMasaCorporal < 29.99){
            alert("Ud posee un poco de sobrepeso, su imc es: " + indiceMasaCorporal);

        }else if(indiceMasaCorporal >= 30 && indiceMasaCorporal <= 32.99){
            alert("Ud tiene un poco de obesidad, su imc es: " + indiceMasaCorporal);

        }else if(indiceMasaCorporal >= 33 && indiceMasaCorporal <= 34.99){
            alert("Ud posee obesidad tipo 1, su imc es: " + indiceMasaCorporal);

        }else if(indiceMasaCorporal >= 35 && indiceMasaCorporal < 39.99){
         alert("Ud posee obesidad tipo 2, su imc es: " + indiceMasaCorporal);
        }else{
            alert("Ud posee obesidad tipo 3, su imc es: " + indiceMasaCorporal);
        }

    }while(kg=="terminar");

return imc;
}
imc();
