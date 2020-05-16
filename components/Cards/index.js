// STEP 3: Create Season cards.
// -----------------------
// Send an HTTP GET request to the following address: http://stapi.co/api/v1/rest/season/search
// Study the response data you get back, closely.  //Hint: use console.log(response.data) so you can focus on the data you're manipulating
// You will be creating a component for each 'season' in the list, but we ONLY want seasons that have 'TNG' in them.
// So first, filter out the data being returned into a new array that only has seasons with 'TNG' in their title.
// Then, create a function that will programmatically create the following DOM component by iterating through this filtered data:
//
// <div class="card">
//   <div class="title">{Title}</div>
//   <div class="info">
//     <span>Series: {series.title</span>
//      <span> Season: {seasonNumber}</span>
//      <span> Episodes: {numberOfEpisodes} </span>
//   </div>
// </div>
//
// Create a card for each of the filtered seasons returned and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container')


axios.get("http://stapi.co/api/v1/rest/season/search")

.then(response => {
    console.log(response.data.seasons)
    const seasonList = response.data.seasons
    const TNGseasons = seasonList.filter((e) => 
        e.title.includes("TNG"))
        console.log(TNGseasons)
        TNGseasons.forEach((i) => {
        cardsContainer.appendChild((cardMaker(i)))
        })
    })
    

.catch(err => {console.log("something went wrong")})

.then(() => {console.log("success")
})

function cardMaker(item) {
    const cardDiv = document.createElement('div')
    const titleDiv = document.createElement('div')
    const infoDiv = document.createElement('div')
    const seriesSpan = document.createElement('span')
    const seasonSpan  = document.createElement('span')
    const episodeSpan = document.createElement('span')

titleDiv.textContent = `Title: ${item.title}`
seriesSpan.textContent = `Series: ${item.series.title}`
seasonSpan.textContent = `Season: ${item.seasonNumber}`
episodeSpan.textContent = `Episodes: ${item.numberOfEpisodes}`

cardDiv.appendChild(titleDiv)
titleDiv.appendChild(infoDiv)
infoDiv.appendChild(seriesSpan)
infoDiv.appendChild(seasonSpan)
infoDiv.appendChild(episodeSpan)

cardDiv.classList.add('card')
titleDiv.classList.add('title')
infoDiv.classList.add('info')

return cardDiv
}