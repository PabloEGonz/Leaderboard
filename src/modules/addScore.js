const addScore = async (file, data) => {
    const responses = await fetch(file, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return responses.json();
};

export default addScore;