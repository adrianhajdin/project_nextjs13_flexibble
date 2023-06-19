export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);

    // Set the specified search parameter to the given value
    searchParams.set(type, value);
    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
};

export function isBase64DataURL(value: string) {
    const base64Regex = /^data:image\/[a-z]+;base64,/;
    return base64Regex.test(value);
}

export async function getApiConfig() {
    const isProduction = process.env.NODE_ENV === 'production';
    const apiUrl = isProduction ? process.env.GRAFBASE_API_URL || '' : 'http://127.0.0.1:4000/graphql';
    const apiKey = isProduction ? process.env.GRAFBASE_API_KEY || '' : 'letmein';

    console.log('Connected to API: ', apiUrl);

    return { apiUrl, apiKey };
}