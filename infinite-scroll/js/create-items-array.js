function createItemsArray(results, totalResults, index) {

  let array = new Array(totalResults);

  for(let i = 0,j = index; i < results.length; i++,j++) {
    array[j] = results[i];
  }

  return array;
}
