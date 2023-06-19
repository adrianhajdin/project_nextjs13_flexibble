import { GraphQLClient } from "graphql-request";
import { NextResponse } from "next/server";

import { getApiConfig } from "@/lib/utils";
import { getUserQuery } from "@/graphql/query";

export async function POST(request: Request) {
    const { email } = await request.json()

    // if (!email) {
    //     return NextResponse.json(
    //         { message: "Invalid email." },
    //         { status: 400 }
    //     );
    // }

    const { apiUrl, apiKey } = await getApiConfig();

    try {
        const client = new GraphQLClient(apiUrl, {
            headers: {
                'x-api-key': apiKey,
            },
        });

        const mutation = getUserQuery(email);
        const data = await client.request(mutation);

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "Failed to fetch user info", },
            { status: 500 }
        );
    }
}