import * as React from 'react'
import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16';
import { Main } from '../app/main'
import { DiographStore } from 'diograph-store'

// TODO: Couldn't make helpers files to load/work...this should be defined there...
declare var Promise: any;
let genericPromise = (content={}) => {
  return new Promise(resolve => { resolve(content) })
}

describe('<Main />', () => {
  let wrapper, component
  configure({ adapter: new Adapter() })

  beforeEach(() => {
    wrapper = shallow(
      <Main />
    )
    component = wrapper.instance()
  })

  it('calls createDiory and redirects to its /receipt/123-abc route', () => {
    let createDiorySpy = spyOn(DiographStore, "createDiory").and.returnValue(genericPromise({id: "123-abc"}))

    component.createNewAndRedirect().then(() => {
      expect(createDiorySpy.calls.argsFor(0)).toEqual([{type: "receipt"}])
      expect(wrapper.state().newReceiptId).toEqual("123-abc")
    })
  })

})
