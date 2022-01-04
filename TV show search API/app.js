



const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value
    const config = {params:{q:searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    displayimages(res.data)
    let input = document.querySelector('#input')
    input.value=""
   deleteImages()
    
})

const displayimages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img')
            img.src = result.show.image.medium
            document.body.append(img)
        }
    }
}




