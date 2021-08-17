function teste() {
   var msg = document.querySelector("#msg")
   var img = document.querySelector("#img")

   var data = new Date
    var hora = data.getHours()
   msg.innerHTML = `<h3>Agora são ${hora} horas</h3>`

   if (hora >= 4 && hora <= 12) {
      img.style.backgroundImage = "url('manha.jpg')"
   }
   else if(hora>12 && hora<18){
      img.style.backgroundImage = "url('tarde.jpg')"
      body.style.backgroundColor = "#DAA520"
   }
   else {
      img.style.backgroundImage = "url('noite.jpg')"
      body.style.backgroundColor = "#4682B4"
   }
}

var body = document.querySelector("body")
body.addEventListener("load",teste())
