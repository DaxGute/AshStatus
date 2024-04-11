import { getNote, setNote } from '../../lib/note.js';
import { json } from '@sveltejs/kit';

export async function POST({ request, params, url }) {
    let requestJSON = await request.json();
    setNote(requestJSON.value);
    return json("ok")
}

export async function GET() {
    return json({"value": getNote()})
}