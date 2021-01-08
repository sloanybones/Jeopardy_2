import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Reveal, Modal, Button } from 'semantic-ui-react'




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
    justifyContent: "center", 
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
       
          <h1 style= {flex}>{category.category}</h1>
          {renderCards(category.cards)}
          
        </div>
      );
    });
  };
  const renderCards = (cards) => {
    return cards.map((card) => {
      return (
        <div>
          <Modal
         
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button>
       <Reveal animated='move up'>
      <Reveal.Content visible>
      <Card style= {styleCardFront}>{card.points} </Card>
      </Reveal.Content>
      <Reveal.Content hidden>
      <Card style= {styleCard}>
      
        {card.question}
        
        
      </Card>
      </Reveal.Content>
    </Reveal>
    </Button>}
    >
      <Modal.Header>{card.question}</Modal.Header>
      <Modal.Content>
      A {card.answer1}
      <br/> 
      B {card.answer2}
      <br/>
      C {card.answer3}
      <br/>
      D {card.correct_answer}{" "}
      <br/>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
        {card.answer1}
        </Button>
        <Button color='black' onClick={() => setOpen(false)}>
        {card.answer2}
        </Button>
        <Button color='black' onClick={() => setOpen(false)}>
        {card.answer3}
        </Button>
        <Button color='black' onClick={() => setOpen(false)}>
        {card.correct_answer}
        </Button>
      
      </Modal.Actions>
        
      
    </Modal>
  
        </div>
     )})};
     if (!board) return <div>Loading Jeopardy</div>;
     else return (
       <div style= {flex}>
      {renderBoard()}
      </div>
     )
     }
 
  
     