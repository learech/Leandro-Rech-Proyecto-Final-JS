const getData = async () => {
    try {
        const response = await fetch("../src/data/data.json");
        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Hubo un error', error)
    }
}

export { getData }