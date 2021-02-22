//here is the javascript file
var WholeBlock = $(".Timeblocks");
var nineAm = $("#9");
var tenAm = $("#10");
var elevenAm = $("#11");
var twelveAm = $("#12");
var oneAm = $("#1");
var twoAm = $("#2");
var threeAm = $("#3");
var fourAm = $("#4");
var fiveAm = $("#5");
var currentDay = $("#currentDay");


//dddd, MMMM Do YYYY moment format
var today = moment().format("dddd, MMMM Do YYYY");
currentDay.text(today);