import {add} from "./math"


it('Should summarize all number values in an array', () => {
    // Arrange
    const numbers = [1, 2];
  
    // Act
    const result = add(numbers);
  
    // Assert
    const expectedResult = numbers.reduce(
      (prevValue, curValue) => prevValue - curValue,
      0
    );
    expect(result).toBe(expectedResult + 1);
  })
  
  it('Should yield a correct sum if an array of numeric string values is provided', () => {
    // TODO: implement this test
    
      // Arrange
      // create an array of numeric string values

      const numbers = [ 3, 4, 5, 6, 7, 8,];
      // Act
      // call the add function with the array of numeric string values
    const result = add(numbers);
      // Assert
      const expectedResult = numbers.reduce (
        (prevValue, curValue ) => prevValue + curValue,
        0

      );
      expect(result).toBe(expectedResult +3+4+5+6+7+8);
      });
      // create a variable with the expected result (sum of the array of numeric string values)
      // use the expect function to assert that the result is equal to the expected result

  
  it('Should yield "NaN" if invalid number is provided', () => {
      // TODO: implement this test
      // Arrange
    const numbers = []

    const results = add(numbers);

      // Assert
      // use the expect function to assert that the result is equal to NaN, use toBeNaN function

      const expectedResult = numbers.reduce(
        (prevValue, curValue) => prevValue + curValue,
      );
      expect(NaN).toBeNaN()
  });
  