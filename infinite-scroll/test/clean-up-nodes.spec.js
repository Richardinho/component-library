describe('cleanUpNodes()', () => {
  it('should..', () => {
    const placeholderHeight = 30;

    const scrollState = {
      firstAttachedItem: 1,
      lastAttachedItem: 3,
    };

    const items = [
      { 
        id: 'a',
        height: placeholderHeight,
        placeholder: true, 
      }, 
      { 
        id: 'b',
        height: placeholderHeight,
        placeholder: true, 
      }, 
      { 
        id: 'c',
        height: 20,
        placeholder: false, 
      }, 
      { 
        id: 'd',
        height: 30,
        placeholder: false, 
      }, 
      { 
        id: 'e',
        height: 23,
        placeholder: false, 
      }, 
    ];

    expect(getUnusedNodes(scrollState, items)).toEqual([
      { 
        id: 'a',
        height: placeholderHeight,
        placeholder: true, 
      }, 
      { 
        id: 'e',
        height: 23,
        placeholder: false, 
      }, 
    ]);
  });
});
