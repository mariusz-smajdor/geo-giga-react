import styled from 'styled-components';

export const Wrapper = styled.main`
  margin-left: ${({ theme }) => theme.layout.navbar}px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-left: unset;
    margin-bottom: ${({ theme }) => theme.layout.smallNavbar}px;
  }
`;
