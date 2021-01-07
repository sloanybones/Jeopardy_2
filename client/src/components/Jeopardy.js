import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Reveal, Grid } from 'semantic-ui-react'




export default () => {
  const [board, setBoard] = useState(null);
  const [open, setOpen] = useState(false);
  
  
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

  const styleCard = {
    fontSize: 20,
    color: "black",
    textAlign: "center",
    width: 230,
    height: 200,
    whiteSpace: "pre-line",
   }

const styleCardFront = {
  fontSize: 40,
  color: "black",
  textAlign: "center",
  width: 230,
  height: 200,
  backgroundColor: "#46D2F0",
  justifyContent: "center", 
  }

const flex = {
  display:"flex",
  justifyContent: "space-around", 
  }

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
        
      <Reveal animated='move up'>
      <Reveal.Content visible>
      <Card style= {styleCardFront}>{card.points} </Card>
      </Reveal.Content>
      <Reveal.Content hidden>
      <Card style= {styleCard}>
      <br/>
        {card.question}
        <br/>
        <br/>
      A) {card.answer1}
      <br/> 
      B) {card.answer2}
      <br/>
      C) {card.answer3}
      <br/>
      D) {card.correct_answer}{" "}
      <br/>
      </Card>
      </Reveal.Content>
    </Reveal>
    
  
        </div>
     )})};
     if (!board) return <div>Loading Jeopardy</div>;
     return (
       <div style= {flex}>
      {renderBoard()}
      </div>
     )
      }
 
  
     