let idade = prompt ('Digite a sua idade: ')
let temTitulo = prompt ('Tem titulo de eleitor? (sim/não): ')
const idadeMinima = 18

if (idade >= idadeMinima && temTitulo == 'sim') {
    console.log ('Você pode votar :)')
}
else if (idade>= idadeMinima && temTitulo == 'não') {
    console.log ('Você precisa de um título para votar :(')
}
else{
    console.log ('Você não pode votar.')
}
//else if (idade < idadeMinima &&  temTitulo == 'sim' || temTitulo == 'não'){
//console.log ('Você não tem a idade mínima para votar')
//}