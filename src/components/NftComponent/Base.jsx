import expressions from "./Expressions";
import antennae from "./Antennae";

export default function Base({ parts }) {
  const expression = expressions(parts);
  const antenna = antennae(parts);

  const image = `<svg
    width="300.5px"
    height="557.236459px"
    viewBox="0 0 ${300 + parts.size * 10} 550"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>droid</title>
    <defs>
      <filter
        x="-2.4%"
        y="-1.0%"
        width="106.8%"
        height="112.9%"
        filterUnits="objectBoundingBox"
        id="filter-1"
      >
        <feOffset
          dx="0"
          dy="2"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feGaussianBlur
          stdDeviation="2"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        ></feGaussianBlur>
        <feColorMatrix
          values="0 0 0 0 0.476917212   0 0 0 0 0.476917212   0 0 0 0 0.476917212  0 0 0 0.510287198 0"
          type="matrix"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        ></feColorMatrix>
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
      <rect id="path-2" x="249" y="0" width="13" height="167" rx="6"></rect>
      <filter
        x="-34.6%"
        y="-2.7%"
        width="169.2%"
        height="105.4%"
        filterUnits="objectBoundingBox"
        id="filter-3"
      >
        <feGaussianBlur
          stdDeviation="1.5"
          in="SourceAlpha"
          result="shadowBlurInner1"
        ></feGaussianBlur>
        <feOffset
          dx="6"
          dy="1"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        ></feOffset>
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner1"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowInnerInner1"
        ></feColorMatrix>
      </filter>
      <rect
        id="path-4"
        x="8"
        y="10"
        width="211"
        height="131"
        rx="28"
      ></rect>
      <filter
        x="-0.9%"
        y="-1.5%"
        width="101.9%"
        height="103.1%"
        filterUnits="objectBoundingBox"
        id="filter-5"
      >
        <feGaussianBlur
          stdDeviation="1.5"
          in="SourceAlpha"
          result="shadowBlurInner1"
        ></feGaussianBlur>
        <feOffset
          dx="0"
          dy="1"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        ></feOffset>
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner1"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowInnerInner1"
        ></feColorMatrix>
      </filter>
      <path
        d="M144.970173,223.567871 C178.779674,223.567871 182.620818,269.380594 182.620818,325.893452 C182.620818,330.225531 182.598246,334.494734 182.541335,338.685243 L225,338.68415 C259.241654,338.68415 287,366.442496 287,400.68415 L287,498.567871 L9,498.567871 L9,400.68415 C9,366.442496 36.7583455,338.68415 71,338.68415 L113.38781,338.685243 C113.396991,334.494734 113.41021,330.225531 113.41021,325.893452 C113.41021,269.380594 111.160671,223.567871 144.970173,223.567871 Z M250.5,384.067871 C252.065816,406.429502 252.848724,425.596169 252.848724,441.567871 C252.848724,457.539573 252.065816,476.70624 250.5,499.067871 M57.5,428.204235 L57.5,496.931507 M113.5,284.207871 L114,347.567871 M182.5,322.217871 L182.5,346.917871"
        id="path-6"
      ></path>
      <filter
        x="-3.1%"
        y="-2.4%"
        width="106.1%"
        height="121.7%"
        filterUnits="objectBoundingBox"
        id="filter-7"
      >
        <feMorphology
          radius="1.5"
          operator="dilate"
          in="SourceAlpha"
          result="shadowSpreadOuter1"
        ></feMorphology>
        <feOffset
          dx="0"
          dy="2"
          in="shadowSpreadOuter1"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feGaussianBlur
          stdDeviation="2"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        ></feGaussianBlur>
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowBlurOuter1"
        ></feColorMatrix>
      </filter>
      <filter
        x="-4.0%"
        y="-3.3%"
        width="107.9%"
        height="123.5%"
        filterUnits="objectBoundingBox"
        id="filter-8"
      >
        <feMorphology
          radius="6"
          operator="erode"
          in="SourceAlpha"
          result="shadowSpreadInner1"
        ></feMorphology>
        <feGaussianBlur
          stdDeviation="1.5"
          in="shadowSpreadInner1"
          result="shadowBlurInner1"
        ></feGaussianBlur>
        <feOffset
          dx="-2"
          dy="1"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        ></feOffset>
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner1"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.300400527 0"
          type="matrix"
          in="shadowInnerInner1"
          result="shadowMatrixInner1"
        ></feColorMatrix>
        <feMorphology
          radius="3"
          operator="erode"
          in="SourceAlpha"
          result="shadowSpreadInner2"
        ></feMorphology>
        <feGaussianBlur
          stdDeviation="1.5"
          in="shadowSpreadInner2"
          result="shadowBlurInner2"
        ></feGaussianBlur>
        <feOffset
          dx="2"
          dy="1"
          in="shadowBlurInner2"
          result="shadowOffsetInner2"
        ></feOffset>
        <feComposite
          in="shadowOffsetInner2"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner2"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 0.373734184   0 0 0 0 0.373734184   0 0 0 0 0.373734184  0 0 0 0.5 0"
          type="matrix"
          in="shadowInnerInner2"
          result="shadowMatrixInner2"
        ></feColorMatrix>
        <feMerge>
          <feMergeNode in="shadowMatrixInner1"></feMergeNode>
          <feMergeNode in="shadowMatrixInner2"></feMergeNode>
        </feMerge>
      </filter>
      <path
        d="M109,258.567871 C169.199038,258.567871 192.039185,187.828862 192.039185,100.567871 C192.039185,13.3068806 169.199038,0 109,0 C48.8009623,0 0,13.3068806 0,100.567871 C0,187.828862 48.8009623,258.567871 109,258.567871 Z"
        id="path-9"
      ></path>
      <filter
        x="-5.5%"
        y="-4.1%"
        width="110.9%"
        height="108.1%"
        filterUnits="objectBoundingBox"
        id="filter-10"
      >
        <feGaussianBlur
          stdDeviation="1.5"
          in="SourceAlpha"
          result="shadowBlurInner1"
        ></feGaussianBlur>
        <feOffset
          dx="18"
          dy="1"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        ></feOffset>
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner1"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0"
          type="matrix"
          in="shadowInnerInner1"
          result="shadowMatrixInner1"
        ></feColorMatrix>
        <feGaussianBlur
          stdDeviation="1.5"
          in="SourceAlpha"
          result="shadowBlurInner2"
        ></feGaussianBlur>
        <feOffset
          dx="11"
          dy="1"
          in="shadowBlurInner2"
          result="shadowOffsetInner2"
        ></feOffset>
        <feComposite
          in="shadowOffsetInner2"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner2"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowInnerInner2"
          result="shadowMatrixInner2"
        ></feColorMatrix>
        <feMerge>
          <feMergeNode in="shadowMatrixInner1"></feMergeNode>
          <feMergeNode in="shadowMatrixInner2"></feMergeNode>
        </feMerge>
      </filter>
      <path
        d="M97.3786878,231 C151.159452,231 171.564439,167.80301 171.564439,89.8455718 C171.564439,11.8881337 151.159452,0 97.3786878,0 C43.5979236,0 0,11.8881337 0,89.8455718 C0,167.80301 43.5979236,231 97.3786878,231 Z"
        id="path-11"
      ></path>
      <filter
        x="-5.8%"
        y="-4.3%"
        width="111.7%"
        height="108.7%"
        filterUnits="objectBoundingBox"
        id="filter-12"
      >
        <feMorphology
          radius="2"
          operator="dilate"
          in="SourceAlpha"
          result="shadowSpreadInner1"
        ></feMorphology>
        <feOffset
          dx="22"
          dy="1"
          in="shadowSpreadInner1"
          result="shadowOffsetInner1"
        ></feOffset>
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner1"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.196659542 0"
          type="matrix"
          in="shadowInnerInner1"
        ></feColorMatrix>
      </filter>
      <rect id="path-13" x="70" y="0" width="13" height="167" rx="6"></rect>
      <filter
        x="-34.6%"
        y="-2.7%"
        width="169.2%"
        height="105.4%"
        filterUnits="objectBoundingBox"
        id="filter-14"
      >
        <feGaussianBlur
          stdDeviation="1.5"
          in="SourceAlpha"
          result="shadowBlurInner1"
        ></feGaussianBlur>
        <feOffset
          dx="6"
          dy="1"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        ></feOffset>
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner1"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowInnerInner1"
        ></feColorMatrix>
      </filter>
    </defs>
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="droid" filter="url(#filter-1)" transform="translate(4, 2)">
        ${antenna === undefined ? "" : antenna.right}
        <g id="battery" transform="translate(0, 320.5679)">
          <g id="Rectangle">
            <use
              fill-opacity="0.506427045"
              fill="#${parts.batteryColor}"
              fill-rule="evenodd"
              href="#path-4"
            ></use>
            <use
              fill="black"
              fill-opacity="1"
              filter="url(#filter-5)"
              href="#path-4"
            ></use>
            <rect
              stroke="#979797"
              stroke-width="1"
              stroke-linejoin="square"
              x="8.5"
              y="10.5"
              width="210"
              height="130"
              rx="28"
            ></rect>
          </g>
          <rect
            id="Rectangle-Copy-2"
            stroke="#000000"
            stroke-width="3"
            fill-opacity="0.506427045"
            fill="#D8D8D8"
            x="1.5"
            y="1.5"
            width="216"
            height="135"
            rx="28"
          ></rect>
        </g>
        <g id="body">
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-7)"
            href="#path-6"
          ></use>
          <use
            fill="#${parts.skinColor}"
            fill-rule="evenodd"
            href="#path-6"
          ></use>
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-8)"
            href="#path-6"
          ></use>
          <use stroke="#000000" stroke-width="3" href="#path-6"></use>
        </g>
        <g id="head" transform="translate(70, 44)">
          <g id="headShape">
            <use
              fill="#${parts.skinColor}"
              fill-rule="evenodd"
              href="#path-9"
            ></use>
            <use
              fill="black"
              fill-opacity="1"
              filter="url(#filter-10)"
              href="#path-9"
            ></use>
            <path
              stroke="#000000"
              stroke-width="3"
              d="M109,1.5 C139.801905,1.5 160.764294,4.86415758 173.661564,20.4839033 C185.528338,34.8556273 190.539185,59.4228875 190.539185,100.567871 C190.539185,146.823025 184.12394,188.422743 169.017567,217.165884 C162.293155,229.960532 153.847132,240.191801 143.450226,247.090404 C133.723444,253.544362 122.292623,257.067871 109,257.067871 C79.354476,257.067871 52.5691888,239.573303 33.1600541,211.43896 C13.5853193,183.064574 1.5,143.860795 1.5,100.567871 C1.5,62.2128767 10.9690104,38.2921267 26.862623,23.6280278 C46.6119434,5.40649462 76.1167481,1.5 109,1.5 Z"
              stroke-linejoin="square"
            ></path>
          </g>
          <g id="face" transform="translate(20.2627, 8)">
            <g id="faceSCreen">
              <use
                fill="#000000"
                fill-rule="evenodd"
                href="#path-11"
              ></use>
              <use
                fill="black"
                fill-opacity="1"
                filter="url(#filter-12)"
                href="#path-11"
              ></use>
              <path
                stroke="#${parts.highlightColor}"
                stroke-width="3"
                d="M97.3786878,1.5 C124.828506,1.5 143.525277,4.47716844 155.022874,18.4017858 C165.609354,31.2229584 170.064439,53.1451537 170.064439,89.8455718 C170.064439,131.138719 164.341893,168.277513 150.855764,193.937789 C144.861941,205.342333 137.335099,214.463689 128.067494,220.612972 C119.402723,226.362261 109.219739,229.5 97.3786878,229.5 C70.9423006,229.5 47.0623414,213.890936 29.7562505,188.805043 C12.2845597,163.479106 1.5,128.486719 1.5,89.8455718 C1.5,55.6435558 9.93224906,34.304652 24.1070433,21.2264054 C41.7246644,4.97166554 68.04868,1.5 97.3786878,1.5 Z"
                stroke-linejoin="square"
              ></path>
            </g>
            ${expression}
          </g>
        </g>
        <g id="chestPlate" transform="translate(102, 357.1838)">
          <path
            d="M109,27.3840441 C116.731986,27.3840441 123.731986,30.5180509 128.79899,35.5850543 C133.865993,40.6520577 137,47.6520577 137,55.3840441 L137,87.3840441 C137,100.638878 131.627417,112.638878 122.941125,121.32517 C114.254834,130.011461 102.254834,135.384044 89,135.384044 L29,135.384044 C21.2680135,135.384044 14.2680135,132.250037 9.20101013,127.183034 C4.13400675,122.116031 1,115.116031 1,107.384044 L1,55.3840441 C1,47.6520577 4.13400675,40.6520577 9.20101013,35.5850543 C14.2680135,30.5180509 21.2680135,27.3840441 29,27.3840441 Z"
            id="Rectangle"
            stroke="#${parts.highlightColor}"
            stroke-width="2"
            fill="#${parts.expressionColor}"
          ></path>
          <path
            d="M74.5,47.8840441 C76.0658162,60.7176759 76.8487244,71.7176759 76.8487244,80.8840441 C76.8487244,90.0504124 76.0658162,101.050412 74.5,113.884044"
            id="line-copy"
            fill="#${parts.skinColor}"
          ></path>
        </g>
        ${antenna === undefined ? "" : antenna.left}
      </g>
    </g>
  </svg>`;

  const src = `data:image/svg+xml;utf8,${encodeURIComponent(image)}`;

  return (
    <img
    className="p-4"
      style={{ width: "100%", background: `#${parts.backgroundColor}` }}
      src={src}
      alt={`bot-` + parts.expression + parts.skinColor}
    />
  );
}
