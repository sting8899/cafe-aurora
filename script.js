const btn_exportar = document.querySelector(".export_button")
const mensaje = document.querySelector("#mensaje")

btn_exportar.addEventListener("click", function() {
   mensaje.textContent = "Descargando tu reporte......"

   setTimeout(() => {
        mensaje.textContent = "Tu descarga ha finalizado :)"
   }, 2000);

     setTimeout(() => {
        mensaje.textContent = ""
   }, 3000);

})