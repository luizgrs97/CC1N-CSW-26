document.writeln('<p style="color: blue">Texto no fim da página via script</p>');
//window.alert('Olá Mundo!');
document.getElementById('title').innerHTML = 'Olá Mundo!';

function Cumprimentar() {
    let nome = document.getElementById('nameInput').value;
    document.getElementById('post').innerHTML = `Olá ${nome}! Bem-vindo a aula de JavaScript!`;
}