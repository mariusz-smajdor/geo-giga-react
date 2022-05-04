import styled from 'styled-components';

export const Form = styled.form`
  flex-direction: column;
  gap: 25px;
  padding: 25px;
  max-width: ${({ theme }) => theme.breakpoint.small}px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.primary};
  display: flex;
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: normal;
`;

export const Key = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    grid-template-columns: unset;
  }
`;
