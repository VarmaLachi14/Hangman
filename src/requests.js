const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200){
        const response1 = await response.json()
        return response1.puzzle
    }else{
        throw new Error('Unable to get the Puzzle')
    }
}

export { getPuzzle as default }