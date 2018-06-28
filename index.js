
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import principal from './src/components/Principal';
import sobreJogo from './src/components/SobreJogo';
import outrosJogos from './src/components/OutrosJogos';
import resultado from './src/components/Resultado';

export default class caraCoroa extends Component {
	render() {
		return (
			<Router>
				<Scene key='principal' component={principal} initil title='Cara ou Coroa' />
				<Scene key='sobreJogo' component={sobreJogo} />
				<Scene key='outrosJogos' component={outrosJogos} />
				<Scene key='resultado' component={resultado} />
			</Router>
		);
	}
}

AppRegistry.registerComponent('caraCoroa', () => caraCoroa);
