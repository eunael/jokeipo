var resultado = document.getElementById("resul")
var jogador = document.getElementById("jogador")
var computador = document.getElementById("computador")
var pontj = document.getElementById("pontj")
var pontc = document.getElementById("pontc")

function todos(op){
    var rps = String(op)
    var i = pontj.innerHTML
    var pj = Number.parseInt(i)
    var h = pontc.innerHTML
    var pc = Number.parseInt(h)
    var esco = "rps"
    var num = Math.random()
    var nc = Number.parseInt(0 + num *(3-0))
    var comp = esco[nc]
    if (rps == "pedra"){
        jogador.src = "zpedra.png"
        if (comp=="p"){
            computador.src = "zpapel.png"
            resultado.innerHTML = "perdeu"
            pc++
            pontc.innerHTML = pc
        } else if (comp=="s"){
            computador.src = "ztesoura.png"
            resultado.innerHTML = "ganhô"
            pj++
            pontj.innerHTML = pj
        } else{
            computador.src = "zpedra.png"
            resultado.innerHTML = 'empatou'
        }
    } else if(rps == "papel"){
        jogador.src = "zpapel.png"
        if (comp=="s"){
            computador.src = "ztesoura.png"
            resultado.innerHTML = "perdeu"
            pc++
            pontc.innerHTML = pc
        } else if (comp=="r"){
            computador.src = "zpedra.png"
            resultado.innerHTML = "ganhô"
            pj++
            pontj.innerHTML = pj
        } else{
            computador.src = "zpapel.png"
            resultado.innerHTML = 'empatou'
        }
    } else{
        jogador.src = "ztesoura.png"
        if (comp=="r"){
            computador.src = "zpedra.png"
            resultado.innerHTML = "perdeu"
            pc++
            pontc.innerHTML = pc
        } else if (comp=="p"){
            computador.src = "zpapel.png"
            resultado.innerHTML = "ganhô"
            pj++
            pontj.innerHTML = pj
        } else{
            computador.src = "ztesoura.png"
            resultado.innerHTML = 'empatou'
        }
    }
}
