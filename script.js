const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
	boton.addEventListener("click", () => {
		const btnPresionado = boton.textContent;

		//Botón C
		if (boton.id === "c") {
			pantalla.textContent = "0";
			return;
		}

		//Botón borrar
		if (boton.id === "borrar") {
			if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
				pantalla.textContent = "0";
				return;
			} else {
				pantalla.textContent = pantalla.textContent.slice(0, -1);
			}
			return;
		}

		//Botón Igual
        if(boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            } catch{
                pantalla.textContent = "Error";
            }
            return;
        }

		if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
			pantalla.textContent = btnPresionado;
		} else {
			pantalla.textContent += btnPresionado;
		}
	});
});
