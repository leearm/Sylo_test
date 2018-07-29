export const toggleMenu = () => {
	return {
		type: 'TOGGLE_MENU'
	};
};

//Load data 
export const loadData = (data) => {
	return {
		type: 'LOAD_DATA',
		data: data
	}
};