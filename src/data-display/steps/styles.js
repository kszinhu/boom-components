import styled, { css } from "styled-components";

// TO DO: change this function
const backgroundbyStatus = status => {
  switch (status) {
    case "processing":
      return "#34c3ff";

    default:
      break;
  }
};

const colorbyStatus = (status, context) => {
  switch (status) {
    case "error":
      return context == "tail" ? "#8F96A3" : "#CC0000";

    case "finished":
      return "#34c3ff";

    case "waiting":
      return "#8F96A3";

    case "processing":
      return context == "tail" ? "#8F96A3" : "#FFF";

    default:
      break;
  }
};

const large_iconDiameter = 30;
const small_iconDiameter = 24;

export const Tail = styled.div`
  position: absolute;
  top: 70%;
  border-left-width: 2px;
  border-left-style: solid;
  ${props =>
    props.vertical
      ? css`
      top: 40px
      left: ${props => (props.size == "default" ? 16 : 13)}px;
      bottom: 0;
      border-color: ${props => colorbyStatus(props.status, "tail")};
    `
      : css`
      top: 15px
      left: 100%
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
  width: ${props =>
    props.size == "default" ? large_iconDiameter : small_iconDiameter}px;
  height: ${props =>
    props.size == "default" ? large_iconDiameter : small_iconDiameter}px;
  text-align: center;
  font-size: ${props => (props.size == "default" ? 16 : 14)}px;
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
  font-size: ${props => (props.size == "default" ? 16 : 14)}px;
  ${props => props.status == "error" && "color: #CC0000"};
  font-weight: bold;
  line-height: 1.875;
  padding-right: 10px;
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
  font-size: ${props => (props.size == "default" ? 15 : 14)}px;
  font-weight: normal;
  margin-top: ${props => (props.size == "default" ? 7 : 0)}px;
  ${props => props.status == "error" && "color: #CC0000"};
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
            padding-left: ${props => (props.size == "default" ? 50 : 45)}px
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
