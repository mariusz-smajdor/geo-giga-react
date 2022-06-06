import { GeoJSON } from 'react-leaflet';

import mapData from './countries.json';
import { theme } from '../../theme';
import { Map } from './styled';

function Lands() {
  function onEachCountry(country, layer) {
    layer.on({
      click: e => {
        e.target.setStyle({
          fillColor: theme.color.primary,
          color: theme.color.text,
        });
      },
    });
  }

  const countryStyles = {
    fillColor: 'white',
    fillOpacity: 1,
    color: '#333',
    weight: 0.5,
  };

  return (
    <Map zoom={2} center={[0, 0]}>
      <GeoJSON
        style={countryStyles}
        data={mapData.features}
        onEachFeature={onEachCountry}
      ></GeoJSON>
    </Map>
  );
}

export default Lands;
