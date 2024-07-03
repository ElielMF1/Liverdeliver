
let botonx = document.getElementById("botox");

botonx.addEventListener("click", () => {
		
		let mediox = document.getElementById("medx");
		let descansosx = document.getElementById("desx");
		

		let ingresox = document.getElementById("ingresx");
		
  
      
        

        if (mediox.value=="Moto") {
        		if (descansosx.value<=27000) {
        		ingresox.innerHTML= Math.trunc((descansosx.value/45)/15) + " paquetes por día"
        		}
        		else{
        			alert("El tope de ganancias en moto es de 27,000")
        		}
        }

        else if(mediox.value=="Auto"){
            	if (descansosx.value<=54000) {
            		ingresox.innerHTML= Math.trunc((descansosx.value/45)/15) + " paquetes por día"
        			}
        		else{
        			alert("El tope de ganancias en moto es de 54,000")	
        		}	
        }
        else{
        	alert	("opcion no valida verifica que hayas selecionado correctamente los campos")
        }

        



        })
