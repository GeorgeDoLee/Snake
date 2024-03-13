import { direction, oposite } from '../utilities/Direction';

const GameController = ({snake, setSnake}) => {
    const snakeHead = snake[0];

    const onKeyDown = ({code}) => {
        if(snakeHead.direction === direction[code] || snakeHead.direction === oposite[code]){
            return;
        } else if(direction[code]) {
            snakeHead.setDirection(direction[code]);
            setSnake(prevSnake => [snakeHead, ...prevSnake.slice(1)]);
        }
    }

    return (  
        <div>
            <input
                className="absolute top-[-100em]"
                type="text"
                autoFocus
                onBlur={(e) => e.target.focus()}
                onKeyDown={onKeyDown}
            />
        </div>
    );
}
 
export default GameController
