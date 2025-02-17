let data = [];

function grava() {
let nome = document.getElementById("nome").value;
let idade = document.getElementById("idade").value;

const newdata ={
    nome:nome,
    idade:idade
}

data.push(newdata);
const jsonData =JSON.stringify(data, null, 2);


const link = document.createElement('a')
link.href = 'data:aplication/json;charset=utf-8,' +encodeURIComponent(jsonData);
link.download = 'data.json';
link.style.display ='none';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
document.getElementById("dataform").reset();
}