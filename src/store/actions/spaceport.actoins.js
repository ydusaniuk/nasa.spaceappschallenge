export const spaceportActionTypes = {
  LOAD_SPACEPORTS_LIST: 'LOAD_SPACEPORTS_LIST',
  LOAD_SPACEPORTS_LIST_SUCCESS: 'LOAD_SPACEPORTS_LIST_SUCCESS',
  LOAD_SPACEPORTS_LIST_FAIL: 'FAIL',

  SET_ACTIVE_PORT: 'SET_ACTIVE_PORT',
  SET_ACTIVE_PORT_SUCCESS: 'SET_ACTIVE_PORT_SUCCESS',
};

const loadSpaceportsList = () => {
  return {
    type: spaceportActionTypes.LOAD_SPACEPORTS_LIST,
  }
};

const loadSpaceportsListSuccess = (ports) => {
  return {
    type: spaceportActionTypes.LOAD_SPACEPORTS_LIST_SUCCESS,
    payload: ports,
  }
};

const loadSpaceportsListFail = (error) => {
  return {
    type: spaceportActionTypes.LOAD_SPACEPORTS_LIST_FAIL,
    payload: error
  }
};

const setActiveSpaceport = (port) => {
  return {
    type: spaceportActionTypes.SET_ACTIVE_PORT,
    payload: port,
  }
};

const setActiveSpaceportSuccess = () => {
  return {
    type: spaceportActionTypes.SET_ACTIVE_PORT_SUCCESS,
  }
};

export const spaceportActions = {
  loadSpaceportsList,
  loadSpaceportsListSuccess,
  loadSpaceportsListFail,

  setActiveSpaceport,
  setActiveSpaceportSuccess,
};

export default spaceportActions;
