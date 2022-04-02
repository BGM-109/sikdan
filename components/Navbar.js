import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Navbar = () => {
  const emojiContainer = useRef();

  const loadAnimaition = () => {
    lottie.loadAnimation({
      container: emojiContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lottie/70305-love-emoji.json",
    });
  };

  useEffect(() => {
    loadAnimaition();
  }, []);

  return (
    <div className="absolute top-0 left-0 text-white">
      <div className="flex flex-row items-center justify-center">
        <p className="w-8 mx-2" ref={emojiContainer}></p>
        <p className="cursor-pointer hover:underline text-sm">
          깃 Star 눌러줘잉
        </p>
      </div>
    </div>
  );
};

export default Navbar;
