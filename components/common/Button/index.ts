import styled, { StyledFunction } from 'styled-components';

interface IProps {
  disabled: Boolean;
  secondary: Boolean;
  as: any;
}
type DefFunc = IProps & React.HTMLProps<any>;

const But: StyledFunction<DefFunc> = styled.button;

export const Button = But`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #0074d9;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;
