
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";  /*Exibe mensagem na web / Está ligado com html*/
//    console.log(document.getElementById("agradecimento"));                             /*Puxou todo o id para o console*/
//    alert("Obrigado por clicar")                                                       /*Exibe a mensagem ao clicar no botão*/
}

function redirecionar(){                                      /*Função*/
    window.open("https://web.whatsapp.com/")                  /*1º Forma = Abre uma outra página / Está ligado com html*/
//    window.location.href = "https://web.whatsapp.com/"      /*2º Forma = Abre na mesma página / Está ligado com html*/
}

function trocar(elemento){                                   /*Função*/
    elemento.innerHTML = "Obrigado por passar o mouse!";     /*Troca o nome do elemento quando passa o mouse por cima / Ligado com HTML*/
}

function voltar(elemento){                                   /*Função*/
    elemento.innerHTML = "Passe o mouse aqui!";              /*Volta o texto original ao tirar o mouse de cima / Ligado com HTML*/
}

function load(){                                /*Função*/
    alert("Página carregada!");                 /*Mensagem de alerta ao carregar a página / Ligada no HTML*/
}


function funcaoChange(elemento){                /*Função*/
    console.log(elemento.value)                 /*Exibe no console*/
}


//function trocar(){                                                                       /*Função*/
//    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";     /*Troca o nome do elemento quando passa o mouse por cima / Ligado com HTML*/
//}

//function voltar(){                                                                       /*Função*/
//    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";              /*Volta o texto original ao tirar o mouse de cima / Ligado com HTML*/
//}


//function soma(n1, n2){                        /*Função/
//    return n1 + n2;                           /*Retorna*/
//}

//alert (soma(5, 10));

//function validaIdade(idade){                  /*Função*/
//    var validar;                              /*Variavel*/
//    if (idade >= 18){                         /*If = se / Condição*/
//        validar = true                        /*Condição*/
//    }
//    else{                                     /*Else = senão*/
//        validar = false                       /*Condição*/
//    }
//    return validar;                           /*Retorna o validar*/
//}


//var idade = prompt ("Qual sua idade?");       /*Abre a janela pra digitar e carrega na variavel*/
//console.log(validaIdade(idade));              /*Carrega no console*/


//var d = new Date();
//alert(d);                                   /*Puxa informações como: Dia, Mês, hora etc*/
//alert(d.getDay());                          /*Puxa o dia*/
//alert(d.getMonth()+1);                      /*Puxa o mês / Sempre colocar +1*/
//alert(d.getMinutes());                      /*Puxa os minutos*/
//alert(d.getHours());                        /*Puxa a hora*/


//var count;                                  /*Variavel*/
//for(count = 0; count <= 5; count++){        /*Começa do 1 e vai subindo até ficar com 5*/
//    alert(count);                           /*Alerta*/
//};


//var count = 0;                              /*Variavel*/    
//while (count <= 5){                         /*Repetição se cumprir a condição*/
//    console.log(count);                     /*Console*/
//    alert(count)                            /*Mostra a contagem no alerta*/
//    count = count + 1;                      /*Faz o valor da variavel "count" +1 até ficar = "count"*/
//};

//var idade = prompt ("Qual sua idade?");     /*Cria a variavel e o "Prompt" é responsavel por fazer a pergunta*/
//if (idade >= 18){                           /*A variavel de cima é gravada e faz a comparação por causa do "if"*/
//    alert ("Maior de idade");               /*Exibe a mensagem*/
//};
//else {                                      /*Else = senão / Se a função acima não for atingida compara com a de baixo*/
//    alert("Menor de idade");                /*Exibe a mensagem*/
//};

//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]   /*Variavel com duas condições*/
//console.log(frutas);                                                     /*Carregar no Console*/
//alert(frutas[1].nome);                                                   /*Chama no alerta a 1 var (Que é a uva, maça é 0) */

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];        /*Variavel*/
//lista.push ("uva");      /*Acrescentar*/
//lista.pop ()      /*Retirar item da lista*/
//console.log(lista);      /*Carregar no Console*/
//console.log(lista.toString());       /*Transforma em uma String*/
//console.log(lista.join(" - "));       /*Transforma em uma String, mas você escolhe a condição de espaço/caracter*/
//console.log(lista.reverse());      /*Carrega ao contrario*/
//console.log(lista.length);      /*Quantidade de coisas na lista*/
//alert("Meu primeiro js");
