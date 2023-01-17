import React, { useState } from "react";
import styled, { css } from "styled-components";
import { color, space } from "@styles/theme";
export enum SelectDisabled {
  true = "true",
  false = "false",
}

type SelectProps = {
  disabled?: SelectDisabled;
  options: SelectOption[];
};

export type SelectOption = {
  label: string;
  id: number;
};

const Container = styled.div<{ disabled: SelectDisabled }>`
  position: relative;
  width: 320px;
  min-height: 44px;
  border: 1px solid ${color("gray", 300)};
  display: flex;
  align-items: center;
  padding: 0 14px;
  border-radius: 8px;
  outline: none;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

  ${(props) => {
    switch (props.disabled) {
      case SelectDisabled.true:
        return css`
          background-color: ${color("gray", 50)};
        `;
      case SelectDisabled.false:
        return css`
          &:hover,
          &:focus {
            border: 1px solid #d6bbfb;
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px #f4ebff;
          }
        `;
    }
  }}
`;

const Span = styled.span<{ value: string; disabled: SelectDisabled }>`
  width: fit-content;
  display: flex;
  align-items: center;
  border-radius: ${space(4)};
  flex-grow: 1;

  color: ${({ value }) =>
    value === "" ? color("gray", 500) : color("gray", 900)};

  ${(props) => {
    switch (props.disabled) {
      case SelectDisabled.true:
        return css`
          color: ${color("gray", 500)};
        `;
    }
  }}
`;

const Arrow = styled.div<{ isOpen: boolean }>`
  height: 5.4px;
  width: 5.4px;
  border-top: 2px solid ${color("gray", 500)};
  border-right: 2px solid ${color("gray", 500)};
  rotate: 135deg;
  translate: 0 -25%;

  ${(props) => {
    if (props.isOpen) {
      return css`
        rotate: -45deg;
        translate: 0 25%;
      `;
    }
  }}
`;

const Check = styled.div`
  height: 5.4px;
  width: 11px;
  border-top: 2px solid ${color("primary", 600)};
  border-right: 2px solid ${color("primary", 600)};
  rotate: 135deg;
  translate: 0 -25%;
`;

const OptionDiv = styled.div`
  padding: 0 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Ul = styled.ul`
  position: absolute;
  margin: 0;
  padding: 10px 0;
  list-style: none;
  max-height: 320px;
  overflow-y: auto;

  border-radius: 0.25em;
  width: 100%;
  left: 0;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.1),
    0px 4px 6px -2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  top: calc(100% + 8px);
  background-color: white;
  z-index: 100;
`;

const Li = styled.li`
  cursor: pointer;
  flex-grow: 1;
  font-size: 16px;
  padding: 10px 0;
`;

const styles = {
  highlighted: {
    backgroundColor: "#FCFAFF",
  },
  notOpen: {
    display: "none",
  },
};

export function Select({
  disabled = SelectDisabled.true,
  options,
}: SelectProps) {
  const [value, setValue] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [currentOption, setCurrentOption] = useState(1000);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container
      tabIndex={0}
      disabled={disabled}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <Span disabled={disabled} value={value}>
        {value === "" ? "Select team member" : value}
      </Span>
      <Arrow isOpen={disabled === "false" && isOpen} />
      <Ul style={!isOpen || disabled === "true" ? styles.notOpen : {}}>
        {options?.map((option, index) => (
          <OptionDiv key={option.id}>
            <Li
              style={index === highlightedIndex ? styles.highlighted : {}}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentOption(index);
                //   selectOption(option);
                //   setIsOpen(false);
                setValue(option.label);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}

              // className={`${styles.option} ${
              //   isOptionSelected(option) ? styles.selected : ""
              // }   ${index === highlightedIndex ? styles.highlighted : ""}`}
            >
              {option.label}
            </Li>
            {currentOption === index && <Check />}
          </OptionDiv>
        ))}
      </Ul>
    </Container>
  );
}
