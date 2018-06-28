
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const cara = require('../images/moeda_cara.png');
const coroa = require('../images/moeda_coroa.png');

const s = StyleSheet.create({
	backgroundScene: {
		backgroundColor: '#61BD8C',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 50
	}
});

export default class SobreJogo extends Component {
	constructor(props) {
		super(props);
		this.state = { resultado: '' };
	}

	componentWillMount() {
		const num = Math.floor(Math.random() * 2);
		let caraOuCoroa = '';
		if (num === 0) {
			caraOuCoroa = 'cara';
		} else {
			caraOuCoroa = 'coroa';
		}

		this.setState({ resultado: caraOuCoroa });
	}

	render() {
		if (this.state.resultado === 'cara') {
			return (
				<View style={s.backgroundScene}>
					<Image source={cara} />
				</View>
			);
		} else if (this.state.resultado === 'coroa') {
			return (
				<View style={s.backgroundScene}>
					<Image source={coroa} />
				</View>
			);
		}
	}
}

