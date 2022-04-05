import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/">
					<Route path="teams">
						<Route path=":teamName" element={<TeamPage />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;

// hook effects and state
