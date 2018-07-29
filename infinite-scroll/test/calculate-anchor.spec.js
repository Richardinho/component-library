describe('calculateAnchor()', () => {
  describe('When all items have been reified', () => {
    const items = [
      { height: 5 },  
      { height: 3 },  
      { height: 8 },  
      { height: 9 },  
      { height: 4 },  
    ];
    describe('when scroll is zero', () => {
      it ('should return initial anchor', () => {
        const initialAnchor = {
          index: 3,
          offset: 10,
        };
        expect(calculateAnchor(initialAnchor, 0, items)).toEqual(initialAnchor);  
      }); 
    });

    describe('delta >= 0', () => {
      describe('offset >= 0 AND scroll >= 0', () => {
        it('should calculate new anchor', () => {
          const scroll = 15;

          const initialAnchor = {
            index: 0,
            offset: 4,
          } 

          const result = {
            index: 3,
            offset: 3,
          };

          expect(calculateAnchor(initialAnchor, scroll, items)).toEqual(result);      
        }); 
      }); 

      describe('offset < 0 AND scroll >= 0 AND scroll > offset ', () => {
        it('should calculate new anchor', () => {
          const scroll = 9;

          const initialAnchor = {
            index: 3,
            offset: -2,
          } 

          const result = {
            index: 3,
            offset: 7,
          };

          expect(calculateAnchor(initialAnchor, scroll, items)).toEqual(result);      
        }); 
      }); 

      describe('offset >= 0 AND scroll < 0 AND scroll < offset', () => {
        it('should calculate new anchor', () => {
          const scroll = -1;

          const initialAnchor = {
            index: 3,
            offset: 2,
          } 

          const result = {
            index: 3,
            offset: 1,
          };

          expect(calculateAnchor(initialAnchor, scroll, items)).toEqual(result);      
        }); 
      }); 
    });

    describe('delta < 0', () => {
      describe('offset < 0 AND scroll < 0', () => {
        it('should calculate new anchor', () => {
          const scroll = -9;

          const initialAnchor = {
            index: 3,
            offset: -4,
          } 

          const result = {
            index: 0,
            offset: 3,
          };

          expect(calculateAnchor(initialAnchor, scroll, items)).toEqual(result);      
        }); 
      }); 

      describe('offset < 0 AND scroll >= 0 AND scroll < offset', () => {
        it('should calculate new anchor', () => {
          const scroll = 3;

          const initialAnchor = {
            index: 2,
            offset: -5,
          } 

          const result = {
            index: 1,
            offset: 1,
          };

          expect(calculateAnchor(initialAnchor, scroll, items)).toEqual(result);      
        }); 
      });

      describe('offset >= 0 AND scroll < 0 AND scroll > offset', () => {
        it('should calculate new anchor', () => {
          const scroll = -25;

          const initialAnchor = {
            index: 4,
            offset: 2,
          } 

          const result = {
            index: 0,
            offset: 2,
          };

          expect(calculateAnchor(initialAnchor, scroll, items)).toEqual(result);      
        }); 
      });

      describe('When attempting to scroll beyond first item', () => {
        it('should set first item as anchor with updated offset', () => {
          const scroll = -10;

          const initialAnchor = {
            index: 0,
            offset: -3,
          } 

          const result = {
            index: 0,
            offset: -13,
          };

          expect(calculateAnchor(initialAnchor, scroll, items)).toEqual(result);      
        }); 
      });
    });
  });

  describe('When not all items have been reified', () => {
    const placeholderHeight = 3;

    const items = [
      { height: 5 },  
      { height: placeholderHeight },  
      { height: 8 },  
      { height: placeholderHeight },  
      { height: 4 },  
    ];

    describe('delta >= 0', () => {
      describe('offset >= 0 AND scroll >= 0', () => {
        it('should calculate new anchor', () => {
          const scroll = 20;

          const initialAnchor = {
            index: 0,
            offset: 2,
          } 

          const result = {
            index: 4,
            offset: 3,
          };

          expect(calculateAnchor(
            initialAnchor,
            scroll,
            items))
            .toEqual(result);      
        }); 
      }); 

      describe('offset < 0 AND scroll >= 0 AND scroll > offset ', () => {
        it('should calculate new anchor', () => {
          const scroll = 18;

          const initialAnchor = {
            index: 0,
            offset: -5,
          } 

          const result = {
            index: 2,
            offset: 5,
          };

          expect(calculateAnchor(
            initialAnchor,
            scroll,
            items)).toEqual(result);      
        }); 
      }); 
    }); 
  });
});
