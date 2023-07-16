import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import MatchRow from "./MatchRow";
import { Button, Form } from "react-bootstrap";
import RoundView from "./RoundView";

function Pairings() {

    const tournament = {
      "_id": {
        "$oid": "63c01c0648c51cafedb1e663"
      },
      "isActive": false,
      "rounds": [
        {
          "roundNumber": 1,
          "isActive": false,
          "matches": [
            {
              "player1": {
                "name": "Ian Thorn",
                "isDropped": false,
                "id": "1"
              },
              "player2": {
                "name": "Paul Grant",
                "isDropped": false,
                "id": "2"
              },
              "winningPlayer": "2",
              "isActive": false,
              "id": "1"
            },
            {
              "player1": {
                "name": "Jasmine Brown",
                "isDropped": false,
                "id": "3"
              },
              "player2": {
                "name": "Daniel Green",
                "isDropped": false,
                "id": "4"
              },
              "winningPlayer": "3",
              "isActive": false,
              "id": "2"
            },
            {
              "player1": {
                "name": "Edward Sampson",
                "isDropped": false,
                "id": "5"
              },
              "player2": {
                "name": "Patricia Evans",
                "isDropped": false,
                "id": "6"
              },
              "winningPlayer": "5",
              "isActive": false,
              "id": "3"
            },
            {
              "player1": {
                "name": "Alan Patterson",
                "isDropped": false,
                "id": "7"
              },
              "player2": {
                "name": "David Richardson",
                "isDropped": false,
                "id": "8"
              },
              "winningPlayer": "8",
              "isActive": false,
              "id": "4"
            },
            {
              "player1": {
                "name": "Linda Brown",
                "isDropped": false,
                "id": "9"
              },
              "player2": {
                "name": "Thomas Bunton",
                "isDropped": false,
                "id": "10"
              },
              "winningPlayer": "9",
              "isActive": false,
              "id": "5"
            }
          ],
          "id": "01284912"
        },
        {
          "roundNumber": 2,
          "isActive": true,
          "matches": [
            {
              "player1": {
                "name": "Jasmine Brown",
                "isDropped": false,
                "id": "3"
              },
              "player2": {
                "name": "Paul Grant",
                "isDropped": false,
                "id": "2"
              },
              "winningPlayer": null,
              "isActive": true,
              "id": "1"
            },
            {
              "player1": {
                "name": "Ian Thorn",
                "isDropped": false,
                "id": "1"
              },
              "player2": {
                "name": "Daniel Green",
                "isDropped": false,
                "id": "4"
              },
              "winningPlayer": null,
              "isActive": true,
              "id": "2"
            },
            {
              "player1": {
                "name": "Alan Patterson",
                "isDropped": false,
                "id": "7"
              },
              "player2": {
                "name": "Patricia Evans",
                "isDropped": false,
                "id": "6"
              },
              "winningPlayer": null,
              "isActive": true,
              "id": "3"
            },
            {
              "player1": {
                "name": "Edward Sampson",
                "isDropped": false,
                "id": "5"
              },
              "player2": {
                "name": "Linda Brown",
                "isDropped": false,
                "id": "9"
              },
              "winningPlayer": null,
              "isActive": true,
              "id": "4"
            },
            {
              "player1": {
                "name": "David Richardson",
                "isDropped": false,
                "id": "8"
              },
              "player2": {
                "name": "Thomas Bunton",
                "isDropped": false,
                "id": "10"
              },
              "winningPlayer": null,
              "isActive": true,
              "id": "5"
            }
          ],
          "id": "01284913"
        }
      ],
      "roundCount": 2
    };

    const [roundId, setRoundId] = useState('01284912');

    const styling = {
      "width": "80%"
    };

    const handleSelectChange = (event) => {
      setRoundId(event.target.value);
    }

    useEffect(() => {
      console.log(roundId);
    }, [roundId]);

    return (
      <Container>
        <h3>Pairings</h3>
        <Container style={styling}>
          <Form.Select
            value={roundId} 
            onChange={handleSelectChange}>
            {
              /*rounds.map((roundObj) => {
                <option value={roundObj.roundId}>Round {roundObj.roundNumber}</option>
              })*/
            }
            <option value={"01284912"}>Round 1</option>
            <option value={"01284913"}>Round 2</option>
          </Form.Select>
          <br/>
          <RoundView roundId={roundId}></RoundView>
          <div style={{'marginTop': '10px'}}>
            <Button 
                disabled={round.isActive === false}
                onClick={handleCompleteRound}>
                Complete Round
            </Button>
          </div>
        </Container>
      </Container>
    );
}

export default Pairings;