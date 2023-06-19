import { NextResponse } from "next/server";
import { GraphQLClient } from "graphql-request";

import { getApiConfig } from "@/lib/utils";
import { getProjectsQuery } from "@/graphql/query";

export async function POST(request: Request) {
    const { search, category, cursor } = await request.json()
    const { apiUrl, apiKey } = await getApiConfig();

    try {
        const client = new GraphQLClient(apiUrl, {
            headers: {
                'x-api-key': apiKey,
            },
        });

        const mutation = getProjectsQuery(search, category, cursor);
        const data = await client.request(mutation);

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "Failed to fetch projects" },
            { status: 500 }
        );
    }
}