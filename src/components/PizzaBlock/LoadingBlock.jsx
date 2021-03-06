import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className={'pizza-block'}
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="135" cy="138" r="115" />
      <rect x="-2" y="266" rx="6" ry="6" width="280" height="24" />
      <rect x="-2" y="301" rx="6" ry="6" width="280" height="84" />
      <rect x="7" y="409" rx="6" ry="6" width="89" height="27" />
      <rect x="123" y="399" rx="25" ry="25" width="151" height="44" />
    </ContentLoader>
  );
}

export default LoadingBlock;
