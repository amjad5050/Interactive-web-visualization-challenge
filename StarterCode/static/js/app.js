
let biodivJSON = "samples.json";
let dropdown_menu = d3.select("#selDataset");

d3.json(biodivJSON).then((data) => {
    var dataNames = data.names;
    //console.log(dataNames);

dataNames.forEach((element)=> {
    dropdown_menu
    .append("option")
    .text(element)
    .property("value", element);
    
});
});

function optionChanged(newValue){
    // todo
    updatePlotly(newValue)
}

// This function is will update the default plot when called
function updatePlotly(selectedInd) {
    console.log("Plotting with " + selectedInd);    

    d3.json(biodivJSON).then((data) => {
        
    // select the individual from the data

    });
  
    // Initialize x and y arrays
    var x = [];
    var y = [];

    /* Make the Bar chart */


    /* Make the bubble plot */
}

var barDiv = document.getElementById('bar');

var traceA = {
  x: [1, 2, 3, 4, 5],
  y: [1, 2, 4, 8, 16],
  type: 'bar',
  orientation: "h",
  width: 0.8,
  marker: {
    color: 'rgba(0,255,50,0.6)',
    line: {
      color: 'black',
      width: 1
    }
  }
};

var data = [traceA];

var layout = {
  title:'Top 10 OTUs'
};

Plotly.newPlot("bar", data, layout);

// ****** GAUGE PLOT *****
// var gaugeDiv = document.getElementById("gauge");
 
// var traceB = {
//   type: "pie",
//   showlegend: false,
//   hole: 0.4,
//   rotation: 90,
//   values: [100 / 5, 100 / 5, 100 / 5, 100 / 5, 100 / 5, 100],
//   text: ["Very Low", "Low", "Average", "Good", "Excellent", ""],
//   direction: "clockwise",
//   textinfo: "text",
//   textposition: "inside",
//   marker: {
//     colors: ["rgba(255, 0, 0, 0.6)", "rgba(255, 165, 0, 0.6)", "rgba(255, 255, 0, 0.6)", "rgba(144, 238, 144, 0.6)", "rgba(154, 205, 50, 0.6)", "white"]
//   },
//   labels: ["0-10", "10-50", "50-200", "200-500", "500-2000", ""],
//   hoverinfo
