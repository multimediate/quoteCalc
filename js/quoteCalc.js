///////////////////////////////////////////////////////////
// ABOUT: Quote Calculator
// CREATED BY: Jacob Wiedmann
// VERSION: 1.2.4
// COPYRIGHT: GoDaddy Operating Company, LLC All Rights Reserved
////////////////////////////////////////////////////////////


// ============================================
//  	 Check Multiple Choice Questions
//			1. Add value="XXX" to input
//			2. Add onclick="startCalc(); to input
// ============================================


var radioTotal = 0;

$('.radio-inline').change(function(){
	var Total = 0;

	$('.active .option').each(function() {
		Total += parseInt($(this).val());
	});

	radioTotal = Total;
	
	startCalc();

});


// ============================================
//  	    Main Calculation Function
// ============================================

// Initialize Variables
var baseline = 15; //Initial Setup of 10 minutes
var one = 0;
var two = 0;
var three = 0;

var four = 0; //extra
var five = 0; // extra
var six = 0; //extra


// Initialize Multipliers
var oneMult = 0;
var twoMult = 0;
var threeMult = 0;
var fourMult = 0;

var fiveMult = 0; //extra
var sixMult = 0; //extra



function startCalc(){
	interval = setInterval("calc()",1);
}

function calc(){
	// Set Multipliers
	oneMult =15; // 15 min per page
	twoMult = 4; //4 min per product
	threeMult = 3;	//3 min per option

	// Get values from form
	one = $("input[name=pageCount]").val(); //Page Count

	// If store, calculate. If not, zero out children
	if ($('#storeYes').closest(".radio-inline").hasClass('active')) {
		two = $("input[name=productCount]").val();
		three = $("input[name=optionSetCount]").val();
	} else {
		two = 0;
		three = 0;	
	};

	// Calculate Total
	$("#total").html(
		Math.ceil (
		baseline +
		(one * oneMult) + 
		(two * twoMult) + 
		(three * threeMult) + 
		(four * fourMult) +
		(five * fiveMult) + 
		(six * sixMult) +
		+ radioTotal
		)
	);
}


function stopCalc(){
	clearInterval(interval);
}


