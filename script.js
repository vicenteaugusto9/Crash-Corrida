const crash = document.querySelector('.crash-correndo')
const caixa = document.querySelector('.caixa')


const jump = () =>{
    crash.classList.add('jump')

    setTimeout(()=>{
        crash.classList.remove('jump')


    },500)
}
const loop= setInterval(()=>{
    const caixaPosition = caixa.offsetLeft
    const crashPosition = +window.getComputedStyle(crash).bottom.replace('px','')
    console.log(crashPosition);
    

    
    if(caixaPosition <= 70 && caixaPosition > 0 && crashPosition < 80 ){

        caixa.style.animation ='none'
        caixa.style.left = `${caixaPosition}px `

        crash.style.animation ='none'
        crash.style.bottom = `${crashPosition}px `

        crash.src = 'assets/imgs/crash-game-over.gif'
        crash.style.width ='100px'
        crash.style.left ='10px'

        clearInterval(loop)
    }

},10 ) 


document.addEventListener('keydown',jump)