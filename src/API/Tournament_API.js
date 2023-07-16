import axios from "axios";

export async function getTournamentById(id) {
    await axios.get("https://localhost:7088/api/tournament/" + id)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}

export async function getTournamentNumber(id, roundNumber) {
    const response = await fetch("https://localhost:7088/api/tournament/" + id + "/round/" + roundNumber);
    let responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
}