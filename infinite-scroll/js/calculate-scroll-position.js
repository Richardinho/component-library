/*
 *  To find scroll position, start at 'zero' and add the height of all items
 *  up to the current anchor item.
 *
 *  'zero' takes into account any distance between the scroller container and the top of the page, e.g. a header.
 *
 *  Finally, add the offset on.
 *
 */
function calculateNewScrollPosition(anchorItem, items, tombstoneSize, containerTop) {
  let anchorScrollTop = containerTop;

  for (i = 0; i < anchorItem.index; i++) {
    anchorScrollTop += items[i].height || tombstoneSize;
  }

  anchorScrollTop += anchorItem.offset;
  return anchorScrollTop;
}
