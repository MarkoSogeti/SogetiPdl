export default function getTimeSlots() {
    return fetch('https://pdl-api.azurewebsites.net/api/get-time-slots').then((res) => res.json())
}



