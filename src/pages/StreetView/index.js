import ReactStreetview from 'react-streetview';
import { useLocation } from 'react-router-dom';

import { useCountries } from '../../hooks/useCountries';
import Loading from '../../components/UI/Loading';
import { Wrapper, Street } from './styled';

function StreetView() {
  const { state } = useLocation();
  const { data } = useCountries();

  const googleKey = state;

  return (
    <Wrapper>
      {data.status === 'loading' && <Loading />}
      {googleKey !== '' && data.status === 'success' && (
        <Street>
          <ReactStreetview
            apiKey={googleKey}
            streetViewPanoramaOptions={{
              position: {
                lat: data.drawnCountry.streetView[0],
                lng: data.drawnCountry.streetView[1],
              },
              pov: { heading: 100, pitch: 0 },
              zoom: 1,
              disableDefaultUI: true,
              showRoadLabels: false,
            }}
          />
        </Street>
      )}
    </Wrapper>
  );
}

export default StreetView;
