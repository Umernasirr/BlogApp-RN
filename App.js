import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
// react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import IndexScreen from './src/screens/IndexScreens';

// context
import { Provider as BlogProvider } from './src/context/BlogContext';

const App = () => {
	const [isReady, setIsReady] = useState(false);

	const IndexStack = createStackNavigator();

	useEffect(() => {
		console.log('hi');
		async function LoadFonts() {
			await Font.loadAsync({
				Roboto: require('native-base/Fonts/Roboto.ttf'),
				Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
				...Ionicons.font,
			});
			setIsReady(true);
		}

		LoadFonts();
	}, []);

	//render
	if (!isReady) {
		return <AppLoading />;
	}
	return (
		<NavigationContainer>
			<IndexStack.Navigator>
				<IndexStack.Screen name="Index" component={IndexScreen} options={{ title: 'Blog' }} />
			</IndexStack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default () => {
	return (
		<BlogProvider>
			<App />
		</BlogProvider>
	);
};
