import {StatusBar} from 'expo-status-bar';

/* Font - Google */
import {
	useFonts,
	Roboto_400Regular,
	Roboto_700Bold
} from '@expo-google-fonts/roboto'

/* Theme */
import {ThemeProvider} from 'styled-components/native'
import theme from '@theme/index'

/* View */
import Loading from '@components/Loading';
import {Routes} from "@routes/index";

export default function App() {
	const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

	return (
		<ThemeProvider theme={theme}>
			{fontsLoaded ? <Routes/> : <Loading/>}
			<StatusBar style="light"/>
		</ThemeProvider>
	);
}
