export default function removeParticipant(selected, userEmail) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    console.log("this is selectedId " + selected);
    console.log("this is userEmail " +userEmail );

    const raw = JSON.stringify({
        "id": selected,
        "name": userEmail
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://pdl-api.azurewebsites.net/api/remove-participant", requestOptions)
        .then((result) => {
            if (!result.ok) {
                throw new Error("Tiden är fullbokad!");
            }
            return result;
        })
        .then((response) => response.text())

        .catch((error) => console.log("error", error));
}