const $img = document.getElementById('img')
const img=[]

for(let i=2; i<=12; i++){
    img.push(`
    <div id="img" class="img1">
    <img src="./images/320/img${i}_320.jpg" alt="">
</div>
    `)
}

$img.innerHTML +=img.join('')