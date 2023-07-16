import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

function MatchRow(props) {
    let [winningPlayerId, setWinningPlayerId] = useState(props.match.winningPlayer);

    useEffect(() => {
        console.log(props.match);
        console.log(winningPlayerId);
    }, [winningPlayerId]);

    const setMatchWinner = (winningPlayerId) => {
        setWinningPlayerId(winningPlayerId);
        console.log(winningPlayerId);
    };

    return (
        <Row className="border">
            <Col xs={1} >
                <Button 
                    disabled={winningPlayerId === props.match.player1.id || props.isRoundActive === false}
                    variant={props.match.isActive === true ? "secondary" : winningPlayerId === props.match.player1.id ? "success" : "danger"} 
                    onClick={() => setMatchWinner(props.match.player1.id)}>
                </Button>
            </Col>
            <Col style={{"textAlign" : "right", "fontSize": "20px"}}>{props.match.player1.name}</Col>
            <Col xs={1} style={{"fontSize": "20px"}}>vs</Col>
            <Col style={{"textAlign" : "left", "fontSize": "20px"}}>{props.match.player2.name}</Col>
            <Col xs={1}>
                <Button 
                    disabled={winningPlayerId === props.match.player2.id || props.isRoundActive === false}
                    variant={props.match.isActive === true ? "secondary" : winningPlayerId === props.match.player2.id ? "success" : "danger"}  
                    onClick={() => setMatchWinner(props.match.player2.id) }>
                </Button>
            </Col>
        </Row>
    );
}

export default MatchRow;