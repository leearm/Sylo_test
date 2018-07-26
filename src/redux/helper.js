import {toggleMenu} from './actions';

function mapStateToProps(state) {
  return {
    menuOpen: state.menuOpen
  };
}


function mapActionsToProps(dispatch) {
  return {
    toggleMenu: () => {
      dispatch(toggleMenu())
    }
  };
}

export {mapStateToProps, mapActionsToProps}