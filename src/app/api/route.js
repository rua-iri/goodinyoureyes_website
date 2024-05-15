

export const dynamic = 'force-dynamic' // defaults to auto


export async function GET(request) {

    return new Response(
        JSON.stringify({"hello": "world"}),
        {
            status: 200,
        }
    )
}
