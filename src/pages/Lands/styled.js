import styled from 'styled-components';

export const Map = styled.section`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: calc(100% - ${({ theme }) => theme.layout.navbar}px);
  margin-left: ${({ theme }) => theme.layout.navbar}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 100%;
    margin-left: 0;
    height: calc(100vh - ${({ theme }) => theme.layout.smallNavbar}px);
  } ;
`;
