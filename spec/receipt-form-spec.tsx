import * as React from 'react'
import { configure, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16';
import { ReceiptForm } from '../app/receipt-form'
import { DiographStore } from 'diograph-store'
import { MemoryRouter, Route } from 'react-router';

// TODO: Couldn't make helpers files to load/work...this should be defined there...
declare var Promise: any;
let genericPromise = (content={}) => {
  return new Promise(resolve => { resolve(content) })
}

describe('<ReceiptForm />', () => {
  let wrapper, component
  let id, getDiorySpy
  configure({ adapter: new Adapter() })

  beforeEach(() => {
    this.jsdom = require('jsdom-global')()

    id = "123-abc"
    getDiorySpy = spyOn(DiographStore, "getDiory").and.returnValue(genericPromise({id: id}))

    wrapper = mount(
      <MemoryRouter initialEntries={[ `/receipt/${id}` ]}>
        <Route path='/receipt/:id' component={ReceiptForm} />
      </MemoryRouter>
    )
    component = wrapper.find(ReceiptForm).instance()
  })

  it('calls DiographStore.getDiory when modelId is given', () => {
    expect(getDiorySpy.calls.argsFor(0)).toEqual([id])
    expect(component.state.model.id).toEqual(id)
  })

  it('has a link to put "Edit mode ON"', () => {
    let componentText = wrapper.find('div').first().text();
    expect(componentText).toContain("Edit mode ON")
  })

  describe("when in edit mode", () => {

    beforeEach(() => {
      wrapper = mount(
        <MemoryRouter initialEntries={[ `/receipt/${id}/edit` ]}>
          <Route path='/receipt/:id/:edit' component={ReceiptForm} />
        </MemoryRouter>
      )
      component = wrapper.find(ReceiptForm).instance()
    })

    it('has a link to put "Edit mode OFF"', () => {
      let componentText = wrapper.find('div').first().text();
      expect(componentText).toContain("Edit mode OFF")
    })

  })

  /*
  it('redirects to root path if diory is not found by modelId', () => {
    spyOn(DiographStore, "getDiory").and.returnValue(null)
    expect(location).toEqual("/")
  })
  */

})
