document.getElementById('iniciar-btn').addEventListener('click', function() {
    document.getElementById('inicio-estudos').style.display = 'none'

    document.querySelector('main').style.display = 'block';

    criaCartao(
        'Programação',
        'O que é Python?',
        'O Python é uma linguagem de programação'
    );
    criaCartao(
        'Geografia',
        'Qual a capital da França?',
        'A capital da França é Paris'
    );
    criaCartao(
        'Programação',
        'O que é uma função?',
        'Uma função é um bloco de código que executa alguma tarefa'
    );
    criaCartao(
        'Lingua inglesa',
        'Como se diz oi em Inglês?',
        'Oi em inglês é HI (RAI)'
    );
});