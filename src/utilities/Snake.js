import { SnakeCell, SnakeHead } from './SnakeCell';

export const startingSnake = () => {
    let snake = [new SnakeHead({x: 5, y: 3}, 'right')];
    for(let i = 2; i > 0; i--){
        snake.push(new SnakeCell({x: 5, y: i}));
    }
    return snake;
}


export const moveSnake = (snake, board) => {
    const { x: currentX, y: currentY} = snake[0].position;
    let nextPosition;

    switch(snake[0].direction){
        case 'up':
            nextPosition = { x: currentX - 1, y: currentY};
            break;
        case 'down':
            nextPosition = { x: currentX + 1, y: currentY};
            break;
        case 'right':
            nextPosition = { x: currentX, y: currentY + 1};
            break;
        case 'left':
            nextPosition = { x: currentX, y: currentY - 1};
            break;
    }

    if(nextPosition.x > board.size.rows - 1 || nextPosition.x < 0 || nextPosition.y > board.size.columns - 1 || nextPosition.y < 0){
        // game over
        return snake;
    } else if(board.rows[nextPosition.x][nextPosition.y].occupied){
        return snake;
    }


    if(!(board.rows[nextPosition.x][nextPosition.y].className === 'apple')){
        snake.pop();
    }

    snake.unshift(new SnakeHead(nextPosition, snake[0].direction));

    return snake;
}