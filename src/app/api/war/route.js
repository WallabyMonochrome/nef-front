import axios from "axios";

export async function GET(request, context) {
    const backendUrl = process.env.BACKEND_URL;
    try {
        const warRecap = (await axios.get(`${backendUrl}/nft/`)).data;
        console.log("Test", warRecap);
        return new Response(JSON.stringify(warRecap), {
            status: 200,
        });
    } catch (e) {
        console.error("Error while getting war recap", e);
        return new Response("Error while getting war recap", {
            status: 400,
        });
    }
}