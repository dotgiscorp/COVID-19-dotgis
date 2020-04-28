const fetchData = async endpoint => {
    const promise = await fetch(endpoint);

    return promise;
};

export default fetchData;
