import React from 'react';
import { shallow, render, mount } from 'enzyme';
import pureComponent from './pureComponent';

describe('pureComponent', () => {
  let props;
  let shallowpureComponent;
  let renderedpureComponent;
  let mountedpureComponent;

  const shallowTestComponent = () => {
    if (!shallowpureComponent) {
      shallowpureComponent = shallow(<pureComponent {...props} />);
    }
    return shallowpureComponent;
  };

  const renderTestComponent = () => {
    if (!renderedpureComponent) {
      renderedpureComponent = render(<pureComponent {...props} />);
    }
    return renderedpureComponent;
  };

  const mountTestComponent = () => {
    if (!mountedpureComponent) {
      mountedpureComponent = mount(<pureComponent {...props} />);
    }
    return mountedpureComponent;
  };  

  beforeEach(() => {
    props = {};
    shallowpureComponent = undefined;
    renderedpureComponent = undefined;
    mountedpureComponent = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
