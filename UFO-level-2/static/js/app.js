// from data.js
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

tableData.forEach(function(UFOFinder){
    var trow = tbody.append("tr");
    trow.append('td').text(UFOFinder.datetime)
    trow.append('td').text(UFOFinder.city)
    trow.append('td').text(UFOFinder.state)
    trow.append('td').text(UFOFinder.country)
    trow.append('td').text(UFOFinder.shape)
    trow.append('td').text(UFOFinder.durationMinutes)
    trow.append('td').text(UFOFinder.comments)
})


// Add a new row
var html = d3.select('tbody').html()
html= html+"<tr><td>5/9/2020</td><td>austin</td><td>tx</td><td>us</td><td>circle</td><td>5 minutes</td><td>There are two of them</td></tr>"
// append the new row into the table
d3.select('tbody').html(html)

////////////////////////////////////////////////////////////////////////////////

const form = d3.select("#form");
const button= d3.select('.btn')
// Create event handlers for pressing the enter key
form.on("submit",runEnter);
button.on('click',runEnter);

// Create the function to run for the event
function runEnter() {
// Prevent the page from refreshing when I hit enter
d3.event.preventDefault();

// select the input element 
const inputDate = d3.select("#datetime");
const inputCity = d3.select("#city");
const inputState = d3.select("#state");
const inputCountry = d3.select('#country');
const inputShape = d3.select('#shape');
// Get the value property of the input element
const valueDate = inputDate.property("value");
const valueCity = inputCity.property("value");
const valueState = inputState.property('value');
const valueCountry = inputCountry.property('value');
const valueShape = inputShape.property('value');




// var filter = {
//     datetime:valueDate,
//     city:valueCity,
//     state:valueState,
//     country:valueCountry,
//     shape:valueShape
//   };


// users= tableData.filter(function(item) {
//     for (var key in filter) {
//       if (item[key] === undefined || item[key] != filter[key])
//         return false;
//     }
//     return true;
//   });

// console.log(users)

// const filteredData = tableData.filter(tableData=> tableData.datetime === inputValue)


const filteredData =  tableData.filter(function(filter) {
    return ((filter.datetime===valueDate || filter.city ===valueCity 
        || filter.state===valueState || filter.country===valueCountry || filter.shape===valueShape ));
  })
  


console.log(filteredData)

var results=d3.select("tbody")

results.html("");

filteredData.forEach(function(filtered){
    var trow = tbody.append("tr");
    trow.append('td').text(filtered.datetime)
    trow.append('td').text(filtered.city)
    trow.append('td').text(filtered.state)
    trow.append('td').text(filtered.country)
    trow.append('td').text(filtered.shape)
    trow.append('td').text(filtered.durationMinutes)
    trow.append('td').text(filtered.comments)
})

};