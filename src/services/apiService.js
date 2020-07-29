export const getApi = async (url) => {
    let resp = await fetch(url);
    let data = await JSON().resp;
    return data;
}