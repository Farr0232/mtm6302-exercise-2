const $img = document.getElementById('img')
const $images = document.querySelector('.img1 img')
const $modal = document.querySelector('.modal')
const img=[]

for(let i=2; i<=12; i++){
    img.push(`
    <img src="images/320/img${i}_320.jpg" alt="" data-larger="images/img${i}_640.jpg" data-desc="Portfolio Piece ${i}">
    `)
}

$img.innerHTML +=img.join('')

let portimg = document.querySelectorAll('.img1 img')
for(let j=0; j<portimg.length; j++){
portimg[j].addEventListener('click', function() {
    console.log(this)
    // When the image is clicked, populate the modal with the content:
    $modal.innerHTML = `
    <img src='${this.dataset.larger}' alt="TEST TEST TEST">
    <figcaption>${$images.dataset.desc}</figcaption>`
    $modal.classList.add('show')
})
}
// When the modal is clicked, hide the modal
$modal.addEventListener('click', function() {
    $modal.classList.remove('show')
})
