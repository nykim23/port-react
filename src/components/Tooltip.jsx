import React, { Component } from "react";
import { usePopperTooltip } from "react-popper-tooltip";
import "react-popper-tooltip/dist/styles.css";

import RotatingText from "react-rotating-text";
// import 'rotating-text/dist/index.css';

const Tooltip = ({ tooltip, children, ...props }) => {
  const {
    getTooltipProps,
    getArrowProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    // trigger: 'hover', // 기본값이 hover
    // placement: 'top', // 필요시 위치 지정
  });

  return (
    <>
      <div ref={setTriggerRef} {...props} style={{ cursor: "pointer" }} className="tooltip_box">
        {children}
      </div>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: "tooltip-container" })}
        >
          <div {...getArrowProps({ className: "tooltip-arrow" })} />
          {tooltip}
        </div>
      )}

      <RotatingText
        text="HOVERME"
        stagger={0.1}
        timing={0.5}
        className="rotating-text"
        styles={{ fontSize: '100px' }}
        items={['React', 'Vue', 'JS', 'HTML', 'SCSS']}
      />
      
    </>
  );
};

export default Tooltip;