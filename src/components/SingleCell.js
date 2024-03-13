
const SingleCell = ({cell}) => {
    let cellClass;
    switch(cell.className){
        case 'apple':
            cellClass = 'bg-red-500 rounded-full';
            break;
        case 'snake': 
            cellClass = 'bg-zinc-300 rounded-md';
            break;
        default:
            cellClass = null;
            break;
    }

    return (  
        <div className={`${cellClass} h-[25px] w-[25px] flex justify-end`}>
            
        </div>
    );
}
 
export default SingleCell;