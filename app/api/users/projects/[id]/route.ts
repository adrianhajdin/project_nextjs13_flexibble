import { NextResponse } from "next/server";
import { GraphQLClient } from "graphql-request";

import { getApiConfig } from "@/lib/utils";
import { getProjectsOfUserQuery } from "@/graphql/query";

type Params = {
    params: {
        id: string
    };
};

export async function POST(request: Request, { params }: Params) {
    const { id } = params
    const { last, cursor } = await request.json()

    // if (!id) {
    //     return NextResponse.json(
    //         { message: "Invalid project ID." },
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

        const mutation = getProjectsOfUserQuery(id, last, cursor);
        const data = await client.request(mutation);

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "Failed to fetch user projects" },
            { status: 500 }
        );
    }
}