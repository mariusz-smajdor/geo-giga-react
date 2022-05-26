import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';

import { Map } from './styled';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

function Lands() {
  return (
    <Map>
      <ComposableMap>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                return <Geography key={geo.rsmKey} geography={geo} />;
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </Map>
  );
}

export default Lands;
