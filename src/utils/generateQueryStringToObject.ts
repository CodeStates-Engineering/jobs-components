export interface QueryStringObject {
  [key: string]: string | string[] | undefined;
}

export const generateQueryStringToObject = (queryString?: string) => {
  let query: QueryStringObject = {};
  if (queryString) {
    const queryStringSet = queryString.replace('?', '').split('&');
    query = Object.fromEntries(
      queryStringSet.map((queryString) => queryString.split('=')),
    );
  }
  return query;
};
