var myQuestions = [
	{
		question: "O que compreende o ciclo de vida das compras publicas",
		answers: {
			a: 'Planejamento, processos de compras, processos homologados, atas de registro de preços, empenhos e acompanhamento de contratos',
			b: 'Ideia, submissão, venda, compra e gerenciamento de empresa e serviço',
			c: 'Formulação, planejamento, submissão de serviço, acordo publico, gerenciamento de metas e estabelecimento de preço'
		},
		correctAnswer: 'a'
	},
	{
		question: "Sobre o que fala o Decreto-Lei nº 200, de 25 De Fevereiro de 1967?",
		answers: {
			a: 'Estabelece normas de vendas publicas',
			b: 'Dispõe sôbre a organização governamental, em esfera pública e privada.',
			c: 'Dispõe sôbre a organização da Administração Federal, estabelece diretrizes para a Reforma Administrativa e dá outras providências.'
		},
		correctAnswer: 'c'
	},
	{
		question: "Qual lei regulamenta o art. 37, inciso XXI, da Constituição Federal, institui normas para licitações e contratos da Administração Pública e dá outras providências.",
		answers: {
			a: 'Lei nº 8.666, de 21 de Junho DE 1993',
			b: 'Lei nº 200, de 25 de Fevereiro de 1967',
			c: 'Lei nº 810, de 6 de Setembro de 1949',
		},
		correctAnswer: 'a'
	},
];

var quizContainer = document.getElementById('quiz');
var resultadosContainer = document.getElementById('resultados');
var submeterButton = document.getElementById('submeter');

generateQuiz(myQuestions, quizContainer, resultadosContainer, submeterButton);

function generateQuiz(questions, quizContainer, resultadosContainer, submeterButton){

	function showQuestions(questions, quizContainer){
		var output = [];
		var answers;

		for(var i=0; i<questions.length; i++){
			
			answers = [];

			for(letter in questions[i].answers){

				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}


	function showresultados(questions, quizContainer, resultadosContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'green';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultadosContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	showQuestions(questions, quizContainer);

	submeterButton.onclick = function(){
		showresultados(questions, quizContainer, resultadosContainer);
	}
}
