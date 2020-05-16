// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MAY 14, 2020</span>
//    <h1>Star Trek Daily</h1>
//    <span class="temp">75°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headerDiv = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement ('h1')
    const temp = document.createElement ('span')

    headerDiv.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    date.textContent = "May 14, 2020"
    title.textContent = "Star Trek Daily"
    temp.textContent = "75°"

    headerDiv.appendChild(date)
    headerDiv.appendChild(title)
    headerDiv.appendChild(temp)

    

    return headerDiv


}

const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(Header());

