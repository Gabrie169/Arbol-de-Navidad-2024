        document.addEventListener("DOMContentLoaded", function(){
            const rows = [10,4];
            let hojas = "";
            rows.forEach(niveles =>{
                for (let i = 0; i < niveles; i++) {
                    hojas +='<span class="color">*</span>'.repeat(1+i*2);
                    hojas += '<br>';
                }
        });
            document.getElementById("arbol").innerHTML = hojas;

            //animación
        let animacion = document.querySelectorAll(".color");
            animacion.forEach((hoja, i)=>{
                let time = i/20 + .5;
                hoja.style.animation = `animacion ${time}s infinite`;
            })
        });

            //reproductor audio
        document.addEventListener("DOMContentLoaded", function () {
            const play = document.getElementById("play");
            const pausa = document.getElementById("pausa");
            const progreso = document.getElementById("barra-progreso");
            const tiempo = document.getElementById("tiempo-display");

            // reproducir audio
        play.addEventListener("click", () => {
                audio.play();
                play.style.display = "none";
                pausa.style.display = "inline-block";
        });

            // pausar audio
        pausa.addEventListener("click", () => {
                audio.pause();
                pausa.style.display = "none";
                play.style.display = "inline-block";
        });

            // actualizar barra
        audio.addEventListener("timeupdate", () => {
                const tiempoactual = audio.currentTime;
                const duracion = audio.duration;
                progressBar.value = (tiempoactual / duracion) * 100;

                // actualizar tiempo
                const minutos = Math.floor(tiempoactual / 60);
                const segundos = Math.floor(tiempoactual % 60);
                tiempo.textContent = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
        });

            // tiempo audio
        progressBar.addEventListener("input", () => {
                const duracion = audio.duration;
                audio.tiempoactual = (progressBar.value / 100) * duracion;
        });
    
    });

            //nieve
        document.addEventListener("DOMContentLoaded", function () {
            const nieve = document.getElementById("nieve");

        function crearCopoNieve() {
            const  coponieve = document.createElement("div");
            coponieve.classList.add("coponieve");

            // estilo random para cada copo
            const size = Math.random() * 10 + 5; 
            coponieve.style.width = `${size}px`;
            coponieve.style.height = `${size}px`;
            coponieve.style.left = `${Math.random() * 100}vw`; 

            const duracion = Math.random() * 5 + 3; 
            coponieve.style.animationDuration = `${duracion}s`; 
            coponieve.style.animationDelay = `${Math.random() * 5}s`; 

            nieve.appendChild(coponieve);

            // Elimina el copo después de que termina la animación
            setTimeout(() => {
                coponieve.remove();
            }, duracion * 1000); 
        }

        // genera copos de nieve cada 200 milisegundos
        setInterval(crearCopoNieve, 200); 
    });
