var ppt = [ ['pedra', 'imagens/zpedra.png'],
            ['papel', 'imagens/zpapel.png'],
            ['tesoura', 'imagens/ztesoura.png']]

function contPlacar(res){
    if(res != "empatou"){
        let jogador, computador, jog, comp
        jogador = document.querySelector('#placjog')
        computador = document.querySelector('#placcomp')
        jog = Number.parseInt(jogador.innerHTML)
        comp = Number.parseInt(computador.innerHTML)
        if(res == "ganhou"){
            jogador.innerHTML = ++jog
        } else if(res == "perdeu"){
            computador.innerHTML = ++comp
        }
    } else{}
}

function resultadoFinal(jog, comp, res){
    let jogador, comput, result
    jogador = document.querySelector("#jog")
    comput = document.querySelector("#comp")
    result = document.querySelector("#result")

    jogador.src = jog
    comput.src = comp
    result.innerHTML = res
}

function escolhaComp(){
    let num = Math.floor(Math.random()*3)
    return ppt[num]
}
function jogada(num){
    let jogador = ppt[num]
    let computador = escolhaComp()
    let res = {ganhou: 0, empatou: 1, perdeu: 2}
    let resultado
    switch(jogador[0]){
        case 'pedra':
            if (computador[0] === 'tesoura'){
                resultado = 'ganhou'
            } else if (computador[0] === 'pedra'){
                resultado = 'empatou'
            } else if (computador[0] === 'papel'){
                resultado = 'perdeu'
            }
            break
        case 'papel':
            if (computador[0] === 'pedra'){
                resultado = 'ganhou'
            } else if (computador[0] === 'papel'){
                resultado = 'empatou'
            } else if (computador[0] === 'tesoura'){
                resultado = 'perdeu'
            }
            break
        case 'tesoura':
            if (computador[0] === 'papel'){
                resultado = 'ganhou'
            } else if (computador[0] === 'tesoura'){
                resultado = 'empatou'
            } else if (computador[0] === 'pedra'){
                resultado = 'perdeu'
            }
    }
    return [jogador[1], computador[1], resultado]
}

function jogo(num){
    let esc = jogada(num)
    contPlacar(esc[2])
    resultadoFinal(esc[0], esc[1], esc[2])
}