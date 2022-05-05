import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: ${({ theme }) => theme.breakpoint.small}px;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.color.secondary} 0px 2px 8px 0px;
  background: ${({ theme }) => theme.color.primary};
  padding: 20px;
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: normal;
  font-size: 22px;
`;

export const Text = styled.p`
  line-height: 1.5;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: 2px underline;
  }
`;
