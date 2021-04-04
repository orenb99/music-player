export default function topFive(list) {
  let viewsArray = list.map((item) => item.views);
  viewsArray.sort((a, b) => b - a);
  viewsArray = viewsArray.slice(0, 5);
  return list.filter((value) => viewsArray.includes(value.views));
}
