
import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../images/logo.png');
const btnJogar = require('../images/botao_jogar.png');
const btnSobreJogo = require('../images/sobre_jogo.png');
const btnOutrosJogos = require('../images/outros_jogos.png');

const s = StyleSheet.create({
	cenaPrincipal: {
		flex: 1,
		backgroundColor: '#61BD8C'
	},
	centro: {
		flex: 10, 
		justifyContent: 'center',
		alignItems: 'center'
	},
	rodape: {
		flex: 1, 
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});

export default class Principal extends Component {
	render() {
		return (
			<View style={s.cenaPrincipal}>
				<View style={s.centro}>
					<Image source={logo} />
					<TouchableHighlight 
						onPress={() => { Actions.resultado(); }}
					>
					<Image source={btnJogar} />
					</TouchableHighlight>

				</View>

				<View style={s.rodape}>
					<TouchableHighlight 
						onPress={() => { Actions.sobreJogo(); }}
					>
						<Image source={btnSobreJogo} />
					</TouchableHighlight>

					<TouchableHighlight 
						onPress={() => { Actions.outrosJogos(); }}
					>
						<Image source={btnOutrosJogos} />
					</TouchableHighlight>
				</View>

			</View>
		);
	}
}
