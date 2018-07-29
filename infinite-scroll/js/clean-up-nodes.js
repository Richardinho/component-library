/*
 *  iterate through items.
 *
 *  if item is 'active', ignore.
 *  otherwise, remove from DOM.

 *  If placeholder, put in placeholder cache
 */

function cleanUpNodes(scrollState, items) {
  const unusedNodes = getUnusedNodes(scrollState, items);

  for(let i = 0; i < unusedNodes.length; i++) {
    const node = unusedNodes[i];

    if(node.placeholder) {
      //  put into placeholder cache
    }
    //  remove node from dom
  }
}

function getUnusedNodes(scrollState, items) {
  const result = [];

  for(let i = 0; i < items.length; i++) {
    if (i == scrollState.firstAttachedItem) {
      i = scrollState.lastAttachedItem;
      continue;
    }
    result.push(items[i]);
  }

  return result;
}
