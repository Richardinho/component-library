describe('createListPageScrollState()', () => {
  it ('should..', () => {
    expect(createListPageScrollState()).toEqual({
      topAnchor: {},
      bottomAnchor: {},
      firstAttachedItem: 0,
      lastAttachedItem: 0,
    });
  });
});
