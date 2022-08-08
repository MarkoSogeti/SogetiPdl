export default function addParticipant(selected, userEmail) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  console.log("this is selectedId " + selected);

  const raw = JSON.stringify({
    id: selected,
    name: userEmail,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    "https://pdl-api.azurewebsites.net/api/add-participant",
    requestOptions
  )
    .then((result) => {
      if (!result.ok) {
        throw new Error("Tiden är fullbokad!");
      }
      return result;
    })
    .then((response) => response.text())
}
