export const searchByName = (listData, searchValue) => {
  if (searchValue.length > 0) {
    const searchResult = listData.filter(item => item.name.toLocaleLowerCase().match(searchValue.toLowerCase()));
    return searchResult;
  } else {
    return listData;
  }
};
export const getRoute = pathname => {
  const str = pathname.split("/");
  return `/${str[1]}`;
};