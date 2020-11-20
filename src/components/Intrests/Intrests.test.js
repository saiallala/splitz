import React from 'react';
import Enzyme, { shallow } from 'enzyme' ;
import Adapter from 'enzyme-adapter-react-16'
import Intrest from './Intrests';

Enzyme.configure({ adapter: new Adapter() })

const setup = (props={}, state=null) => {
    const wrapper = shallow(<Intrest {...props} />)
    if(state) wrapper.setState(state);
    return wrapper;
}

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

test('renders without crashing', () => {
  const wrapper = setup();
  const intrest = findByTestAttr(wrapper, 'component-intrest')
  expect(intrest.length).toBe(1);
});

test('renders increment button', () => {
    const wrapper = setup();
    const incrementButton = findByTestAttr(wrapper, 'component-increment-button')
    expect(incrementButton.length).toBe(1);
});

test('renders decrement button', () => {
    const wrapper = setup();
    const decrementButton = findByTestAttr(wrapper, 'component-decrement-button')
    expect(decrementButton.length).toBe(1);
});

test('render counter display', () => {
    const wrapper = setup();
    const display = findByTestAttr(wrapper, 'component-display')
    expect(display.length).toBe(1);
});

test('counter starts at 0', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state('counter');
    expect(initialCounterState).toBe(0);
});

test('clicking button increments counter display', () => {
    const counter = 7;
    const wrapper = setup(null, { counter });
    const incrementButton = findByTestAttr(wrapper, 'component-increment-button')
    incrementButton.simulate('click');
    const display = findByTestAttr(wrapper, 'component-display')
    expect(display.text()).toContain(counter + 1);
})

test('clicking button decrements counter display', () => {
    const counter = 7;
    const wrapper = setup(null, { counter });
    const decrementButton = findByTestAttr(wrapper, 'component-decrement-button')
    decrementButton.simulate('click');
    const display = findByTestAttr(wrapper, 'component-display')
    expect(display.text()).toContain(counter - 1);
})



   