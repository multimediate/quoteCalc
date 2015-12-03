///////////////////////////////////////////////////////////
// ABOUT: Quote Calculator
// CREATED BY: Jacob Wiedmann
// VERSION: 1.2
// COPYRIGHT: GoDaddy Operating Company, LLC All Rights Reserved
////////////////////////////////////////////////////////////


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

//Store form field toggle
// $(document).ready(function(){
// 	$('.productCount').hide();
// 	$('.optionSetCount').hide();

// 	$('.radio-inline').click(function(){
// 		if ($('#storeYes:checked')) {
// 			$('.productCount').show();
// 			$('.optionSetCount').show();
// 		} else {
// 			$('.productCount').hide();
// 			$('.optionSetCount').hide();
// 		};
// 	});
// });

// $(document).ready(function() {
// 	$('.radio-inline').click(function() {
// 		if($("#storeYes.option:checked")  {
// 			$('#storeChildren').show();
// 		} else {
// 			$('#storeChildren').hide();
// 		}
// 	});
// });


// ============================================
//  	    Main Calculation Function
// ============================================

// Initialize Variables
var baseline = 15; //Initial Setup of 15 minutes
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
	one = $("input[name=firstBox]").val();
	oneMult =15;

	two = $("input[name=secondBox]").val();
	twoMult = 4;

	three = $("input[name=thirdBox]").val();
	threeMult = 3;

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