import {toggleMenu, loadData} from './actions';

function mapStateToProps(state) {
  return {
    menuOpen: state.menuOpen,
    users: state.users
  };
}

function mapActionsToProps(dispatch) {
  return {
    toggleMenu: () => {
      dispatch(toggleMenu())
    },
    loadData: (data) => {
        dispatch(loadData(data))
    }
  };
}

export {mapStateToProps, mapActionsToProps}