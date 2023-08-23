const useSlider = () => {
  const slider = document.getElementById("slider");
  const sliderItems = document.getElementById("slides");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  function slide(
    wrapper: HTMLElement | null,
    items: HTMLElement | null,
    prev: HTMLElement | null,
    next: HTMLElement | null
  ) {
    if (!items || !wrapper || !prev || !next) {
      return;
    }

    let posX1 = 0;
    let posX2 = 0;
    let posInitial: number;
    let posFinal: number;
    let threshold = 100;
    const slides = items.getElementsByClassName("slide");
    const slidesLength = slides.length;
    let firstSlide = slides[0] as HTMLElement;
    let slideSize: number = firstSlide.offsetWidth;
    let lastSlide = slides[slidesLength - 1];
    let cloneFirst = firstSlide.cloneNode(true);
    let cloneLast = lastSlide.cloneNode(true);
    let index = 0;
    let allowShift = true;

    items.appendChild(cloneFirst);
    items.insertBefore(cloneLast, firstSlide);
    wrapper.classList.add("loaded");

    items.onmousedown = dragStart;

    items.addEventListener("touchstart", dragStart);
    items.addEventListener("touchend", dragEnd);
    items.addEventListener("touchmove", dragAction);

    prev.addEventListener("click", () => shiftSlide(-1));
    next.addEventListener("click", () => shiftSlide(1));

    items.addEventListener("transitionend", checkIndex);

    function dragStart(e: any) {
      e.preventDefault();

      if (!items) {
        return;
      }

      posInitial = items.offsetLeft;

      if (e.type == "touchstart") {
        posX1 = e.touches[0].clientX;
      } else {
        posX1 = e.clientX;
        document.onmouseup = dragEnd;
        document.onmousemove = dragAction;
      }
    }

    function dragAction(e: any) {
      if (!items) {
        return;
      }

      if (e.type == "touchmove") {
        posX2 = posX1 - e.touches[0].clientX;
        posX1 = e.touches[0].clientX;
      } else {
        posX2 = posX1 - e.clientX;
        posX1 = e.clientX;
      }
      items.style.left = items.offsetLeft - posX2 + "px";
    }

    function dragEnd(e: any) {
      if (!items) {
        return;
      }

      posFinal = items.offsetLeft;
      if (posFinal - posInitial < -threshold) {
        shiftSlide(1, "drag");
      } else if (posFinal - posInitial > threshold) {
        shiftSlide(-1, "drag");
      } else {
        items.style.left = posInitial + "px";
      }

      document.onmouseup = null;
      document.onmousemove = null;
    }

    function shiftSlide(dir: number, action?: any) {
      if (!items) {
        return;
      }

      items.classList.add("shifting");

      if (allowShift) {
        if (!action) {
          posInitial = items.offsetLeft;
        }

        if (dir == 1) {
          items.style.left = posInitial - slideSize + "px";
          index++;
        } else if (dir == -1) {
          items.style.left = posInitial + slideSize + "px";
          index--;
        }
      }

      allowShift = false;
    }

    function checkIndex() {
      if (!items) {
        return;
      }

      items.classList.remove("shifting");

      if (index == -1) {
        items.style.left = -(slidesLength * slideSize) + "px";
        index = slidesLength - 1;
      }

      if (index == slidesLength) {
        items.style.left = -(1 * slideSize) + "px";
        index = 0;
      }

      allowShift = true;
    }
  }

  slide(slider, sliderItems, prev, next);
};

export default useSlider;
