const span = document.getElementsByClassName('title')[0]
const stitic1 = document.querySelector('.one')
const stitic2 = document.querySelector('.two')
const stitic3 = document.querySelector('.three')
const childone = document.querySelector('.childone')
const childtwo = document.querySelector('.childtwo')
const childThree = document.querySelector('.childThree')
const childfour = document.querySelector('.childfour')
const childfive = document.querySelector('.childfive')


console.log(stitic1)
setTimeout(()=>{
    span.style.bottom = '0'
    span.style.opacity='1'

},450)
setTimeout(()=>{
    stitic1.style.width='70%'
    stitic2.style.width='80%'
    stitic3.style.width='100%'

},550)


function addStylesToTargetSection() {
    let targetSection = document.querySelector('.target-section');
    
    if (targetSection) {
        let sectionRect = targetSection.getBoundingClientRect();
        let windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (sectionRect.top < windowHeight) {
            setTimeout(()=>{            
                childone.style.width='90%'
                childtwo.style.width='90%'
                childThree.style.width='80%'
                childfour.style.width='80%'
                childfive.style.width='80%'
            },250)

            // targetSection.style.backgroundColor = 'lightblue';
            // targetSection.style.color = 'black';
        }
    }
}

// Add an event listener for the 'scroll' event
window.addEventListener('scroll', addStylesToTargetSection);

// Call the function once on page load to check if the section is in view
window.addEventListener('load', addStylesToTargetSection);
