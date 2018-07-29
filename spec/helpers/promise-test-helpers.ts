declare var Promise: any;

var genericPromise

beforeAll(() => {
  genericPromise = (content={}) => {
    return new Promise(resolve => { resolve(content) })
  }
})
