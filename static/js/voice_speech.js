		var message = document.getElementById('keypad');

        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

        var grammar = '#JSGF V1.0;'

        var recognition = new SpeechRecognition();
        var speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.lang = 'en-US';
        recognition.interimResults = false; //set it to true only if u don't call verify_send function

        recognition.onresult = function(event) {
            var last = event.results.length - 1;
            var command = event.results[last][0].transcript;
			console.log('You said: '+command);
            message.value = command;
            verify_send(message.value);   
        };

        recognition.onspeechend = function() {
            recognition.stop();
        };

        recognition.onerror = function(event) {
            console.log('Error occurred in recognition: ' + event.error);
        }   

        document.querySelector('#microphone').addEventListener('click', function(){
            recognition.start();

        });
		
		function verify_send(text){
			if (text == "" || $.trim(text) == '') {
			return false;
			} else {
				//$(".usrInput").blur();
				setUserResponse(text);
				send(text);
				return false;
			}
		}
			

