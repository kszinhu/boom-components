import styled from "styled-components";

export const Tail = styled.div`
  position: absolute;
  border-color: #ccc;
`;

// Steps

export const StepWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 30px;
`;

// Step

export const StepContainer = styled.div`
  overflow: hidden;
  position: relative;
  padding: 0;
  margin: 0;
  padding-left: 40px;

  flex-grow: ${props => props.stepNumber};

  &:not(:first-child) {
    padding-left: 50px;
  }

  &:last-child {
    flex-shrink: 0;
  }
`;

export const StepIcon = styled.div`
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 16px;
  line-height: 1.75;
  color: #34c3ff;
  top: 0;
  left: 10px;

  border-radius: 50%;
  border: 2px solid #34c3ff;

  & > span {
    width: 100%;
    display: block;
    text-align: center;
  }
`;
