import { GeoJSON } from 'react-leaflet';

import mapData from './countries.json';
import { Map } from './styled';

function Lands() {
  console.log(mapData);

  return (
    <Map zoom={2} center={[0, 0]}>
      <GeoJSON data={mapData.features}></GeoJSON>
    </Map>
  );
}

export default Lands;
