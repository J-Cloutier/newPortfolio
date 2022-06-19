// get modal element 
const modal = document.getElementById('simpleModal')

//get open modal button
const modalBtn = document.getElementById('modal1')

//get close button
const closeBtn = document.getElementById('closeBtn')

// listen for open click
modalBtn.addEventListener('click', openModal)

// listen for close click
closeBtn.addEventListener('click', closeModal)

//Listen for outside Click
window.addEventListener('click', clickOutSide)


//function to open modal
function openModal(){
    console.log('123')
    modal.style.display = 'block'
}
//function to close modal
function closeModal(){
    console.log('123')
    modal.style.display = 'none'
}
//function to close modal if outside click1
function clickOutSide(e){
    if(e.target === modal){
        modal.style.display = 'none'
    }
    
}