import { getColor, setColor } from '../../lib/color.js';
import { json } from '@sveltejs/kit';

export async function POST({ request, params, url }) {
    let requestJSON = await request.json();
    setColor(requestJSON.value);
    return json("ok")
}

export async function GET() {
    return json({"value": getColor()})
}