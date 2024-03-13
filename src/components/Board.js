import { useEffect, useState } from "react";
import { buildBoard, placeApple, updateBoard } from "../utilities/Board";
import SingleCell from "./SingleCell";
import GameController from "./GameController";
import { moveSnake, startingSnake } from "../utilities/Snake";

const Board = () => {
    const BOARD_SIZE = {rows: 25, columns: 25};
    const [snake, setSnake] = useState(startingSnake());
    const [board, setBoard] = useState(() => buildBoard(BOARD_SIZE, snake));

    useEffect(() => {
        const id = setInterval(() => {
            const newSnake = moveSnake(snake, board);
            setSnake(newSnake);
            setBoard(prevBoard => {
                    return updateBoard(prevBoard, newSnake);
            });
        }, 100);
        return () => {
            clearInterval(id);
        }
    },);

    return (  
        <>
        <div className='grid items-center justify-center bg-green-700 grid-cols-25 grid-rows-25'>
            {board.rows.map((row, i) => (
                <>
                    {row.map((cell, j) => (
                        <SingleCell cell={cell} />
                    ))}
                </>
            ))}
            
        </div>
        <GameController snake={snake} setSnake={setSnake} />
        </>

    );
}
 
export default Board;