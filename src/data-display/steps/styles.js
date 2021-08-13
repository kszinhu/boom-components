import styled from "styled-components";

export const Tail = styled.div`
  position: absolute;
  border-color: #34c3ff;
  top: 30px;
  left: 15px;
  border-left-width: 1px;
  border-left-style: solid;
`;

// Steps

export const StepWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 35px;
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
  line-height: 1.75;
  color: #34c3ff;
  top: 0;
  left: 0;

  border-radius: 50%;
  border: 2px solid #34c3ff;

  & > span {
    width: 100%;
    display: block;
    text-align: center;
  }
`;

export const StepTitle = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 1.5;
  padding-right: 15px;
  display: inline-block;

  &:empty {
    padding-right: 0;
  }

  &:after {
    position: absolute;
    content: "";
    top: 15px;
    left: 100%;
    width: 9999px;
    border-top: 2px solid #34c3ff;
  }
`;

export const StepContainer = styled.div`
  overflow: hidden;
  position: relative;
  padding: 0;
  margin: 0;
  padding-left: 40px;

  flex-grow: ${props => props.stepNumber};

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
`;
