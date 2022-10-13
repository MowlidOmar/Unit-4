import {add} from './checkErrors'


it('TODO: task 3 goes here', () => {
    // Arrange
  let emptyArray = []
    // Act
  function errorCheck(emptyArray) {
    if (emptyArray.length === 0) {
      let emptyArrayError = 'Array is empty'
      return emptyArrayError

// Assert
//Implement new assertion → it should throw an error if an empty array is provided. Test it by running your test command. Commit if passing

      expect(errorCheck).toThrow(emptyArrayError)

    }
  }

  });
  
  it('TODO: task 4 goes here', () => {
    // Arrange and Act
    // create a function that calls the add function without any arguments and assign it to a variable
    let emptyValue = []
    function add1(pram) {
    if (pram ===0) {
      let emptyAddError = 'Nothing to add'
      return emptyAddError
  
  
    expect(add1).toThrowError(emptyAddError)
    }}})
  
