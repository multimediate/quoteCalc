// ============================================
//  	 Check Multiple Choice Questions
//			1. Add value="XXX" to input
//			2. Add onclick="startCalc(); to input
// ============================================
var radioTotal = 0;

$('.radio-inline').click(function(){
	
	var Total = 0;
	
	$('.option:checked').each(function() {
		Total += parseInt($(this).val());
	});

	radioTotal = Total;
});


// ============================================
//  	    Main Calculation Function
//			Based on 90 average initial build of 8 page site
// ============================================

// Initialize Variables
var baseline = 15; //Initial Setup of 15 minutes
// var one = document.quoteForm.firstBox.value;
// var two = document.quoteForm.secondBox.value;
// var three = document.quoteForm.thirdBox.value;
// var four = document.quoteForm.fourthBox.value;
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
	if ($('#collapseOne').hasClass("in")) {

		// Locu Products
		one = $("input[name=ssFirstBox]").val();
			oneMult = 1;
		
		// Words
		two = $("input[name=ssSecondBox]").val();
			twoMult = 0.005625; // 2000 words
		
		// Images and Videos
		three = $("input[name=ssThirdBox]").val();
			threeMult = 0.2222222222222222;

		// External Links
		four = $("input[name=ssFourthBox]").val();
			fourMult = 0.5; // 30 seconds per link
		
		// Anchor Links
		five = $("input[name=ssFifthBox]").val();
			fiveMult = 0.5; // 30 seconds per link

		// Embedded Elements
		six = $("input[name=ssSixthBox]").val();
			sixMult = 1; // 1 minute per embed

	} else if ($('#collapseTwo').hasClass("in")) {
		//Insert Website Variables here
	} else if ($('#collapseThree').hasClass("in")) {
		//Insert Web Store Variables here
	} else {
		// Reset Variables
		one = 0;
		two = 0;
		three = 0;
		four = 0;
		five = 0;
		six = 0;
		seven = 0;
	};


	// Calculate Total
	document.getElementById('total').innerHTML = 
		Math.ceil (
		baseline +
		(one * oneMult) + 
		(two * twoMult) + 
		(three * threeMult) + 
		(four * fourMult) +
		(five * fiveMult) + 
		(six * sixMult) +
		+ radioTotal
		);
}


function stopCalc(){
	clearInterval(interval);
}