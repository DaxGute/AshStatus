import { NOTE } from '../../store.js'
import { json } from '@sveltejs/kit';

export async function POST({ request, params, url }) {
    let requestJSON = await request.json();
    NOTE = requestJSON.value;
    return json("ok")
}

export async function GET() {
    console.log(NOTE)
    return json({"value": NOTE})
}