import { NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';

import { getApiConfig } from '@/lib/utils';
import { getProjectByIdQuery } from '@/graphql/query';
import { deleteProjectMutation, updateProjectMutation } from '@/graphql/mutation';

type Params = {
    params: {
        id: string;
    };
};

export async function GET(request: Request, { params }: Params) {
    const { id } = params
    const { apiUrl, apiKey } = await getApiConfig();

    // if (!id) {
    //     return NextResponse.json(
    //         { message: "Invalid project ID." },
    //         { status: 400 }
    //     );
    // }

    try {
        const client = new GraphQLClient(apiUrl, {
            headers: {
                'x-api-key': apiKey,
            },
        });

        const mutation = getProjectByIdQuery(id);
        const data = await client.request(mutation);

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "Failed to fetch project details." },
            { status: 500 }
        );
    }
}

export async function PUT(request: Request, { params }: Params) {
    const { form } = await request.json();
    const { id } = params

    const { apiUrl, apiKey } = await getApiConfig();

    // if (!id) {
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

        const mutation = updateProjectMutation(form, id);
        const data = await client.request(mutation);

        return NextResponse.json(data, { status: 200 });

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "Failed to update project details." },
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request, { params }: Params) {
    const { id } = params
    const { apiUrl, apiKey } = await getApiConfig();

    // if (!id) {
    //     return NextResponse.json(
    //         { message: "Invalid project ID." },
    //         { status: 400 }
    //     );
    // }

    try {
        const client = new GraphQLClient(apiUrl, {
            headers: {
                'x-api-key': apiKey,
            },
        });

        const mutation = deleteProjectMutation(id);
        const data = await client.request(mutation);

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "Failed to delete project." },
            { status: 500 }
        );
    }
}
