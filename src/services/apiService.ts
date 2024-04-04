export const fetchRandomWords = async () => {
    const response = await fetch('https://random-word-api.herokuapp.com/word')
    const data = await response.json()
    if (!data) return
    return data
}