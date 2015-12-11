///////////////////////////////////////////////////////////
// ABOUT: Quote Calculator
// CREATED BY: Jacob Wiedmann
// VERSION: 1.2.1
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

// if ($('#storeYes').parent().hasClass('.active') {
// 	$('#storeChildren').collapse('toggle');
// 	$('#storeChildren').addClass("in");
// } else {
// 	$('#storeChildren').collapse('hide');
// 	$('#storeChildren').removeClass("in");
// };






// ============================================
//  	    Main Calculation Function
// ============================================

// Initialize Variables
var baseline = 10; //Initial Setup of 10 minutes
var one = 0;
var two = 0;
var three = 0;
var four = 0;
var five = 0;
var six = 0;

// Multipliers
var oneMult = 0;
var twoMult = 0;
var threeMult = 0;
var fourMult = 0;
var fiveMult = 0;
var sixMult = 0;
var sevenMult = 0;


function startCalc(){
	interval = setInterval("calc()",1);
}

function calc(){

	one = $("input[name=firstBox]").val(); //Page Count
	oneMult =10;

	two = $("input[name=secondBox]").val(); //Layout Change per page
	twoMult = 5;

	three = $("input[name=thirdBox]").val(); //Product Count
	threeMult = 4;

	four = $("input[name=fourthBox]").val(); //Option Set Count
	fourMult = 3;	

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
	var genQuote = document.getElementById("generated-quote");
	var colorChangeYes = document.getElementById("colorChangeYes");
	var colorChangeNo = document.getElementById("colorChangeNo");
	var storeYes = document.getElementById("storeYes");
	var storeNo = document.getElementById("storeNo");
	
	var colorChange = 0;
	var store = 0;

	//Variable Adjustment for Notation
	one = (one * oneMult);
	two = (two * twoMult);
	three = (three * threeMult);
	four = (four * fourMult);
	five = three;
	six = four;

	// Radio Condition Check
	if ($('#colorChangeYes').prop("checked")) {
		colorChange = $('#colorChangeYes').attr("value");
	} else {
		colorChange = $('#colorChangeNo').attr("value");
	};

	if ($('#storeYes').prop("checked")) {
		store = $('#storeYes').attr("value");
	} else {
		store = $('#storeNo').attr("value");
	};

	genQuote.innerHTML ="&lt;table style=&quot;border-collapse: collapse; border-spacing: 0;&quot;&gt;&lt;tr&gt;&lt;th style=&quot;font-family: Arial, sans-serif; font-size: 14px; font-weight: normal; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; font-weight: bold; font-size: 22px; background-color: #ef6c0f; color: #ffffff; text-align: center&quot; colspan=&quot;2&quot;&gt;Work Estimate&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td style=&quot;font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal;&quot; class=&quot;tg-yw4l&quot;&gt;Initial Setup&lt;/td&gt;&lt;td style=&quot;font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal;&quot; class=&quot;tg-yw4l&quot;&gt;"+baseline+"&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td style=&quot;font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal;&quot; class=&quot;tg-yw4l&quot;&gt;Pages&lt;/td&gt;&lt;td style=&quot;font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal;&quot; class=&quot;tg-yw4l&quot;&gt;"+one+"&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td style=&quot;font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal;&quot; class=&quot;tg-yw4l&quot;&gt;Pages w/ Layout Changes&lt;/td&gt;&lt;td style=&quot;font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal;&quot; class=&quot;tg-yw4l&quot;&gt;"+two+"&lt;/td&gt; &lt;/tr&gt;&lt;tr&gt;&lt;td style=&quot;font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal;&quot; class=&quot;tg-yw4l&quot;&gt;Color Change?&lt;/td&gt;&lt;td style=&quot;font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal;&quot; class=&quot;tg-yw4l&quot;&gt;"+colorChange+"&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td style=&quot;font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal;&quot; class=&quot;tg-yw4l&quot;&gt;Store?&lt;/td&gt;&lt;td style=&quot;font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal;&quot; class=&quot;tg-yw4l&quot;&gt;"+store+"&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td style=&quot;font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal;&quot; class=&quot;tg-yw4l&quot;&gt;Products&lt;/td&gt;&lt;td style=&quot;font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal;&quot; class=&quot;tg-yw4l&quot;&gt;"+five+"&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td style=&quot;font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal;&quot; class=&quot;tg-yw4l&quot;&gt;Option Sets&lt;/td&gt;&lt;td style=&quot;font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal;&quot; class=&quot;tg-yw4l&quot;&gt;"+six+"&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;";
}


// ============================================
//     Conditional Accordion Functionality
// ============================================
function openAccordion(){
	if ($('#storeYes').parent().hasClass('active')) {
		$('#storeChildren').collapse('show');
		$('#storeChildren').addClass("in");
	} else if ($('#storeNo').parent().hasClass('active')) {
		$('#storeChildren').collapse('hide');
		$('#storeChildren').removeClass("in");
	} else{
		$('#storeChildren').collapse('hide');
	};
}