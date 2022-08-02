export default async function getUserInfo() {
    const response = await fetch('https://icy-cliff-03f1e8d03.1.azurestaticapps.net/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    return clientPrincipal;
}

