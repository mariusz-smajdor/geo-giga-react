import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const Map = styled(MapContainer)`
  height: 100vh;
  width: calc(100% - ${({ theme }) => theme.layout.navbar}px);
  margin-left: ${({ theme }) => theme.layout.navbar}px;
  background: #7fcdff;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 100%;
    margin-left: 0;
    height: calc(100vh - ${({ theme }) => theme.layout.smallNavbar}px);
  } ;
`;
