// JAVASCRIPT FOR PROJECT

// Get User Location using GPS
function getLocation() {
    window.navigator.geolocation.getCurrentPosition(console.log,console.log)
}

// Open City Modal
let elements=document.getElementsByClassName('cat')
for (let index = 0; index < elements.length; index++) {
    elements[index].addEventListener('click',(event)=>{
        if(document.getElementById('location').value.length==0){
            document.getElementById('city-modal').style.display='block'
            event.preventDefault()
        }
    })
}

// Close City Modal
function closeCityModal() {
    document.getElementById('city-modal').style.display='none'
}

// Open About Modal
function about(){
    document.getElementById('about-modal').style.display='block'
}

// Close About Modal
function closeAbout() {
    document.getElementById('about-modal').style.display='none'
}

// Text Transition
window.onload=()=>{
    setTimeout(() => {
        document.getElementById('line1').style.opacity=1
    }, 1000);
    setTimeout(() => {
        document.getElementById('line2').style.opacity=1
    }, 3000);
    setTimeout(() => {
        document.getElementById('line3').style.opacity=1
    }, 5000);
    setTimeout(() => {
        document.getElementById('line4').style.opacity=1
    }, 7000);

}

// Typewrite and Cursor Animation
// setTimeout(() => {
//     document.getElementById('line1').style.border='0px'
//     document.getElementById('line2').style.display='block'
//     document.getElementById('line2').classList.add('typewriter2')
// }, 5000);

// setTimeout(() => {
//     document.getElementById('line2').style.border='0px'
//     document.getElementById('line3').style.display='block'
//     document.getElementById('line3').classList.add('typewriter3')
// }, 10000);

// setTimeout(() => {
//     document.getElementById('line3').style.border='0px'
// }, 18000);