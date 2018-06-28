
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';


const s = StyleSheet.create({
	textoInformacoes: {
		fontSize: 24,
		fontWeight: '500',
		color: 'white',
		marginTop: 70
	},
	backgroundScene: {
		backgroundColor: '#61BD8C',
		flex: 1,
		alignItems: 'center',
	}
});

export default class OutrosJogos extends Component {
	render() {
		return (
			<View style={s.backgroundScene}>
				<Text style={s.textoInformacoes}>Informações sobre outros jogos.</Text>
			</View>
		);
	}
}

