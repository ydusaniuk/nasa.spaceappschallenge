export const launchesActionTypes = {
  FIND_CLOSEST_LAUNCH: 'FIND_CLOSEST_LAUNCH',
  FIND_CLOSEST_LAUNCH_SUCCESS: 'FIND_CLOSEST_LAUNCH_SUCCESS',
};

const findClosestLaunch = (ports) => {
  return {
    type: launchesActionTypes.FIND_CLOSEST_LAUNCH,
    payload: ports,
  }
};

const findClosestLaunchSuccess = (launchTime) => {
  return {
    type: launchesActionTypes.FIND_CLOSEST_LAUNCH_SUCCESS,
    payload: launchTime,
  }
};

export const launchesActions = {
  findClosestLaunch,
  findClosestLaunchSuccess,
};

export default launchesActions;
