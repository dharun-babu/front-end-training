import { IconProps } from "../utilies/type/Types";

const HeartLogo = ({
  fill = "",
  width = "24px",
  height = "24px",
  color = "currentColor",
}: Omit<IconProps, "iconName">) => (
  <svg
    fill={fill}
    height={height}
    width={width}
    color={color}
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 471.701 471.701"
  >
    <g>
      <path
        d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
	 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
	 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
	 C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
	 s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
	 c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
	 C444.801,187.101,434.001,213.101,414.401,232.701z"
        fill={fill}
      />
    </g>
  </svg>
);

const CartEmptyLogo = ({
  fill = "",
  width = "24px",
  height = "24px",
  color = "currentColor",
}: Omit<IconProps, "iconName">) => (
  <svg
    fill={fill}
    height={height}
    width={width}
    color={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 5L19 12H7.37671M20 16H8L6 3H3M11 3L13.5 5.5M13.5 5.5L16 8M13.5 5.5L16 3M13.5 5.5L11 8M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const AddWishListLogo = ({
  fill = "",
  width = "24px",
  height = "24px",
  color = "currentColor",
}: Omit<IconProps, "iconName">) => (
  <svg
    height={height}
    width={width}
    color={color}
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19.788 19.788"
    fill={fill}
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0" />

    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <g id="SVGRepo_iconCarrier">
      {" "}
      <g>
        {" "}
        <path
          fill={fill}
          d="M14.503,8.252c0.902,0,1.757,0.203,2.522,0.563c0.554-0.928,0.952-1.827,1.084-2.63 c0.274-1.675,0.032-3.026-0.72-4.014c-0.76-0.997-1.965-1.57-3.687-1.755c-0.137-0.014-0.283-0.022-0.431-0.022 c-1.489,0-3.178,0.721-4.162,2.086c-0.985-1.365-2.672-2.086-4.16-2.086c-0.149,0-0.294,0.008-0.432,0.022 C2.795,0.602,1.591,1.175,0.831,2.17C0.078,3.158-0.165,4.509,0.108,6.185c0.667,4.073,8.205,10.607,8.526,10.884 c0.146,0.125,0.327,0.188,0.508,0.188c0.085,0,0.17-0.015,0.251-0.044c-0.525-0.886-0.829-1.92-0.829-3.023 C8.564,10.916,11.229,8.252,14.503,8.252z M17.035,6.816c0,0-0.292-4.371-4.177-4.954C12.858,1.862,17.521,1.182,17.035,6.816z M14.503,8.827c-2.916,0-5.283,2.365-5.283,5.283s2.367,5.284,5.283,5.284c2.92,0,5.285-2.366,5.285-5.284 C19.788,11.191,17.423,8.827,14.503,8.827z M14.503,18.575c-2.465,0-4.464-2-4.464-4.465c0-2.467,1.999-4.465,4.464-4.465 c2.467,0,4.466,1.998,4.466,4.465C18.969,16.575,16.97,18.575,14.503,18.575z M17.694,13.115v1.926h-2.213v2.26h-1.925v-2.26 h-2.243v-1.926h2.243v-2.197h1.925v2.197C15.481,13.115,17.694,13.115,17.694,13.115z"
        />{" "}
      </g>{" "}
    </g>
  </svg>
);

const Icon = ({ iconName, ...restProps }: IconProps) => {
  switch (iconName.toLowerCase()) {
    case "heart":
      return <HeartLogo {...restProps} />;
    case "cartempty":
      return <CartEmptyLogo {...restProps} />;
    case "addwishlist":
      return <AddWishListLogo {...restProps} />;
    default:
      return <span>Icon not found</span>;
  }
};

export default Icon;
