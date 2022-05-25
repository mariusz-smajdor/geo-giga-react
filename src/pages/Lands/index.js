import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import { Map } from './styled';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

function Lands() {
  return (
    <Map>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              return <Geography key={geo.rsmKey} geography={geo} />;
            })
          }
        </Geographies>
      </ComposableMap>
    </Map>
  );
}

export default Lands;
