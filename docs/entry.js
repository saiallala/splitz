
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../my-template/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/components/UI/Button/Button.js';
reactComponents['Button'] = Component0;

import Component1 from '../src/shared/components/ScrollToTop/ScrollToTop.js';
reactComponents['ScrollToTop'] = Component1;

import Component2 from '../src/components/Splitz/SplitzView.js';
reactComponents['SplitzView'] = Component2;