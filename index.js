const easterEggs = document.querySelectorAll('.eggs');
const modal = document.getElementById('modal')

function egg1(){
    const posx = Math.round(Math.random()*screen.width);
    const posy = Math.round(Math.random()*screen.height);
    const elementDivImage = document.getElementById("egg1");
    elementDivImage.setAttribute("style","position:absolute; left:"+posx+"px; top:"+posy+"px; z-index:1");
}

function egg2(){
    const posx = Math.round(Math.random()*screen.width);
    const posy = Math.round(Math.random()*screen.height);
    const elementDivImage = document.getElementById("egg2");
    elementDivImage.setAttribute("style","position:absolute; left:"+posx+"px; top:"+posy+"px; z-index:1");
}

function egg3(){
    const posx = Math.round(Math.random()*screen.width);
    const posy = Math.round(Math.random()*screen.height);
    const elementDivImage = document.getElementById("egg3");
    elementDivImage.setAttribute("style","position:absolute; left:"+posx+"px; top:"+posy+"px; z-index:1");
}

function egg4(){
    const posx = Math.round(Math.random()*screen.width);
    const posy = Math.round(Math.random()*screen.height);
    const elementDivImage = document.getElementById("egg4");
    elementDivImage.setAttribute("style","position:absolute; left:"+posx+"px; top:"+posy+"px; z-index:1");
}

function egg5(){
    const posx = Math.round(Math.random()*screen.width);
    const posy = Math.round(Math.random()*screen.height);
    const elementDivImage = document.getElementById("egg5");
    elementDivImage.setAttribute("style","position:absolute; left:"+posx+"px; top:"+posy+"px; z-index:1");
}

const button = document.querySelector('button')
button.addEventListener('click', function(event) {
    egg1()
    egg2()
    egg3()
    egg4()
    egg5()
})

easterEggs.forEach(egg => {
    egg.addEventListener('click', function(event) {
        const remainingEasterEggs = document.querySelectorAll('.eggs');
        event.target.remove()
        
        if(remainingEasterEggs.length == 1){
            alert('Bravo vous avez trouvé tous les œufs de Pâques !')
            modal.style.display = 'flex'
        }
    })
});

modal.addEventListener('click', function(event) {
    modal.style.display = 'none'
    window.location.reload()
})