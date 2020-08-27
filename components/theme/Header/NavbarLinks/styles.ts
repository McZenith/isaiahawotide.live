import styled, { StyledFunction } from 'styled-components';

interface IProps {
  desktop: Boolean;
}
type DefFunc = IProps & React.HTMLProps<HTMLInputElement>;

const Div: StyledFunction<DefFunc> = styled.div;

export const Wrapper = Div`
  a {
    color: #6d6d6d;
    text-decoration: none;
  }

  ${({ desktop }: IProps) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
