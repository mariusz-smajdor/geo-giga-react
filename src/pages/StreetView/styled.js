import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: calc(100vw - ${({ theme }) => theme.layout.navbar}px);
  margin: 0 0 0 ${({ theme }) => theme.layout.navbar}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin: 0 0 ${({ theme }) => theme.layout.smallNavbar}px 0;
    height: calc(100vh - ${({ theme }) => theme.layout.smallNavbar}px);
    width: 100vw;
  } ;
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  padding: 25px;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.color.secondary} 0px 2px 8px 0px;
  background: ${({ theme }) => theme.color.primary};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    flex-direction: column;
  } ;
`;

export const Street = styled.div`
  height: 100vh;
  width: 100vw;
`;
