import { FC } from 'react';
import config from '../../config';
import './App.css';

const App: FC = () =>
{
	return (
		<div className="App">
      <div>{config.REACT_APP_API_ENDPOINT}</div>
		</div>
	);
}

export default App;
