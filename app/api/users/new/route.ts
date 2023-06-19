import { NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';

import { getApiConfig } from '@/lib/utils';
import { createUserMutation } from '@/graphql/mutation';

export async function POST(request: Request) {
    const { name, email, avatarUrl } = await request.json();
    const { apiUrl, apiKey } = await getApiConfig();

    // if (!name || !email || !avatarUrl) {
    //     return NextResponse.json(
    //         { message: "Invalid project ID or body." },
    //         { status: 400 }
    //     );
    // }

    try {
        const client = new GraphQLClient(apiUrl, {
            headers: {
                'x-api-key': apiKey,
            },
        });

        const mutation = createUserMutation(name, email, avatarUrl);
        const data = await client.request(mutation);

        return NextResponse.json(data, { status: 200 });

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "Failed to create the user" },
            { status: 500 }
        );
    }
}