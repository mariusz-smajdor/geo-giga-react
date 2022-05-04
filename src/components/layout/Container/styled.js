import styled from 'styled-components';

export const Wrapper = styled.main`
  margin-left: ${({ theme }) => theme.layout.navbar};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-left: unset;
    margin-bottom: ${({ theme }) => theme.layout.smallNavbar};
  }
`;
