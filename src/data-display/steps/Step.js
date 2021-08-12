import React from "react";
import PropTypes from "prop-types";

import Icon from "../../general/icon/Icon.js";
import { Tail } from "./styles.js";

const Step = ({ title, description, icon, stepNumber, ...props }) => {
  const STEP_STATUS_ICON = {
    error: (
      <Icon
        kind="bold"
        group="interface-essential"
        category="alerts"
        file="alert-triangle.svg"
        size="64"
        color="#000000"
      />
    ),
    finished: (
      <Icon
        kind="bold"
        group="interface-essential"
        category="form-validation"
        file="check-circle-1.svg"
        size="64"
        color="#000000"
      />
    ),
    processing: null,
    waiting: null
  };

  const renderIcon = () => {
    !icon ? (
      <span className="iconNode">
        {STEP_STATUS_ICON[props.status]
          ? STEP_STATUS_ICON[props.status]
          : stepNumber}
      </span>
    ) : (
      <span className="iconNode">{icon}</span>
    );
  };

  console.log("Status:" + props.status);

  return (
    <div>
      <Tail />
      <div>{renderIcon()}</div>
      <div className="content">
        {<div className="title">{title}</div>}
        {description && <div className="description">{description}</div>}
      </div>
    </div>
  );
};

Step.propTypes = {
  /** description of the step */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** icon of the step */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** status of step */
  status: PropTypes.oneOf(["error", "finished", "processing", "waiting"]),
  /** title of the step */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

Step.defaultProps = {
  status: "waiting",
  icon: null,
  description: ""
};

export default Step;
