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

        let animacion = document.querySelectorAll(".color");
            animacion.forEach((hoja, i)=>{
                let time = i/20 + .5;
                hoja.style.animation = `animacion ${time}s infinite`;
            })
});

    document.addEventListener("DOMContentLoaded", function () {
        const audio = document.getElementById("audio"); 
        const play = document.getElementById("play"); 
        const pausa = document.getElementById("pausa"); 
        const progreso = document.getElementById("barra-progreso"); 
        const tiempo = document.getElementById("tiempo-display"); 

    play.addEventListener("click", () => {
        audio.play();
        play.style.display = "none";
        pausa.style.display = "inline-block";
    });

    pausa.addEventListener("click", () => {
        audio.pause();
        pausa.style.display = "none";
        play.style.display = "inline-block";
    });

    audio.addEventListener("timeupdate", () => {
        const tiempoActual = audio.currentTime; 
        const duracion = audio.duration; 

        progreso.value = (tiempoActual / duracion) * 100;

        const minutos = Math.floor(tiempoActual / 60);
        const segundos = Math.floor(tiempoActual % 60);

        tiempo.textContent = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
    });

    progreso.addEventListener("input", () => {
        const duracion = audio.duration; 
        audio.currentTime = (progreso.value / 100) * duracion; 
    });

    audio.addEventListener("ended", () => {
        pausa.style.display = "none"; 
        play.style.display = "inline-block"; 
    });

});


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

        setTimeout(() => {
            coponieve.remove();
            }, duracion * 1000); 
    }
    
    setInterval(crearCopoNieve, 200); 
});
