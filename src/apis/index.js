export const queryIndex = async (query) => {
    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/query?text=${query}`);
    if (!response.ok) {
        setTimeout(() => {
            return { output: 'Something went wrong. Pls try again.', error: true };
        }, 1000);
    }

    return await response.json();
};
