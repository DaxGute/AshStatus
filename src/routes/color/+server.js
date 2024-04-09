import { env } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function POST({ request, params, url }) {
    let requestJSON = await request.json();
    env.COLOR = requestJSON.value;
    return json("ok")
}

export async function GET() {
    return json({"value": env.COLOR})
}