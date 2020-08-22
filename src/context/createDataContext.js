import React, { useReducer } from 'react';
import { Container } from 'native-base';

export default (reducer, actions, initialState) => {
	const Context = React.createContext();

	const Provider = ({ children }) => {
		const [state, dispatch] = useReducer(reducer, initialState);

		// actions === addBlogPosts

		const boundActions = {};

		for (let key in actions) {
			boundActions[key] = actions[key](dispatch);
		}
		return (
			<Context.Provider value={{ state, ...boundActions }}>
				<Contanpm iner>{children}</Contanpm>
			</Context.Provider>
		);
	};

	return { Context, Provider };
};
