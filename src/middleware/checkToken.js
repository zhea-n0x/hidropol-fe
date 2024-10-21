export default async function checkToken(token) {
    const payload = token.split(".")[1];
    const decodedJson = Buffer.from(payload, "base64").toString();
    const decoded = JSON.parse(decodedJson);
    const expiration = decoded.exp;
    const isExpired = Date.now() >= expiration * 1000;

    return isExpired;
}