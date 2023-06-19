import { NextResponse } from "next/server";
import { GraphQLClient } from "graphql-request";

import { getApiConfig } from "@/lib/utils";
import { updateUserMutation } from "@/graphql/mutation";

type Params = {
    params: {
        id: string
    };
};

export async function PUT(request: Request, { params }: Params) {
    const { id } = params
    const { form } = await request.json()

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

        const mutation = updateUserMutation(form, id);
        const data = await client.request(mutation);

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "Failed to update user info" },
            { status: 500 }
        );
    }
}
