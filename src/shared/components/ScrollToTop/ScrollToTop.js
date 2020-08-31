import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

/**
 * @component
 */
const ScrollToTop = () => {
  
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect( () => {
    const escFunc = (event) => {
      if(event.key === 'Escape'){
        event.preventDefault();
        console.log("Escape has been pressed");
      }
    }

    document.body.addEventListener('keydown', escFunc, false);

    return () => {
      document.body.removeEventListener('keydown', escFunc, false);
    }
  })

  return null;
}

export default ScrollToTop;