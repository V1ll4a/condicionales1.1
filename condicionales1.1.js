//let h1text = document.querySelector("#parrafo")
//h1text.innerHTML= 
let masa= Number (prompt("Introsuzca su masa en kg"))
let estatura= Number(prompt("Introduzca su estatura en m"))
let imc = masa/(estatura*estatura)
let clasificacion
if(imc>= 40)
{
    clasificacion= "Obesidad III"
}else{
    if(imc >=35)
    {clasificacion= "Obesidad II"
    }else{
        if(imc >= 30)
        {clasificacion="Obesidad I"
        }else{
            if(imc >=25)
            {clasificacion= "Preobesidad"
            }else{
                if(imc >= 18.5)
                {clasificacion= "Intervalo normal"
                }else{
                    clasificacion= "Intervalo ponderado"
                }               
            }
    
        }    
    }
}
document.getElementById ("parrafo").innerHTML= "Su IMC es"+imc+"y esta en la clasificacion"+clasificacion
