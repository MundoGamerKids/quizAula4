// selecionando todos os elementos necessários
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// quando o botão startQuiz é clicado
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); // mostrar caixa de informações
}

// quando o botão exitQuiz é clicado
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // esconder caixa de informações
}

// quando o botão continueQuiz é clicado
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // esconder caixa de informações
    quiz_box.classList.add("activeQuiz"); // mostrar caixa de quiz
    showQuetions(0); // chamando a função showQestions
    queCounter(1); // passando 1 como parâmetro para queCounter
    startTimer(15); // chamando a função startTimer
    startTimerLine(0); // chamando a função startTimerLine
}

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// quando o botão restartQuiz é clicado
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); // mostrar caixa de quiz
    result_box.classList.remove("activeResult"); // esconder caixa de resultado
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); // chamando a função showQestions
    queCounter(que_numb); // passando que_numb para queCounter
    clearInterval(counter); // limpar contador
    clearInterval(counterLine); // limpar counterLine
    startTimer(timeValue); // chamando a função startTimer
    startTimerLine(widthValue); // chamando a função startTimerLine
    timeText.textContent = "Tempo Restante"; // alterar o texto de timeText para Tempo Restante
    next_btn.classList.remove("show"); // esconder o botão next
}

// quando o botão quitQuiz é clicado
quit_quiz.onclick = () => {
    window.location.reload(); // recarregar a janela atual
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");


next_btn.onclick = () => {
    if (que_count < questions.length - 1) { 
        que_count++; 
        que_numb++; 
        showQuetions(que_count); 
        queCounter(que_numb); r
        clearInterval(counter); 
        clearInterval(counterLine); 
        startTimer(timeValue); 
        startTimerLine(widthValue); 
        timeText.textContent = "Tempo Restante"; 
        next_btn.classList.remove("show"); 
    } else {
        clearInterval(counter); 
        clearInterval(counterLine); 
        showResult(); 
    }
}


function showQuetions(index) {
    const que_text = document.querySelector(".que_text");

    
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 

    const option = option_list.querySelectorAll(".option");

    
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


