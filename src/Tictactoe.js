import {useState} from "react"

export function Tictactoe() {
  const [board,setBoard] = useState([
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null
]);
const [isxturn,setisxturn]= useState(true);
  const handClick = (index) => {
    console.log(index);
    if(!winner && board[index] === null){
      const boardCopy = [...board];
      boardCopy[index] = isxturn? "x":"o";
      setBoard(boardCopy);
      setisxturn(!isxturn);
}
    };

  const designwinner = (board) => {
const  lines=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
for (let i = 0; i < lines.length; i++) {
  const [a,b,c] = lines[i];
 if( board[a] != null && board[a] === board[b] && board[b] === board[c]){
  console.log("winner",board[a] );
  return board[a];
}
 }
 return null;
  };

  const winner =designwinner(board);
  return (
    <div className="tic-tac-toe">
     
      <h1>Tic Tac Toe Game</h1>
      <div className="board">
      {board.map((val,index) => (
        <GameBox  key={index} val={val} onPlayerClick={() => handClick(index)}/>
     ))}
     </div>
     <h2> The winner is { winner}</h2>
  </div>
  );
      }

 export function GameBox({val, onPlayerClick}){
  
  const styles={
    color:  val === "x" ? "green": "red",
  };
  return(
    <div style={styles} onClick={ onPlayerClick} className="game-box">
      {/* <style ={style} onClick={onPlayerClick} className="game-box"> */}
      {val}
       </div>
    );
}

