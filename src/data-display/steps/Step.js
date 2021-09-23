import React from "react";
import PropTypes from "prop-types";

import Icon from "../../general/icon/Icon.js";
import {
  StepContainer,
  StepContent,
  StepTitle,
  StepDescription,
  StepIcon,
  Tail
} from "./styles.js";

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
      file="check-1.svg"
      size="16"
      color="#34c3ff"
    />
  ),
  processing: null,
  waiting: null
};

const Step = ({ title, description, icon, ...props }) => {
  const containerProps = {
    stepNumber: props.stepNumber,
    status: props.status,
    vertical: props.vertical,
    size: props.size,
    icon
  };

  const titleProps = {
    status: props.status,
    vertical: props.vertical,
    size: props.size
  };

  const iconProps = {
    status: props.status,
    size: props.size
  };

  const tailProps = {
    vertical: props.vertical,
    status: props.status,
    size: props.size
  };

  const descriptionProps = {
    size: props.size
  };

  const renderIcon = () =>
    !icon ? (
      <span className="iconNode">
        {STEP_STATUS_ICON[props.status]
          ? STEP_STATUS_ICON[props.status]
          : props.stepNumber}
      </span>
    ) : (
      <span className="iconNode">{icon}</span>
    );

  return (
    <StepContainer {...containerProps} style={props.style}>
      <Tail {...tailProps} />
      <StepIcon className="icon" {...iconProps}>
        {renderIcon()}
      </StepIcon>
      <StepContent className="content">
        {
          <StepTitle className="title" {...titleProps}>
            {title}
          </StepTitle>
        }
        {description && (
          <StepDescription className="description" {...descriptionProps}>
            {description}
          </StepDescription>
        )}
      </StepContent>
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
