// creating variables that point to different divs in html
//these 2 are used for tracking day and time
var WholeBlock = $(".Timeblock");
var currentDay = $("#currentDay");

//these are to indicate to each div that includes all elements for each timeblock
var nineAm = $("#9");
var tenAm = $("#10");
var elevenAm = $("#11");
var twelveAm = $("#12");
var thirteen = $("#13");
var fourteen = $("#14");
var fifteen = $("#15");
var sixteen = $("#16");
var seventeen = $("#17");



//set text at top of page that displays todays date
var today = moment().format("dddd, MMMM Do YYYY");
currentDay.text(today);

//creating a variable that shows what hour it is as an integer, which will be used later to determine the color of each section
var hour = parseInt(moment().format("H"));



//make each div variable in an array, then choose i for which one to call
var AllBlock = [nineAm,tenAm,elevenAm,twelveAm,thirteen,fourteen,fifteen,sixteen,seventeen];

/*for loop to set the color, add eventlistener to the button,
set input text to anything saved in localstorage,
and save input to localstorage when the add button is clicked*/

for (var i = 0; i < AllBlock.length; i++) {
    BlockColor(AllBlock[i]);
}

/*here is function that is called in the for loop
this section references the input from the "for" loop (AllBlock[1]) as "this"
and makes the variable "x" point to whichever part of the array "AllBlocks" is referenced to by the "for" loop*/
function BlockColor(x){  // = this
    /*lines 47-56 finds the input element in each div referenced in the AllBlocks array,
    then changes the background color to either red, blue or green depending if
    the time has passed, it is currently that time, or it is still to come.
    the function does this by referencing the data-number I gave to each div to specify which hour block it represents ("x.data("hour")")*/
    var input = $('input');
    var TaskInput = x.find(input);

    if (x.data("hour") === hour){
        TaskInput.addClass('bg-info');
    } else if (x.data("hour") > hour) {
        TaskInput.addClass('bg-success');
    } else{
        TaskInput.addClass('bg-danger');
    }

    /*create variable to specify which time block the for loop is adding to, 
    so as to specify in local storage where inputs are coming from, and where they will go*/
    var currentHour = x.data("hour");
    
    //this gets any info saved to localstorage for this specific time block, and puts it into the input 
    TaskInput.val(localStorage.getItem(currentHour));

    //create variables used to specify the button element in each time block
    var Btndiv = $('button');
    var addBtn = x.find(Btndiv);

    /*adds event listener to each button, that if the button is clicked,
    save whatever is in the input area to the localstorage tied together with which timeblock it was saved from*/
    addBtn.on("click", function(){
     currentPlan = TaskInput.val();
     localStorage.setItem(currentHour, currentPlan);
    });
}

// 
function getWeather (){
    fetch("https://api.openweathermap.org/data/2.5/find?q=columbus&units=imperial&appid=096317ae116f5805e156e4177ebd6d5a")
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then( function (data) {
        //taking data from weather api and putting it onto the page
        console.log(data);
        $('#wIcon').attr('src', `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`);
        $('#feelz').text(data.list[0].main.feels_like);
    });
}
getWeather();