const API_KEY = "0b1badcb-938c-4d13-b774-da862c494f91";
export function getNewsCategoriesEndpoint(
  category,
  pageNumber = 1,
  pageSize = 20
) {
  const queryParams = `api-key=${API_KEY}&section=${category}&show-fields=all&page-size=${pageSize}&page=${pageNumber}`;
  return `https://content.guardianapis.com/search?${queryParams}`;
}

export function getNewsDetailsEndpoint(newsId) {
  const queryParams = `api-key=${API_KEY}&show-fields=all`;
  return `https://content.guardianapis.com/${newsId}?${queryParams}`;
}
