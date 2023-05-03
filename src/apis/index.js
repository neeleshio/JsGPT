export const queryIndex = async (query) => {
    const response = await fetch(`http://localhost:5601/query?text=${query}`);
    if (!response.ok) {
        return { text: 'Error in query', sources: [] };
    }

    const queryResponse = await response.json();

    return queryResponse;
};
