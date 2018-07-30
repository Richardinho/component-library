describe('createItemsArray()', () => {

  it('should return array of items the same length as total results', () => {
    const totalResults = 10;

    const results = [
      { name: 'Alice' }, 
      { name: 'Bob' },
      { name: 'Chris' },
    ];

    const index = 3;

    const array = createItemsArray(results, totalResults, 3);

    expect(array.length).toBe(totalResults);
  
    expect(array).toEqual([
      undefined,
      undefined,
      undefined,
      { name: 'Alice' }, 
      { name: 'Bob' },
      { name: 'Chris' },
      undefined,
      undefined,
      undefined,
      undefined,
    ]); 
  });
});
