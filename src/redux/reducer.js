//Update state
export default (state = {}, action) => {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case 'LOAD_DATA':
            newState.users = action.data;
            return newState;
		case 'TOGGLE_MENU':
			newState.menuOpen = !state.menuOpen;
			return newState;
		default:
			return state;
	}
};