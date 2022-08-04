export default async function getTimeSlots() {
    const response = await fetch('https://pdl-api.azurewebsites.net/api/get-time-slots');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    return clientPrincipal;
}

