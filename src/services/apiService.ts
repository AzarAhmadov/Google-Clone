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