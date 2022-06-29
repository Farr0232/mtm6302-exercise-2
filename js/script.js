const $img = document.getElementById('img')
const $images = document.querySelector('img')
const $modal = document.querySelector('.modal')
const img=[]

for(let i=2; i<=12; i++){
    img.push(`
    <div id="img" class="portfolio-img img${i}">
    <img src="./images/320/img${i}_320.jpg" alt=""data-large="images/640/img${i}_640.jpg" data-desc="Test TEST Test">
</div>
    `)
}

$img.innerHTML +=img.join('')

$img.addEventListener('click', function() {
    // When the image is clicked, populate the modal with the content:
    $modal.innerHTML = `
    <img src=`${$images.dataset.large}` alt="TEST TEST TEST">
    <figcaption>${$images.dataset.desc}</figcaption>`
    $modal.classList.add('show')
})

// When the modal is clicked, hide the modal
$modal.addEventListener('click', function() {
    $modal.classList.remove('show')
})