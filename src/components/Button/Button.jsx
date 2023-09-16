import { useRef } from "react";

export default function Btn({ buttonText, onClick, classes, href, disabled }) {
  const buttonRef = useRef();

  function handleMouseDown() {
    buttonRef.current.classList.add("custom-btn-active");
  }

  function handleMouseUp() {
    buttonRef.current.classList.remove("custom-btn-active");
  }

  function handleMouseMove(e) {
    var leftOffset = buttonRef.current.getBoundingClientRect().left;
    var btnWidth = buttonRef.current.offsetWidth;
    var myPosX = e.pageX;
    var newClass = "";

    if (myPosX < leftOffset + 0.3 * btnWidth) {
      newClass = "custom-btn-left";
    } else {
      if (myPosX > leftOffset + 0.65 * btnWidth) {
        newClass = "custom-btn-right";
      } else {
        newClass = "custom-btn-center";
      }
    }
    var clearedClassList = buttonRef.current.className
      .replace(/custom-btn-center|custom-btn-right|custom-btn-left/gi, "")
      .trim();
    buttonRef.current.className = clearedClassList + " " + newClass;
  }

  function handleMouseLeave() {
    buttonRef.current.classList.remove(
      "custom-btn-center",
      "custom-btn-right",
      "custom-btn-left",
      "custom-btn-active"
    );
  }

  return (
    <>
      <div
        className={`custom-btn-wrapper${classes ? classes : ""}`}
        onClick={!disabled ? onClick : undefined}
      >
        <a
          className="custom-btn"
          ref={buttonRef}
          onMouseLeave={() => handleMouseLeave()}
          onMouseMove={(e) => handleMouseMove(e)}
          onMouseDown={() => handleMouseDown()}
          onMouseUp={() => handleMouseUp()}
          role="button"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <span
            className={`custom-btn-inner ${
              disabled ? "custom-btn-disabled" : ""
            }`}
          >
            <span className="content-wrapper">
              <span className="custom-btn-content">
                <span className="custom-btn-content-inner">
                  {buttonText ? buttonText : "Button"}
                </span>
              </span>
            </span>
          </span>
        </a>
      </div>
    </>
  );
}
