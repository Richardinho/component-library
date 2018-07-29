describe('calculateScrollPosition()', () => {
  it ('should calculate scroll position', () => {
    const anchorItem = {
      index: 2,
      offset: 4,
    };

    const tombstoneSize = 10;
    const containerTop = 5;

    const items = [
      { height: 7 },
      { height: 4 },
      { height: 6 },
      { height: 7 },
    ];

    expect(calculateNewScrollPosition(
      anchorItem,
      items,
      tombstoneSize,
      containerTop)).toBe(20); 
  });
});
