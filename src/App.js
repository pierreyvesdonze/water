import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Intro from './components/Intro';
import Intro2 from './components/Intro2';
import Composition from './components/Composition';
import StateSection from './components/StateSection';
import Damage from './components/Damage';
import Survive from './components/Survive';
import Cloud from './components/Cloud';
import Steak from './components/Steak';
import Preserve from './components/Preserve';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const body = document.body;
const scrollHandlerColor = () => {
	const scrollY = window.scrollY;

	// Calcul de la couleur en fonction de la position de défilement
	const red = Math.min(255, Math.floor(scrollY / 85));
	const green = Math.min(255, Math.floor(scrollY / 40));
	const blue = Math.min(255, Math.floor(scrollY / 20));

	// Appliquer la nouvelle couleur de fond
	body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

window.addEventListener('scroll', scrollHandlerColor);

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline>
				<div className="App">
          <Intro />
          <Intro2 />
          <Composition />
          <StateSection />
          <Survive />
          <Cloud />
          <Steak />
          <Damage />
          <Preserve />
				</div>
			</CssBaseline>
		</ThemeProvider>
	);
}

export default App;
