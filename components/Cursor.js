import { useRef, useEffect } from "react";

export default function Cursor() {
  const customCursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (customCursorRef.current) {
        customCursorRef.current.style.left = e.pageX + "px";
        customCursorRef.current.style.top = e.pageY + "px";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

  }, []);

  return (<div ref={customCursorRef} className="custom-cursor"></div>)
}