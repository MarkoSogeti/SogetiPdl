export default function addParticipant(selected) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    console.log("this is selectedId " + selected);

    const raw = JSON.stringify({
        "id": selected,
        "name": "Janneeee3"
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://pdl-api.azurewebsites.net/api/add-participant", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
