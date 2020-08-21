import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Text, Header } from 'native-base';

export default function App() {
	return (
		<Container>
			<Header>
				<Text>Header Text</Text>
			</Header>
			<Text>Open up App.js to start working on your app!</Text>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
