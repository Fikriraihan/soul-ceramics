"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ScrolledSection = ({ image }: { image: string }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrollLocked, setScrollLocked] = useState(true);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const scrollElement = scrollRef.current;
      if (scrollElement) {
        const { scrollTop, scrollHeight, clientHeight } = scrollElement;

        const isAtTop = scrollTop === 0;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight;

        if ((event.deltaY < 0 && isAtTop) || (event.deltaY > 0 && isAtBottom)) {
          // Allow page to scroll if at top and scrolling up, or at bottom and scrolling down
          setScrollLocked(false);
          return;
        }

        // Prevent page from scrolling and scroll the section
        setScrollLocked(true);
        scrollElement.scrollTop += event.deltaY;
        event.preventDefault();
      }
    };

    if (isScrollLocked) {
      window.addEventListener("wheel", handleScroll, { passive: false });
    } else {
      window.removeEventListener("wheel", handleScroll);
    }

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isScrollLocked]);
  return (
    <div className=" md:h-[91vh] md:overflow-auto" ref={scrollRef}>
      <div className="flex flex-col items-center gap-24">
        <Image src={image} width={700} height={100} className="h-[1300px]" alt="product" />
        <Image src={image} width={700} height={100} className="h-[1300px]" alt="product" />
        <Image src={image} width={700} height={100} className="h-[1300px]" alt="product" />
      </div>
    </div>
  );
};

export default ScrolledSection;
