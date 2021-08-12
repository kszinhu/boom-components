import React from "react";
import PropTypes from "prop-types";

const Steps = ({
  current,
  initial,
  size,
  useDots,
  vertical,
  verticalLabels,
  children,
  ...props
}) => {
  // Get the number of steps
  const count = React.Children.count(children);
  const items = React.Children.map(children, (item, index) => {
    const itemProps = {
      stepNumber: index + 1,
      status: "waiting"
      // To do: Add properties for item style control
    };

    if (!item.props.status) {
      if (index === current) {
        itemProps.status = currentStatus;
      } else if (index < current) {
        itemProps.status = "finished";
      }
    }
    return itemProps;
  });

  console.log(items);
  console.log("Count:" + count);

  return <div className="steps">{items}</div>;
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
  /** whether labels are in vertical direction */
  verticalLabels: PropTypes.bool
};

Steps.defaultProps = {
  current: 0,
  initial: 0,
  size: "default",
  useDots: false,
  vertical: false,
  verticalLabels: false
};

export default Steps;
