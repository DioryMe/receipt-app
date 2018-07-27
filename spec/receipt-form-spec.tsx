import * as React from 'react'
import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16';
import { ReceiptForm } from '../app/receipt-form'
import { DiographStore } from 'diograph-store'

declare var Promise: any;

describe('<ReceiptForm />', () => {
  let wrapper, component, secrets
  configure({ adapter: new Adapter() })

  it('renders diory name when diory found', () => {
    let getDiorySpy = spyOn(DiographStore, "getDiory").and.returnValue({name: "Found diory"})

    wrapper = shallow(
      <ReceiptForm
        modelId="123-abc"
        editMode="false" />
    )
    component = wrapper.instance()

    expect(getDiorySpy.calls.argsFor(0)).toEqual(["123-abc"])
    let componentText = wrapper.find('#name').text();
    expect(componentText).toEqual("Found diory")
  })

  it('calls createDiory if diory not found', () => {
    spyOn(DiographStore, "getDiory").and.returnValue(null)
    let createDiorySpy = spyOn(DiographStore, "createDiory")
    expect(createDiorySpy.calls.argsFor(0)).toEqual([{name: "New receipt"}])
  })

})
