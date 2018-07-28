import * as React from 'react'
import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16';
import { ReceiptForm } from '../app/receipt-form'
import { DiographStore } from 'diograph-store'

declare var Promise: any;

describe('<ReceiptForm />', () => {
  let wrapper, component, secrets
  configure({ adapter: new Adapter() })

  // This should fail as no mention of DiographStore.getDiory() yet anywhere...
  // => but shouldn't fail for this.props.match being undefined... ("Cannot read property 'params' of undefined")
  it('calls DiographStore.getDiory when modelId is given', () => {
    let getDiorySpy = spyOn(DiographStore, "getDiory").and.returnValue({name: "Found diory"})

    // TODO: Would <ReceiptForm /> be enough?
    // - modelId comes from the url
    // - editMode comes from the url
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

  /*
  it('redirects to root path if diory is not found by modelId', () => {
    spyOn(DiographStore, "getDiory").and.returnValue(null)
    expect(location).toEqual("/")
  })
  */

})
