import React from "react";
import PropTypes from "prop-types";

import Icon from "../../general/icon/Icon.js";
import { StepContainer, StepIcon, Tail } from "./styles.js";

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

const Step = ({ title, description, icon, ...props }) => {
  const containerProps = {
    stepNumber: props.stepNumber,
    status: props.status,
    icon
  };

  const renderIcon = () =>
    !icon ? (
      <span className="iconNode">
        {!STEP_STATUS_ICON[props.status] && props.stepNumber}
      </span>
    ) : (
      <span className="iconNode">{icon}</span>
    );

  return (
    <StepContainer {...containerProps} style={props.style}>
      <Tail />
      <StepIcon className="icon">{renderIcon()}</StepIcon>
      <div className="content">
        {<div className="title">{title}</div>}
        {description && <div className="description">{description}</div>}
      </div>
    </StepContainer>
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
