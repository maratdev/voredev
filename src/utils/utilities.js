import {useMediaQuery} from "react-responsive";

export const useIsMobile = (size) => useMediaQuery({query: `(max-width: ${size}px)`});


export default {useIsMobile};
