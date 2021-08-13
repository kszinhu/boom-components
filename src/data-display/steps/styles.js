import styled, { css } from "styled-components";

const backgroundbyStatus = status => {
  switch (status) {
    case "error":
      return "#9D0208";

    case "finished":
      return "none";

    case "waiting":
      return "none";

    case "processing":
      return "#34c3ff";

    default:
      break;
  }
};

const colorbyStatus = (status, context) => {
  switch (status) {
    case "error":
      return "#9D0208";

    case "finished":
      return "#34c3ff";

    case "waiting":
      return "#8F96A3";

    case "processing":
      return context == "icon" ? "white" : "#8F96A3";

    default:
      break;
  }
};

export const Tail = styled.div`
  position: absolute;
  border-color: #34c3ff;
  top: 30px;
  left: 15px;
  border-left-width: 1px;
  border-left-style: solid;
  ${props =>
    props.vertical &&
    css`
      top: 10px;
      left: 15px;
      bottom: 0;
      border-left-width: 1px;
      border-left-style: solid;
    `};
`;

// Steps

export const StepWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 35px;
  ${props => props.vertical && "flex-direction: column"};
`;

// Step

export const StepContent = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
`;

export const StepIcon = styled.div`
  display: flex;
  position: absolute;
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  background-color: ${props => backgroundbyStatus(props.status)};
  color: ${props => colorbyStatus(props.status, "icon")};
  top: 0;
  left: 0;

  border-radius: 50%;
  border: 2px solid ${props => colorbyStatus(props.status, "icon")};
  transition: background-color 0.3s, border-color 0.3s;

  & > span {
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const StepTitle = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.875;
  padding-right: 15px;
  min-height: 16px;
  display: inline-block;

  &:empty {
    padding-right: 0;
  }

  ${props =>
    !props.vertical &&
    css`
      &:after {
        position: absolute;
        content: "";
        top: 15px;
        left: 100%;
        width: 9999px;
        border-top: 2px solid ${props => colorbyStatus(props.status, "tail")};
      }
    `}
`;

export const StepDescription = styled.div`
  margin-top: 7px;
`;

export const StepContainer = styled.div`
  overflow: hidden;
  position: relative;
  padding: 0;
  margin: 0;
  padding-left: 40px;

  flex-grow: ${props => props.stepNumber};

  ${props =>
    !props.vertical
      ? css`
          &:not(:first-child) {
            padding-left: 50px;

            ${StepIcon} {
              left: 10px;
            }
          }

          &:last-child {
            flex-shrink: 0;

            ${StepTitle}:after {
              display: none;
            }
          }
        `
      : css`
          padding-bottom: 20px;
          &:not(:first-child) {
            margin-top: 10px;
          }
          &:last-child ${Tail} {
            display: none;
          }
        `}
`;
