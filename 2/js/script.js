// function AddCarro()
// {
//     let carro ={
//         "modelo": "Chevette",
//         "marca" : "Chevrolet",
//         "ano": 1960,
//         "cor": "rosa"
//     };
//     console.log(carro);
// }

// function AddCarro2()
// {
//     let carro ={
//         "modelo":  document.getElementById("modelo").value,
//         "marca" : document.getElementById("marca").value,
//         "ano": document.getElementById("ano-fabricacao").value,
//         "cor": document.getElementById("cor").value
//     };
//     console.log(carro);
// }

function AddAlunos()
{
    let Alunos = [{},{}];
    let Aluno = {
        "Matricula": document.getElementById("Matricula").value,
        "Nome": document.getElementById("Nome").value,
        "ano": document.getElementById("ano").value,
        "Curso": document.getElementById("Curso").value,
        "Sexo": document.getElementById("Sexo").value
    };
    Alunos.unshift(Aluno);
    // carros.push(carro);
    console.log(Alunos);

    let EncotrarAluno = Alunos.find(Aluno => carro.cor == "vermelho");
    console.log(findcarro);

    let filtercarro = carros.filter(car => car.ano >= 2005);
    console.log(filtercarro);
}

// function AddCarro(){
//     let carro = {
//         "marca": "Fiat",
//         "modelo": "Uno Vivace",
//         "ano": 2001,
//         "cor": "preta"
//     }
//     console.log(carro);
// }

// function AddCarro2(){
//     let carro = {
//         "marca": document.getElementById("marca").value,
//         "modelo": document.getElementById("modelo").value,
//         "ano": document.getElementById("ano-fabricacao").value,
//         "cor": document.getElementById("cor").value
//         }
//     console.log(carro);
// }
// function AddCarroArray(){
//     let carros = [
//         {
//             "marca": document.getElementById("marca").value,
//             "modelo": document.getElementById("modelo").value,
//             "ano": document.getElementById("ano-fabricacao").value,
//             "cor": document.getElementById("cor").value
//         },
//         {
//             "marca": "Fiat",
//             "modelo": "Uno Vivace",
//             "ano": 2001,
//             "cor": "preta"
//         },
//         {
//             "marca": "Volk",
//             "modelo": "Tesla",
//             "ano": 2024,
//             "cor": "Azul Bebezinho"
//         },
//         {
//             "marca": "Nissan",
//             "modelo": "Miojo",
//             "ano": 1999,
//             "cor": "Amarelo"
//         }
//     ]
//     let carro = {
//         "marca": document.getElementById("marca").value,
//         "modelo": document.getElementById("modelo").value,
//         "ano": document.getElementById("ano-fabricacao").value,
//         "cor": document.getElementById("cor").value
//     }
//     // carros.unshift(carro);
//     carros.push(carro);
//     console.log(carros);
// }