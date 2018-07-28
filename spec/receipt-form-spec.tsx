import * as React from 'react'
import { configure, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16';
import { ReceiptForm } from '../app/receipt-form'
import { DiographStore } from 'diograph-store'
import { MemoryRouter, Route } from 'react-router';

declare var Promise: any;


describe('<ReceiptForm />', () => {
  let wrapper, component, secrets
  configure({ adapter: new Adapter() })

  beforeEach(() => {
    this.jsdom = require('jsdom-global')()
  })

  it('calls DiographStore.getDiory when modelId is given', () => {
    let getDiorySpy = spyOn(DiographStore, "getDiory").and.returnValue({name: "Found diory"})

    wrapper = mount(
      <MemoryRouter initialEntries={[ '/receipt/123-abc' ]}>
        <Route path='/receipt/:id' component={ReceiptForm} />
      </MemoryRouter>
    )
    component = wrapper.instance()

    expect(getDiorySpy.calls.argsFor(0)).toEqual(["123-abc"])
    let componentText = wrapper.find('#name').text();
    expect(componentText).toEqual("Found diory")
  })

  it('has edit mode ON when /receipt/123-abc/edit', () => {
    wrapper = mount(
      <MemoryRouter initialEntries={[ '/receipt/123-abc' ]}>
        <Route path='/receipt/:id' component={ReceiptForm} />
      </MemoryRouter>
    )
    component = wrapper.instance()

    let componentText = wrapper.find('div').first().text();
    expect(componentText).toContain("Edit mode ON")
  })

  it('has edit mode OFF when /receipt/123-abc', () => {
    wrapper = mount(
      <MemoryRouter initialEntries={[ '/receipt/123-abc/edit' ]}>
        <Route path='/receipt/:id/:edit' component={ReceiptForm} />
      </MemoryRouter>
    )
    component = wrapper.instance()

    let componentText = wrapper.find('div').first().text();
    expect(componentText).toContain("Edit mode OFF")
  })

  /*
  it('redirects to root path if diory is not found by modelId', () => {
    spyOn(DiographStore, "getDiory").and.returnValue(null)
    expect(location).toEqual("/")
  })
  */

})
