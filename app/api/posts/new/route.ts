import { NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';

import { getApiConfig } from '@/lib/utils';
import { createProjectMutation } from '@/graphql/mutation';

export async function POST(request: Request) {
    const { form, creatorId } = await request.json();
    const { apiUrl, apiKey } = await getApiConfig();

    try {
        const client = new GraphQLClient(apiUrl, {
            headers: {
                'x-api-key': apiKey,
            },
        });

        const mutation = createProjectMutation(form, creatorId);
        const data = await client.request(mutation);

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "Failed to create a project" },
            { status: 500 }
        );
    }
}