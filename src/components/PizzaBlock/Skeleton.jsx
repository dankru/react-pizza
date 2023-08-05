import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
     <circle cx="160" cy="130" r="120" /> 
    <rect x="30" y="266" rx="9" ry="9" width="270" height="27" /> 
    <rect x="30" y="316" rx="10" ry="10" width="270" height="88" /> 
    <rect x="32" y="426" rx="9" ry="9" width="90" height="27" /> 
    <rect x="150" y="418" rx="23" ry="23" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
