import React from "react";
import PropTypes from "prop-types";

import { StepWrapper } from "./styles.js";

const Steps = ({
  current,
  initial,
  size,
  useDots,
  vertical,
  verticalLabels,
  children,
  status,
  ...props
}) => {
  // Get the number of steps
  const count = React.Children.count(children);
  const items = React.Children.map(children, (item, index) => {
    const itemStyle = !vertical
      ? {
          flexBasis: index < count - 1 ? `${100 / (count - 1)}%` : undefined,
          maxWidth: index == count - 1 ? `${100 / count}%` : undefined
        }
      : {
          width: "100%"
        };

    const itemProps = {
      stepNumber: index + 1,
      status: "waiting",
      style: itemStyle,
      vertical,
      size
    };

    debugger;

    if (item.props.status) {
      if (index == current) {
        itemProps.status = status;
      } else if (index < current) {
        itemProps.status = "finished";
      }
    }
    return (item = React.cloneElement(item, itemProps));
  });

  const wrapperProps = {
    vertical,
    status
  };

  return (
    <StepWrapper className="steps" {...wrapperProps}>
      {items}
    </StepWrapper>
  );
};

Steps.propTypes = {
  /** Current step counting from 0. Using status of Step this will be overwritten. */
  current: PropTypes.number,
  /** set initial step counting from 0 */
  initial: PropTypes.number,
  /** size of step bar */
  size: PropTypes.oneOf(["default", "small"]),
  /** Steps with dot style. Vertical will be set to true. */
  useDots: PropTypes.bool,
  /** whether steps are vertical */
  vertical: PropTypes.bool,
  /** current step status */
  status: PropTypes.oneOf(["error", "finished", "processing", "waiting"])
};

Steps.defaultProps = {
  current: 0,
  initial: 0,
  size: "default",
  useDots: false,
  vertical: false,
  status: "processing"
};

export default Steps;
