import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = function ({ children }) {
	const [state, setState] = useState({
		loading: false,
		notification: {
			show: false,
			text: '',
		},
		modal: {
			show: false,
			id: '',
		},
		loadingData: {
			showModal: false,
		},
	});

	return (
		<GlobalContext.Provider value={{ state, setState }}>
			{children}
		</GlobalContext.Provider>
	);
};

