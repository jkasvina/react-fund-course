export const getPageCount = (totalPageCount, limit) => {
    return Math.ceil(totalPageCount / limit);
}

export const getPagesArray = (totalPageCount) => {
    let pagesArray = []
    for (let i = 0; i < totalPageCount; i++) {
        pagesArray.push(i+1);
    }
    return pagesArray;
}