// Fetching random words
export const fetchRandomWords = async () => {
    try {
        const response = await fetch('https://random-word-api.herokuapp.com/word');
        if (!response.ok) {
            throw new Error('Failed to fetch random words');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching random words:', error);
        return null;
    }
};

// Fetching which country the user is in
export const fetchUserCountry = async () => {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        return data.country_name;
    } catch (error) {
        console.error('Error fetching user country:', error);
        throw error;
    }
};

// Fetching google search result
export const fetchSearch = async (lectures: string) => {
    try {
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${lectures}`);
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error fetching user country:', error);
        throw error;
    }
};