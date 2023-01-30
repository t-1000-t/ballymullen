export const getImages = async (query: string, pNum: number) => {
  return await fetch(
    `https://pixabay.com/api/?key=14147963-1172996dfbc4032cf6219bd1a&q=${query}&page=${pNum}&image_type=photo&pretty=true`,
  ).then((res) => res.json())
}

export const getVideos = async (query: string, pNum: number) => {
  return await fetch(
    `https://pixabay.com/api/videos/?key=14147963-1172996dfbc4032cf6219bd1a&q=${query}&page=${pNum}&pretty=true`,
  ).then((res) => res.json())
}
