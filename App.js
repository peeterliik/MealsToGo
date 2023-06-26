import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infra/theme';
import { Navigation } from './src/infra/navigation';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

export default function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	let [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});
	let [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<AuthenticationContextProvider>
					<Navigation />
				</AuthenticationContextProvider>
			</ThemeProvider>
			<StatusBar style='auto' />
		</>
	);
}
