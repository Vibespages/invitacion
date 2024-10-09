// JavaScript para login simple
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  var password = document.getElementById('password').value;

  // Credenciales predefinidas
  if (password === '10años') {
      // Login exitoso, oculta la pantalla de login y muestra el contenido
      document.getElementById('login-screen').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
  } else {
      // Muestra un mensaje de error
      document.getElementById('loginError').style.display = 'block';
  }
});


// JavaScript para el reloj
const countdown = () => {
    const countDate = new Date('November 30, 2024 21:00:00').getTime()
    const now = new Date().getTime()
    const gap = countDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const textDay = String(Math.floor(gap / day)).padStart(2, '0');
    const textHour = String(Math.floor((gap % day) / hour)).padStart(2, '0');
    const textMinute = String(Math.floor((gap % hour) / minute)).padStart(2, '0');
    const textSecond = String(Math.floor((gap % minute) / second)).padStart(2, '0');
  
    document.querySelector('.dias').innerText = textDay
    document.querySelector('.horas').innerText = textHour
    document.querySelector('.minutos').innerText = textMinute
    document.querySelector('.segundos').innerText = textSecond
}

setInterval(countdown, 1000)

//Javascript para el button a Whatsapp
document.getElementById("confirm-button").onclick = function() {
    window.open("https://wa.me/+542284597015", "_blank");
  };


  document.getElementById("comollegar-button").onclick = function() {
    window.open("https://maps.app.goo.gl/2f8a8ushStF6uecbA", "_blank");
  };


  //Envio de info para las canciones al sheet
  document.getElementById("songForm").onsubmit = function(e) {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    // Obtener los valores de los inputs
    var songName = document.getElementById("songName").value;
    var songAuthor = document.getElementById("songAuthor").value;

    // Enviar los datos a Google Sheets usando fetch
    fetch("https://script.google.com/macros/s/AKfycbwex1Qu49je4ZckZSBiF599Xzk4fbb4z08L0cwcUf5jGspdUXj-WgpMvUJdJ1TCIm-6yg/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `songName=${encodeURIComponent(songName)}&songAuthor=${encodeURIComponent(songAuthor)}`
    }).then(response => {
      document.getElementById("responseMessage").innerText = "¡Gracias por tu recomendación!";
      document.getElementById("songForm").reset(); // Limpiar el formulario
    }).catch(error => {
      document.getElementById("responseMessage").innerText = "Hubo un error al enviar tu recomendación.";
    });
  };


  document.getElementById('agendar-button-real').addEventListener('click', function() {
    // Detalles del evento
    const title = "Lali & Diego";
    const startDate = new Date("2024-11-30T21:00:00-03:00"); // 30 de noviembre a las 21:00, GMT-3
    const endDate = new Date("2024-12-01T07:00:00-03:00"); // 1 de diciembre a las 07:00, GMT-3
    const location = "La Candela Multiespacio, Olavarría";
    const description = "";

    // Crear el enlace para Google Calendar
    const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(description)}`;

    // Abrir el enlace en una nueva pestaña
    window.open(googleCalendarLink, '_blank');
});