export const spaceportActionTypes = {
  LOAD_SPACEPORTS_LIST: 'LOAD_SPACEPORTS_LIST',
  LOAD_SPACEPORTS_LIST_SUCCESS: 'LOAD_SPACEPORTS_LIST_SUCCESS',
  LOAD_SPACEPORTS_LIST_FAIL: 'FAIL',
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

export const spaceportActions = {
  loadSpaceportsList,
  loadSpaceportsListSuccess,
  loadSpaceportsListFail,
};

export default spaceportActions;
