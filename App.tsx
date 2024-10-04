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
import Groups from '@screens/Groups';
import NewGroup from "@screens/NewGroup";
import Loading from '@components/Loading';
import Players from "@screens/Players";

export default function App() {
	const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

	return (
		<ThemeProvider theme={theme}>
			{fontsLoaded ? <Players/> : <Loading/>}
			<StatusBar style="light"/>
		</ThemeProvider>
	);
}
