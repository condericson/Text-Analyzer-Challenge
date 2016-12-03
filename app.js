// Total word count of the submitted text
		function totalWordCount(text) {
			document.getElementById("js-wordcount").innerHTML = text.split(' ').length;
		}

// Unique word count of the submitted text
		function uniqueWordCount(text) {
			var wordCount = [];
			text = text.split(' ');
			for (var i = 0; i < text.length; i++) {
				if (wordCount.indexOf(text[i]) == -1) {
					wordCount.push(text[i]);
				}
			}
			return wordCount.length;
		}


// Average word length in characters of the submitted text
		function averageWordLength(text) {
			var sum = 0;
			text = text.split(' ');
			for (var j = 0; j < text.length; j++) {
				sum = sum + text[j].length;
			}
			var avgWordLength = sum/text.length;
			return avgWordLength;
		}

// Average sentence length in characters of the submitted text
		function averageSentenceLength(text) {
			var sentenceArray = text.split('.');
			var sum = 0;
			for (var k = 0; k < sentenceArray.length; k++) {
				sum = sum + sentenceArray[k].length;
			}
			var avgSentenceLength = sum/sentenceArray.length;
			return avgSentenceLength;
			// print  in "js-avgsentencelength"
		}


 
$(document).ready(function(){

	

		

$("form").submit(function(event) {
event.preventDefault();

var userInput = $('.js-textarea').val();


		//removes hidden feature of all results
		$("textresults").removeClass("hidden"); //this isn't working 


		
		totalWordCount(userInput);
		$('#js-uniquecount').html(uniqueWordCount(userInput));
		$('#js-avgwordlength').html(averageWordLength(userInput));
		$('#js-avgsentencelength').html(averageSentenceLength(userInput));
	});
});
	





