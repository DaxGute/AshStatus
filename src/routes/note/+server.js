import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

export async function POST({ request, params, url }) {
    let requestJSON = await request.json();
    env.NOTE = requestJSON.value;
    return json("ok")
}

export async function GET() {
    return json({"value": env.NOTE})
}