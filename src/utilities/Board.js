import { defaultCell } from "../utilities/Cell";

export const placeSnake = (board, snake) => {
    for(let i = 0; i < snake.length; i++){
        const { x, y } = snake[i].position;
        board[x][y] = {
            className: 'snake',
            occupied: true
        }
    }

    return board;
}

export const placeApple = (board, BOARD_SIZE) => {
    let x = Math.floor(Math.random() * BOARD_SIZE.rows);
    let y = Math.floor(Math.random() * BOARD_SIZE.columns);

    while(board[x][y].occupied){
        x = Math.floor(Math.random() * BOARD_SIZE.rows);
        y = Math.floor(Math.random() * BOARD_SIZE.columns);
    }
    
    board[x][y].className = 'apple';

    return board;
}


export const buildBoard = (BOARD_SIZE, snake) => {
    const {rows, columns} = BOARD_SIZE;
    let builtRows = Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => ({ ...defaultCell }))
    );

    builtRows = placeSnake(builtRows, snake);
    builtRows = placeApple(builtRows, BOARD_SIZE);
    
    return {
        rows: builtRows,
        size: { rows, columns }
    };
};

export const updateBoard = (board, snake) => {
    let applePresent = false;
    let newBoard = board.rows.map(row => {
        return row.map(cell => {
            if (cell.className === 'snake') {
                return { ...defaultCell };
            } else if(cell.className === 'apple'){
                applePresent = true;
            }
            return cell;
        });
    });
    
    newBoard = placeSnake(newBoard, snake);
    if(!applePresent){
        newBoard = placeApple(newBoard, board.size);
    }
    
    return {
        ...board,
        rows: newBoard
    }
}