// ============================================
// 		 	    Quote Generation
// ============================================
function generateQuote() {
	//Initialize Variables
	var genQuote = document.getElementById("generated-quote");
	var colorChangeYes = document.getElementById("colorChangeYes");
	var colorChangeNo = document.getElementById("colorChangeNo");
	var storeYes = document.getElementById("storeYes");
	var storeNo = document.getElementById("storeNo");
	var wpYes = document.getElementById("wpYes");
	var wpNo = document.getElementById("wpNo");

	var colorChange = 0;
	var store = 0;
	var wordpress = 0;

	var quoteTotal = 0;


	// Radio Condition Check

	// if ($('#colorChangeYes').prop("checked")) {
	if ($('#colorChangeYes').closest(".radio-inline").hasClass('active')) {
		colorChange = "Yes";
	} else {
		colorChange = "No";
	};

	// if ($('#storeYes').prop("checked")) {
	if ($('#storeYes').closest(".radio-inline").hasClass('active')) {
		store = "Yes";
	} else {
		store = "No";
	};

	// if ($('#wpYes').prop("checked")) {
	if ($('#wpYes').closest(".radio-inline").hasClass('active')) {
		wordpress = "Yes";
	} else {
		wordpress = "No";
	};


	//Calculated Line Items for Notation Purposes
	rowOne = baseline + " minutes";		//  Initial Setup
	rowTwo = one;						//  Page Count
	rowThree = colorChange;				//  Color Change
	rowFour = wordpress; 				//  Wordpress Site
	rowFive = store; 					//  Store?
	rowSix = two;  						//  Product Count
	rowSeven = three;					//  Option Sets
	
	quoteTotal = (
		Math.ceil (
		baseline +
		(one * oneMult) + 
		(two * twoMult) + 
		(three * threeMult) + 
		(four * fourMult) +
		(five * fiveMult) + 
		(six * sixMult) +
		+ radioTotal
		)
	)
	+ " minutes";

	// Generate HTML
	genQuote.innerHTML ="&lt;table class=&quot;tg&quot; style=&quot;border-collapse: collapse;border-spacing: 0;margin: 0px auto;width: 100%;&quot;&gt; &lt;tr&gt; &lt;th class=&quot;tg-otoz&quot; colspan=&quot;2&quot; style=&quot;font-family: Arial, sans-serif;font-size: 24px;font-weight: bold;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;background-color: #ef6c0f;color: #ffffff;text-align: center;border-color: #000;&quot;&gt;Work Estimate&lt;/th&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td class=&quot;tg-5frq&quot; colspan=&quot;2&quot; style=&quot;font-family: Arial, sans-serif;font-size: 14px;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;font-style: italic;text-align: center;vertical-align: top;&quot;&gt;Shown in Minutes&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td class=&quot;tg-cxkv&quot; style=&quot;font-family: Arial, sans-serif;font-size: 14px;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;background-color: #ffffff;&quot;&gt;Initial Setup&lt;/td&gt; &lt;td class=&quot;tg-3we0&quot; style=&quot;font-family: Arial, sans-serif;font-size: 14px;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;background-color: #ffffff;vertical-align: top;&quot;&gt;" + rowOne + " &lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td class=&quot;tg-cxkv&quot; style=&quot;font-family: Arial, sans-serif;font-size: 14px;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;background-color: #ffffff;&quot;&gt;Pages&lt;/td&gt; &lt;td class=&quot;tg-3we0&quot; style=&quot;font-family: Arial, sans-serif;font-size: 14px;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;background-color: #ffffff;vertical-align: top;&quot;&gt;" + rowTwo + "&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td class=&quot;tg-cxkv&quot; style=&quot;font-family: Arial, sans-serif;font-size: 14px;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;background-color: #ffffff;&quot;&gt;Color Change?&lt;/td&gt; &lt;td class=&quot;tg-3we0&quot; style=&quot;font-family: Arial, sans-serif;font-size: 14px;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;background-color: #ffffff;vertical-align: top;&quot;&gt;" + rowThree + "&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td class=&quot;tg-cxkv&quot; style=&quot;font-family: Arial, sans-serif;font-size: 14px;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;background-color: #ffffff;&quot;&gt;Wordpress site?&lt;/td&gt; &lt;td class=&quot;tg-3we0&quot; style=&quot;font-family: Arial, sans-serif;font-size: 14px;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;background-color: #ffffff;vertical-align: top;&quot;&gt;" + rowFour + "&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td class=&quot;tg-cxkv&quot; style=&quot;font-family: Arial, sans-serif;font-size: 14px;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;background-color: #ffffff;&quot;&gt;Store?&lt;/td&gt; &lt;td class=&quot;tg-3we0&quot; style=&quot;font-family: Arial, sans-serif;font-size: 14px;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;background-color: #ffffff;vertical-align: top;&quot;&gt;" + rowFive + "&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td class=&quot;tg-3we0&quot; style=&quot;font-family: Arial, sans-serif;font-size: 14px;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;background-color: #ffffff;vertical-align: top;&quot;&gt;Products&lt;/td&gt; &lt;td class=&quot;tg-3we0&quot; style=&quot;font-family: Arial, sans-serif;font-size: 14px;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;background-color: #ffffff;vertical-align: top;&quot;&gt;" + rowSix + "&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td class=&quot;tg-3we0&quot; style=&quot;font-family: Arial, sans-serif;font-size: 14px;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;background-color: #ffffff;vertical-align: top;&quot;&gt;Option Sets&lt;/td&gt; &lt;td class=&quot;tg-3we0&quot; style=&quot;font-family: Arial, sans-serif;font-size: 14px;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;background-color: #ffffff;vertical-align: top;&quot;&gt;" + rowSeven + "&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td class=&quot;tg-2ib9&quot; style=&quot;font-family: Arial, sans-serif;font-size: 14px;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;font-weight: bold;background-color: #008a32;color: #ffffff;vertical-align: top;border-color: #000;&quot;&gt;Total Time&lt;/td&gt; &lt;td class=&quot;tg-2ib9&quot; style=&quot;font-family: Arial, sans-serif;font-size: 14px;padding: 10px 16px;border-style: solid;border-width: 1px;overflow: hidden;word-break: normal;font-weight: bold;background-color: #008a32;color: #ffffff;vertical-align: top;border-color: #000;&quot;&gt;" + quoteTotal + "&lt;/td&gt; &lt;/tr&gt;&lt;/table&gt;";
}


// ============================================
//     Conditional Accordion Functionality
// ============================================
function openAccordion(){
	if ($('#storeYes').closest(".radio-inline").hasClass('active')) {
		$('#storeChildren').collapse('show');
	} else if ($('#storeNo').closest(".radio-inline").hasClass('active')) {
		$('#storeChildren').collapse('hide');
	} else {
		$('#storeChildren').collapse('hide');
	};
}