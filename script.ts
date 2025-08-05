// A data do aniversário (Ano, Mês, Dia)
// Mês começa em 0 (Janeiro = 0, Agosto = 7)
const anniversaryDate = new Date("August 7, 2025 00:00:00").getTime();

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = anniversaryDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Feliz Aniversário de Namoro!";
  }
}, 1000);