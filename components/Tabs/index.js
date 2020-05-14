// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: http://stapi.co/api/v1/rest/movie/search
// Once the data is returned console.log it and review the structure. //Hint: use console.log(response.data) so you can focus on the data you're manipulating
// Filter out the movies so you get an array with movies that have a mainDirector.name of 'J.J. Abrams'
// Iterate over the topics creating a new Tab component that has the following textContent:
// `Movie: ${element.title} Director: ${element.mainDirector.name}`
// Then add it to the DOM under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">`Movie: ${element.title} Director: ${element.mainDirector.name}`</div>

// const exampleData = response.data.examples;
// exampleData.forEach(example => {
//     examplesContainer.appendChild(tabMaker(example));

