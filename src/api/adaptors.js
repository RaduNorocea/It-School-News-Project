export function getNewsList(apiResponse) {
  if (!apiResponse || !apiResponse.response) {
    return [];
  }
  let rawNewsList = apiResponse.response.results;
  let adaptedNewsList = rawNewsList.map((news) => {
    return {
      id: news.id,
      thumbnail: news.fields.thumbnail,
      title: news.fields.headline,
      description: news.fields.trailText,
    };
  });
  return adaptedNewsList;
}

export function getNewsDetails(apiResponse) {
  if (!apiResponse || !apiResponse.response) {
    return [];
  }

  let rawNewsDetails = apiResponse.response.content;
  let adaptedNewsDetails = {
    date: rawNewsDetails.webPublicationDate,
    title: rawNewsDetails.fields.headline,
    description: rawNewsDetails.fields.trailText,
    image: rawNewsDetails.fields.main,
    content: rawNewsDetails.fields.body,
    author: rawNewsDetails.fields.byline,
    thumbnail: rawNewsDetails.fields.thumbnail,
  };

  return adaptedNewsDetails;
}
