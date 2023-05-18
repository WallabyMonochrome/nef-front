import axios from "axios";

export async function GET(request, context) {
    const backendUrl = process.env.BACKEND_URL;
    const nefturianId = context?.params?.nefturianId;
    try {
        const nefturian = (await axios.get(`${backendUrl}/nft/${nefturianId}`)).data;
        return new Response(JSON.stringify(nefturian), {
            status: 200,
        });
    } catch (e) {
        console.error("Error while getting Nefturian", e);
        return new Response("Error while getting nefturian", {
            status: 400,
        });
    }
}