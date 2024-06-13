const listaDeChamada = [
    { numero: 1, nome: "ANA CAROLINA PONTAROLO CARVALHO" },
    { numero: 2, nome: "ANA HELOISE MONTERO DA SILVA" },
    { numero: 3, nome: "ANA LUIZA DA SILVA NOGUEIRA" },
    { numero: 4, nome: "ANDRE CARDIN SOARES" },
    { numero: 5, nome: "BEATRIZ BRANDT VIANA" },
    { numero: 6, nome: "BHIANCA MULDENBERGER PINTO" },
    { numero: 7, nome: "CALUA JUN KESHINO" },
    { numero: 8, nome: "ELIA GABRIEL VIERA" },
    { numero: 9, nome: "ENZO SAMUEL LISBOA ZORDENUNES" },
    { numero: 10, nome: "GIOVANNA CALDEIRA" },
    { numero: 11, nome: "HENRIQUE QUARTE DOS SANTOS" },
    { numero: 12, nome: "HENRIQUE EMILIO SILVA KRUGER" },
    { numero: 13, nome: "LAGO DANIE, CALIXTO" },
    { numero: 14, nome: "JASMIN APARECIDA DA SILVA PEREIRA" },
    { numero: 15, nome: "ISADORA CRISTINA SILVEIRA" },
    { numero: 16, nome: "JHENYPER GUIMARÃES DE LARA" },
    { numero: 17, nome: "JOAO FRANCISCO KUIV" },
    { numero: 18, nome: "JOÃO HENRIQUE MORAIS DE ASSIS" },
    { numero: 19, nome: "LORENZO HENRIQUE BENIN" },
    { numero: 21, nome: "LUIZ FELIPE DO ROSARIO DE PAULA" },
    { numero: 22, nome: "LUIZ GUSTAVO BRASIL" },
    { numero: 23, nome: "MARIA JALIA AMORIM DA SEVA" },
    { numero: 24, nome: "MARIA LUYZA MENDES DA SILVA LEAL" },
    { numero: 26, nome: "RAOLA RAFAELA DOS SANTOS AMARAL" },
    { numero: 28, nome: "RENATO GABRIEL VIANA STRAUBE" },
    { numero: 29, nome: "RICHARD CARRAPO" },
    { numero: 30, nome: "VICTOR DE PAULA" },
    { numero: 31, nome: "VINICIUS BORTOL" },
    { numero: 32, nome: "WILLIAN NOVAES BITTENCOURT" },
    { numero: 33, nome: "THAISSA COSTA ALVES" },
    {numero: 34, nome: "KHAILLANE ARAUJO"},
];


const novaListaDeChamada = listaDeChamada.filter(aluno => aluno.nome !== "KHAILLANE ARAUJO");
novaListaDeChamada.push({ numero: 27, nome: "PEDRO HENRIQUE LOPES DE LARA" });


console.log(novaListaDeChamada);
