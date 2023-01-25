export const getImages = (query: string, pNum: number) => {
  return fetch(
    `https://pixabay.com/api/?key=14147963-1172996dfbc4032cf6219bd1a&q=${query}&page=${pNum}&image_type=photo&pretty=true`,
  ).then((res) => res.json())
}
