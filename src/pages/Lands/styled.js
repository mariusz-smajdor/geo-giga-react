import styled from 'styled-components';

export const Map = styled.section`
  height: 100vh;
  width: calc(100% - ${({ theme }) => theme.layout.navbar}px);
  margin-left: ${({ theme }) => theme.layout.navbar}px;
`;
