var t = 30, score = 0;
var answers = [1, 1, 1, 4, 4];
var clock;
function start() {
    $('.intro').attr('style', 'display: none');
    clock = setInterval(tick, 1000);
}

function tick() {
    if (t > 0) {
        t--;
        $('#time').html(t);
    }
    else {
        end();
    }
}

function end() {
    clearInterval(clock);
    for (var i = 0; i < answers.length; i++) {
        var answer = $("select:eq(" + i + ") option:selected").attr('value');
        console.log(answer);
        if (answer == answers[i]) {
            score++;
        }
    }
    $('#score').html(score);
    $('.trivia').attr('style', 'display:none');
}