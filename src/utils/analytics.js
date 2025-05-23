// utils/analytics.js
import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-C9NWCR3LRX');
};

export const logPageView = (url) => {
  ReactGA.send({ hitType: 'pageview', page: url });
};
