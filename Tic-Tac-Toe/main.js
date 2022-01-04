let turn = 'x';
let title = document.querySelector('.title');
let squares = [];
let n = 'start';

function end(n1, n2, n3) {
    title.innerHTML = `${squares[n1]} winner 🥳`;

    document.getElementById('item' + n1).style.background = 'orchid';
    document.getElementById('item' + n2).style.background = 'orchid';
    document.getElementById('item' + n3).style.background = 'orchid';

    setInterval(function () { title.innerHTML += '.' }, 1000)
    setTimeout(function () { location.reload() }, 4000);
}

function win() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    console.log(squares);
    /* 
    1 = 2 & 2 = 3 & 1 != ''
    4 = 5 & 5 = 6 & 4 != ''
    7 = 8 & 8 = 9 & 7 != ''

    1 = 4 & 4 = 7 & 1 != ''
    2 = 5 & 5 = 8 & 2 != ''
    3 = 6 & 6 = 9 & 3 != ''

    3 = 5 & 5 = 7 & 3 != ''
    1 = 5 & 5 = 9 & 1 != ''
    */
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        console.log('Done');
        end(1, 2, 3);
        n = 'end';
    } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
        console.log('Done');
        end(4, 5, 6);
        n = 'end';
    } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '') {
        console.log('Done');
        end(7, 8, 9);
        n = 'end';
    } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
        console.log('Done');
        end(1, 4, 7);
        n = 'end';
    } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
        console.log('Done');
        end(2, 5, 8);
        n = 'end';
    } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
        console.log('Done');
        end(3, 6, 9);
        n = 'end';
    } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '') {
        console.log('Done');
        end(3, 5, 7);
        n = 'end';
    } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '') {
        console.log('Done');
        end(1, 5, 9);
        n = 'end';
    }
}

function game(id) {
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == '' && n == 'start') {
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O';
    } else if (turn === 'o' && element.innerHTML == '' && n == 'start') {
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X';
    } else if (n == 'end') {
        $('.square').prop('disabled', true);
    } else {

    }
    win();
}