let formEl = document.getElementById('form');

formEl.addEventListener('submit', async function(event) {

    event.preventDefault();

    let origem = document.getElementById('origem').value;
    let destino = document.getElementById('destino').value;
    let tempo = document.getElementById('tempo').value;
    let plano = document.getElementById('plano').value;

try {
  const result = await fetch('https://fronttest--romuloroma.repl.co/getData',
  {
    "method": "POST",
    headers: {'Content-Type': 'application/json'},
    "body": JSON.stringify({
      "Origem": origem,
      "Destino": destino,
      "Tempo": tempo,
      "Plano": plano
    })
  });

  document.getElementById("ComFaleMais").innerHTML = String(result.ComFaleMais);
    document.getElementById("SimFaleMais").innerHTML = String(result.SimFaleMais);

} catch(error) {
  console.error('Error:', error);
}

});
