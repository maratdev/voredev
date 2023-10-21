import {useMediaQuery} from "react-responsive";

export const useIsMobile = (size) => useMediaQuery({query: `(max-width: ${size}px)`});

export const handleMouseMove = (evt) => {
  let offsetX = 0.5 - evt.pageX / screen.availWidth;
  let offsetY = 0.7 - evt.pageY / screen.availHeight;
  let element = document.getElementsByClassName("home__blur")[0];
  let offset=parseInt(element.dataset.offset);
  element.style.transform = "translate3d(" + Math.round((offset * offsetX) / 2) + "px ," + Math.round((offset * offsetY) / 2) + "px , 0)";
};


export default {useIsMobile, handleMouseMove};
