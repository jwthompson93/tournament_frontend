import { Button, Container } from "react-bootstrap";
import MatchRow from "./MatchRow";
import { useEffect, useState } from "react";

function RoundView(props) {
    const rounds = [
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
      ];

    const [round, setRound] = useState();


    const areMatchesActiveInRound = () => {
        let isActive = round.matches.some((match) => match.isActive === true);
        console.log(isActive);
        return isActive;
    }

    const handleCompleteRound = () => {
      setRound({...round, isActive: false});
    }

    const findRound = (id) => {
        console.log(props.roundId);
        console.log(rounds);
        let tempRound = rounds.find(itRound => { 
          return itRound.id === id;
        });
        console.log(tempRound);
        return tempRound;
      }

    useEffect(() => {
        console.log(rounds);
        setRound(findRound(props.roundId));
    }, []);

    return (
        <Container>
            {
                round && round.matches?.map((match) =>  ( 
                    <MatchRow key={match.id} match={match} isRoundActive={round.isActive}></MatchRow>
                ))
            }
        </Container>
    )
}

export default RoundView;