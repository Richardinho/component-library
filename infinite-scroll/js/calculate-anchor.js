
function calculateAnchor(initialAnchor, scroll, items) {
  if (scroll === 0) {
    return initialAnchor;
  }

  let delta = initialAnchor.offset + scroll; 
  let i = initialAnchor.index;

  if (delta < 0) {
    while (delta < 0 && i > 0) {
      delta += items[i -1].height;
      i--;
    }
  } else {
    while (delta > 0 && items[i].height < delta) {
      delta -= items[i].height;
      i++;
    }
  }

  return {
    index: i,
    offset: delta,
  };
}
  
