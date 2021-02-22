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


console.log(WholeBlock.data("hour"));

//creating a variable that shows what hour it is as an integer
var hour = parseInt(moment().format("H"));
console.log(hour);

// make each row run this function BlockColor, which can be a loop (?)
//make each div variable in an array, then choose i for which one to call

var AllBlock = [nineAm,tenAm,elevenAm,twelveAm,thirteen,fourteen,fifteen,sixteen,seventeen];

for (var i = 0; i < AllBlock.length; i++) {
    // console.log(AllBlock[i]);
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



// MIGHT GENERALLY NEED TO BE MORE SPECIFIC WITH WHICH DIV WE ARE TARGETING FOR WHAT