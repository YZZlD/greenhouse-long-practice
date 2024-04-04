import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import {useTheme} from '../../context/ThemeContext.js';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  const {themeName} = useTheme()
  const image = themeName == "day" ? dayImage : nightImage;
  return (
    <section>
      <img  className='greenhouse-img'
            src={image}
            alt='greenhouse'
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
