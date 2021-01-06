import { useEffect, useState } from "react";
import axios from "axios";




export default () => {
  const [board, setBoard] = useState(null);
  
  
  useEffect(() => {
    getData();
  }, []);
  
  
  const getData = async () => {
    let res = await axios.get(
      "/api/new_game"
    );
    console.log(res);
    setBoard(res.data.data);
  };


  const renderBoard = () => {
    return board.map((category) => {
      return (
        <div>
          <h1>{category.category}</h1>
          {renderCards(category.cards)}
        </div>
      );
    });
  };
  const renderCards = (cards) => {
    return cards.map((card) => {
      return (
        <div>
          <div>{card.question}</div>
          <p>
            {card.aanswer1} {card.answer2}{" "}
          </p>
        </div>
     )})};
     if (!board) return <div>Loading Jeopardy</div>;
     return (
      renderBoard()
     )
      }
 
  

