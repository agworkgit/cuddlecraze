import { useState } from 'react';

const FavouriteIconAdvice = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <svg
      className={`fav-icon ${isClicked ? 'active' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      zoomAndPan="magnify"
      viewBox="0 0 810 809.999993"
      height="32"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      onClick={handleClick}
    >
            <defs>
                <clipPath id="fd08ca7205">
                    <path
                        d="M 14 63 L 796 63 L 796 746.644531 L 14 746.644531 Z M 14 63 "
                        clipRule="nonzero"
                    />
                </clipPath>
                <clipPath id="fe405c9a00">
                    <path
                        d="M 45.507812 172.457031 C -17.808594 276.769531 26.796875 378.300781 82.855469 432.1875 L 410.617188 746.644531 L 731.460938 433.308594 C 783.597656 375.339844 803.585938 313.851562 792.484375 245.386719 C 777.152344 150.671875 699.101562 77.1875 602.6875 66.695312 C 543.550781 60.328125 486.429688 77.0625 441.84375 114.109375 C 429.84375 124.078125 419.121094 135.222656 409.773438 147.335938 C 398.679688 133.546875 385.675781 120.929688 370.96875 109.75 C 319.699219 70.785156 254.4375 55.316406 191.75 67.347656 C 132.378906 78.816406 79.085938 117.113281 45.507812 172.457031 Z M 45.507812 172.457031 "
                        clipRule="nonzero"
                    />
                </clipPath>
            </defs>
            <g clipPath="url(#fd08ca7205)">
                <g clipPath="url(#fe405c9a00)">
                    <path
                        d="M 14.550781 63.355469 L 796.59375 63.355469 L 796.59375 746.644531 L 14.550781 746.644531 Z M 14.550781 63.355469 "
                        fillOpacity="1"
                    />
                </g>
            </g>
        </svg>
    );
};

export default FavouriteIconAdvice;