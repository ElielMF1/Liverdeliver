
let botonx = document.getElementById("botox");

botonx.addEventListener("click", () => {
		
		let mediox = document.getElementById("medx");
		let descansosx = document.getElementById("desx");
		

		let ingresox = document.getElementById("ingresx");
		
  
      
        

        if (mediox.value=="Moto") {
        		if (descansosx.value<=31500) {
        		ingresox.innerHTML= Math.trunc((descansosx.value/35)/30) + " paquetes por día"
        		}
        		else{
        			alert("El tope de ganancias en moto es de 31,500")
        		}
        }

        else if(mediox.value=="Auto"){
            	if (descansosx.value<=42000) {
            		ingresox.innerHTML= Math.trunc((descansosx.value/35)/30) + " paquetes por día"
        			}
        		else{
        			alert("El tope de ganancias en moto es de 42,000")	
        		}	
        }
        else{
        	alert	("opcion no valida")
        }

        



        })