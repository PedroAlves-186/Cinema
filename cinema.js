var filmes = require('./database/catalogo.json')

var cinema = "CineHouse"
var slogan = 'O melhor cinema da região'

// console.log(cinema + ' // ' + slogan)

// [
//     {
//         codigo: 1,
//         titulo: 'Luca',
//         duracao: 1.3,
//         atores: ['Kalebe', 'Gioavanna', 'Leonardo'],
//         anoLancamento: 2021,
//         emCartaz: true
//     },
// ]
// [] == arrays
// {} == objeto

// var nomeDeFilmes = ['Luca', 'Moana', 'Mulan', 'Rei Leão', 'Cruella']

// filmes[x].emCartaz = true || false

function adicionarFilme(
    codigo, 
    titulo,
    duracao,
    atores,
    anoLancamento,
    emCartaz) {

    filmes.push(
        {
            codigo: codigo, 
            titulo: titulo,
            duracao: duracao,
            atores: atores,
            anoLancamento: anoLancamento,
            emCartaz: emCartaz
        }
    )
}

// function buscarFilme(codigo) {
//     const filmeEncontrado = filmes.find(filme => filme.codigo == codigo)
//     return filmeEncontrado
// }

// function alterarStatusEmCartaz(codigo) {
//     const filmeEncontrado = filmes.find(filme => filme.codigo == codigo)
//     filmeEncontrado.emCartaz = filmeEncontrado.emCartaz ? false : true 
// }

// // adicionando filmes
// adicionarFilme(2, 'Raya e o Último Dragão', 2, ['Gemma', 'Sandra', 'Alan'], 2021, true)
// adicionarFilme(3, 'Coração de Dragão', 2, ['Gemma', 'Sandra', 'Alan'], 2021, true)

// Lista filmes
// console.log('Lista de filmes')
// console.log('--------------')
// console.log(filmes)



/// buscar filmes
// console.log('Buscar filme')
// console.log('--------------')
// const filmeEncontrado = buscarFilme(3)
// console.log('O filme encontrado foi "' + filmeEncontrado.titulo + '"')

// /// alterar o stats de um filme
// console.log('Alterar filme em cartaz')
// console.log('--------------')
// alterarStatusEmCartaz(3)


// console.log(filmes)
// var titulo = filmes[1].titulo

// console.log(titulo) // string
// console.log(titulo.length) // tamanho da string
// console.log(titulo[5]) // caracter da string
// console.log(titulo.indexOf('Último Leão')) // encontra posição de uma substring dentro 
// let resultado = (titulo.indexOf('Raya') == -1) ? "Não encontrado" : "Encontrado"
//               Condicional   ternario(?)  valor verdadeiro separador(:) valor falso
// if (titulo.indexOf('raya') == -1) 
//     resultado = "Não encontrado"
// else 
//     resultado = "Encontrado"

// console.log(resultado)

// console.log(titulo.slice(9, 15))


// for(let i = 0; i < filmes.length; i++) {
//     console.log(filmes[i].titulo)
// }

// for (const filme of filmes ) {
//     console.log(filme.titulo)
// }

// filmes.forEach(function (filme, index) {
//     console.log(index + ' - ' + filme.titulo)
// })

// function (filme, index)  {
//     console.log(index + ' - ' + filme.titulo)
// }

// (filme, index) => {
//     console.log(index + ' - ' + filme.titulo)
// }

// (filme, index) => console.log(index + ' - ' + filme.titulo)

// filme => console.log(filme.titulo)

// filmes.forEach((filme, index) => console.log(filme.titulo))
// Arrow function

// alterarTitulo = titulo => titulo.toUpperCase()
// function alterarTitulo (titulo) {
//     return titulo.toUpperCase()
// }

// console.log(alterarTitulo(filmes[1].titulo))
function listarTodosOsFilmes() {
    filmes.forEach( (filme, index) => console.log(index + ' - ' + filme.titulo))
    // for(const filme of filmes) {
    //     console.log(filme.titulo)
    // }

    for(let i = 0;i < filmes.length; i++) {
        console.log(filmes[i].titulo)
    }
}

function listarFilmesEmCartaz () {
    const filmesEmCartaz = filmes.filter(filme => filme.emCartaz);
    filmesEmCartaz.forEach(filme => console.log(filme.titulo))
    // for(const filme of filmes) {
    //     if (filme.emCartaz)
    //         console.log(filme.titulo)
    // }
}

function buscarFilme(codigo) {
    const filmeEncontrado = filmes.find(filme => filme.codigo == codigo)
    return filmeEncontrado

    // for (let i = 0; i < filmes.length; i++){
    //     if (filmes[i].codigo == codigo) {
    //         return filmes[i]
    //     }
    // }

    // for(const filme of filmes) {
    //     if (filme.codigo == codigo) {
    //         return filme
    //     }
    // }
}

function alterarStatusEmCartaz(codigo, buscarFilmeCallback) {
    const filmeEncontrado = buscarFilmeCallback(codigo)
    filmeEncontrado.emCartaz = filmeEncontrado.emCartaz ? false : true 
}

const buscarFilmeJhony = (codigo) => {
    for(let filme of filmes) {
        if (filme.codigo == codigo) {
            return filme
        }
    }
} 

alterarStatusEmCartaz(2, buscarFilme)
alterarStatusEmCartaz(2, buscarFilmeJhony)
alterarStatusEmCartaz(2, function(codigo) {
    for (let i = 0; i < filmes.length; i++){
        if (filmes[i].codigo == codigo) {
            return filmes[i]
        }
    }
})
alterarStatusEmCartaz(2, (codigo) => filmes.find(filme => filme.codigo == codigo))

// listarFilmesEmCartaz()
// listarTodosOsFilmes()

// let listaDeTitulos = []

// for(let filme of filmes) {
//     listaDeTitulos.push(filme.titulo)
// }

let listaDeTitulos = filmes.map( filme => filme.titulo)
// let listaDeTitulos = filmes.map(function(filme) {
//     return filme.titulo
// })

console.log(listaDeTitulos)