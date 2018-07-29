/*
 *  
 *  creates an object with data allowing the construction of the scroller.
 *
 *  Takes the form:
 *
 *  {
 *    topAnchor: {
 *      index: <positive-integer>,
 *      offset: <positive-or-negative-integer>,
 *    },
 *    bottomAnchor: {
 *      index: <positive integer>,
 *      offset: <positive-or-negative-integer>,
 *    },
 *    firstAttachedItem: <positive-integer>,
 *    lastAttachedItem: <positive-integer>,
 *  }
 *
 */

function createListPageScrollState() {
  return {
    topAnchor: {},
    bottomAnchor: {},
    firstAttachedItem: 0,
    lastAttachedItem: 0,
  };
}
