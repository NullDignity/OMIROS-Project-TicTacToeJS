'use strict';

let slots = [
    '', '', '', // 0, 1, 2
    '', '', '', // 3, 4, 5
    '', '', ''  // 6, 7, 8
];

function checkWin(playerSymbol) {
    // Rows
    if (slots[0] === playerSymbol && slots[1] === playerSymbol && slots[2] === playerSymbol)
        return true;
    if (slots[3] === playerSymbol && slots[4] === playerSymbol && slots[5] === playerSymbol)
        return true;
    if (slots[6] === playerSymbol && slots[7] === playerSymbol && slots[8] === playerSymbol)
        return true;

    // Columns
    if (slots[0] === playerSymbol && slots[3] === playerSymbol && slots[6] === playerSymbol)
        return true;
    if (slots[1] === playerSymbol && slots[4] === playerSymbol && slots[7] === playerSymbol)
        return true;
    if (slots[2] === playerSymbol && slots[5] === playerSymbol && slots[8] === playerSymbol)
        return true;


    // Diagonally
    if (slots[0] === playerSymbol && slots[4] === playerSymbol && slots[8] === playerSymbol)
        return true;
    if (slots[2] === playerSymbol && slots[4] === playerSymbol && slots[6] === playerSymbol)
        return true;

    return false;
}

$(document).ready(function() {

    // ❌ = 0, ⭕ = 1
    let player = 0;
    let winner = -1;
    // 1 ~ 9
    let turn = 1;
    let game_over = false;

    $('#turn_message').text("Turn 1");
    $('#player_message').text("Player X's Turn");

    $('.gameBox').click(function() {
        const index = $('.gameBox').index(this);

        // When a button is pressed
        if ($(this).text() == '') {
            if (player == 0) {
                $(this).text('❌');
                slots[index] = '❌';
            } else {
                $(this).text('⭕');
                slots[index] = '⭕';
            }

            // Checking for Win Conditions
            if (player == 0)
                game_over = checkWin('❌')
            else
                game_over = checkWin('⭕')

            if (game_over)
                $('.gameBox').attr('disabled', true);
            else {
                turn++;

                if (player == 0)
                    player++;
                else
                    player--;

                $('#turn_message').text("Turn " + turn);
                if (player == 0)
                    $('#player_message').text("Player X's Turn");
                else
                    $('#player_message').text("Player O's Turn");
            }
        }

        // Paragraph Element Change
        $('#turn_message').text("Turn " + turn);
        if (player == 0)
            $('#player_message').text("Player X's Turn");
        else
            $('#player_message').text("Player O's Turn");

        // Win Condition (Draw)
        if (!game_over && turn == 10) {
                $('#turn_message').text("DRAW!");
                $('#player_message').text("Neither player won.");
                $('.gameBox').attr('disabled', true);
            }

        // Win Condition (Victory)
        if (game_over) {
            $('#turn_message').text("GAME OVER!");
            if (player == 0)
                $('#player_message').text("Player X wins!");
            else
                $('#player_message').text("Player O wins!");
        }
    });
});
