//here is the javascript file
var Container = $(".container");
var WholeBlock = $(".Timeblock");

var nineAm = $("#9");
var tenAm = $("#10");
var elevenAm = $("#11");
var twelveAm = $("#12");
var thirteen = $("#13");
var fourteen = $("#14");
var fifteen = $("#15");
var sixteen = $("#16");
var seventeen = $("#17");
var currentDay = $("#currentDay");


//dddd, MMMM Do YYYY moment format into a variable
var today = moment().format("dddd, MMMM Do YYYY");
currentDay.text(today);


console.log(WholeBlock.data("hour")); //to test calling data info

//creating a variable that shows what hour it is as an integer
var hour = parseInt(moment().format("H"));
console.log(hour);//make sure correct hour is chosen

// make each row run this function BlockColor
//make each div variable in an array, then choose i for which one to call
var AllBlock = [nineAm,tenAm,elevenAm,twelveAm,thirteen,fourteen,fifteen,sixteen,seventeen];

for (var i = 0; i < AllBlock.length; i++) {
    BlockColor(AllBlock[i]);
}

//make an interval to check the time every 30 mins(?) then update the colors accordingly (?)
function BlockColor(x = this){
    var input = $('input');
    var TaskInput = x.find(input);
    if (x.data("hour") === hour){
        TaskInput.addClass('bg-info');
    } else if (x.data("hour") > hour) {
        TaskInput.addClass('bg-success');
    } else{
        TaskInput.addClass('bg-danger');
    }
}


//for saving the inputs, only have whatever is in the box, be what is saved to the localstorage. no weird saving/populating
// for loop to add click listener to all the buttons, then call savePlans function in the eventlistener


//can the eventlistener just be added in the earlier for loop to add the listner to each button?

var addBtn = $('#SaveBtn');
addBtn.on("click", function(){
    console.log("savePlan func ");
});

// var savePlans = function() {
    
// }
// MIGHT GENERALLY NEED TO BE MORE SPECIFIC WITH WHICH DIV WE ARE TARGETING FOR WHAT