
let botonx = document.getElementById("botox");

botonx.addEventListener("click", () => {
		
		let mediox = document.getElementById("medx");
		let descansosx = document.getElementById("desx");
		let paquetesx = document.getElementById("paquex");

		let ingresox = document.getElementById("ingresx");
		let nominax = document.getElementById("nomix");
		let gasolinax = document.getElementById("gax");            
        
  
      
        

        if (mediox.value=="Moto") {
        		if (paquetesx.value<=20 ) {
        				ingresox.innerHTML="$ " + descansosx.value*paquetesx.value*45 + " pesos mexicanos"
        				nominax.innerHTML="$ " + descansosx.value*paquetesx.value*38 + " pesos mexicanos"
        				gasolinax.innerHTML="$ " + descansosx.value*paquetesx.value*7 + " pesos mexicanos"
        					
        		}
        		else{
        			alert("El máximo de paquetes en Moto es 20")
        			
        		}
        		
        }

        else if(mediox.value=="Auto"){
        		if (paquetesx.value<=40) {
        			ingresox.innerHTML="$ " + descansosx.value*paquetesx.value*45 + " pesos mexicanos"
        			nominax.innerHTML="$ " + descansosx.value*paquetesx.value*38 + " pesos mexicanos"
        			gasolinax.innerHTML="$ " + descansosx.value*paquetesx.value*7 + " pesos mexicanos"	
        					
        		}
        		else{
        			alert("El máximo de paquetes en Auto es 40")
        			
        		}	
        }
        else{
        	alert	("opcion no valida")
        }

        



        })
