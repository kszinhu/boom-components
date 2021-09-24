import React from "react";
import PropTypes from "prop-types";

import Icon from "../../general/icon/Icon.js";
import {
  StepContainer,
  StepContent,
  StepTitle,
  StepDescription,
  StepIcon,
  Tail,
  IconDot
} from "./styles.js";

const STEP_STATUS_ICON = {
  error: (
    <Icon
      kind="bold"
      group="interface-essential"
      category="form-validation"
      file="close.svg"
      size="16"
      color="#CC0000"
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

const Step = ({ title, description, icon, useDots, ...props }) => {
  const containerProps = {
    stepNumber: props.stepNumber,
    status: props.status,
    vertical: props.vertical,
    size: props.size,
    useDots,
    icon
  };

  const titleProps = {
    status: props.status,
    vertical: props.vertical,
    size: props.size
  };

  const iconProps = {
    status: props.status,
    size: props.size,
    useDots
  };

  const tailProps = {
    vertical: props.vertical,
    status: props.status,
    size: props.size
  };

  const descriptionProps = {
    size: props.size,
    status: props.status
  };

  const dotProps = {
    status: props.status
  };

  const renderIcon = () => {
    if (!useDots) {
      if (!icon) {
        return (
          <span className="icon-node">
            {STEP_STATUS_ICON[props.status]
              ? STEP_STATUS_ICON[props.status]
              : props.stepNumber}
          </span>
        );
      } else {
        return <span className="icon-node">{icon}</span>;
      }
    } else {
      debugger;
      return <IconDot {...dotProps} />;
    }
  };

  return (
    <StepContainer {...containerProps} style={props.style}>
      <Tail className="tail" {...tailProps} />
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
  icon: null,
  description: ""
};

export default Step;
