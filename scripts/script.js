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