export const queryIndex = async (query) => {
    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/query?text=${query}`);
    if (!response.ok) {
        return { text: 'Error in query', sources: [] };
    }

    const queryResponse = await response.json();

    return queryResponse;
};
