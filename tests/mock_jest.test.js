const app = require('../app');
const math = require('../math');

/**
 * Here we simply “spy” calls to the math function, but leave the original implementation in place:
 */

test("calls math.add with spyOn", () => {
    const addMock = jest.spyOn(math, "add");
  
    // calls the original implementation
    expect(app.doAdd(1, 2)).toEqual(3);
  
    // and the spy stores the calls to add
    expect(addMock).toHaveBeenCalledWith(1, 2);
  });

/**
 * In other cases, you may want to mock a function, but then restore the original implementation
 */

test("calls math.add mockImplementation with spyOn", () => {
    const addMock = jest.spyOn(math, "add");

    // override the implementation
    addMock.mockImplementation(() => "mock");
    expect(app.doAdd(1, 2)).toEqual("mock");

    // restore the original implementation
    addMock.mockRestore();
    expect(app.doAdd(1, 2)).toEqual(3);
});

/**
 * The key thing to remember about jest.spyOn is that it is just sugar for the basic jest.fn() usage. 
 * We can achieve the same goal by storing the original implementation, 
 * setting the mock implementation to to original, and re-assigning the original later:
 */
test("calls math.add mockImplementation with fn()", () => {
    // store the original implementation
    const originalAdd = math.add;
  
    // mock add with the original implementation
    math.add = jest.fn(originalAdd);
  
    // spy the calls to add
    expect(app.doAdd(1, 2)).toEqual(3);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  
    // override the implementation
    math.add.mockImplementation(() => "mock");
    expect(app.doAdd(1, 2)).toEqual("mock");
    expect(math.add).toHaveBeenCalledWith(1, 2);
  
    // restore the original implementation
    math.add = originalAdd;
    expect(app.doAdd(1, 2)).toEqual(3);
  });