import ReactSlider from "react-slider";
import "./Hygrometer.css";

import {useClimate} from '../../context/ClimateContext';
import { useEffect, useState } from 'react';

function Hygrometer() {
  const {humidity, setHumidity} = useClimate();
  const [desiredHumidity, setDesiredHumidity] = useState(humidity);

  useEffect(() => {
    const humidityTimeout = setTimeout(() => {
      return (desiredHumidity > humidity) ? setHumidity(humidity => humidity + 1)
        : (desiredHumidity < humidity) ? setHumidity(humidity => humidity - 1)
        : null;
    }, 500)

    return () => clearTimeout(humidityTimeout);
  }, [desiredHumidity, humidity]);
  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={desiredHumidity}
        onAfterChange={(val) => {setDesiredHumidity(val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
