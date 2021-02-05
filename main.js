let bdy = document.querySelector("body");

const buildNeonAnimation = () => {
  for (x of "x".repeat(100)) {
    let div = document.createElement("DIV");
    bdy.appendChild(div);
  }
  let frames = document.querySelectorAll("body > div");
  frames.forEach((el, ix) => {
    let indx = ix + 1;
    el.animate(
      [
        {
          transform: `translateZ(${-7 * indx}px) rotate(${-2 * indx}deg)`,
        },
        {
          transform: `translateZ(100px) rotate(${180 / indx + 360}deg)`,
        },
      ],
      {
        delay: indx / 100,
        duration: 20000,
        // iterations: Infinity,
        direction: "reverse",
      }
    );
  });
};

buildNeonAnimation();
