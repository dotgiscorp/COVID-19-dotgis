import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  dataLoading: true,
  selectedLayer: '',
  form: true,
  forceUpdate: false,
  steps: {
    where: true,
    symptom: false,
    age: false,
    thanks: false
  },
  userInfo: {
    userAddressXY: [],
    userSymptom: '',
    userAge: ''
  }
};

const store = createContext(initialState);
const { Provider } = store;

const handleSteps = (state, targetStep) => {
  let newObj = state;

  for (const tab of Object.keys(state)) {
    newObj = {
      ...newObj,
      ...(tab === targetStep ? { [tab]: true } : { [tab]: false })
    };
  }

  return newObj;
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'set loading':
        return { ...state, dataLoading: action.payload };
      case 'switch layer':
        return { ...state, selectedLayer: action.payload };
      case 'set step':
        return { ...state, steps: handleSteps(state.steps, action.payload) };
      case 'clean steps':
        return { ...state, form: !state.form };
      case 'force tiles update':
        return { ...state, forceUpdate: action.payloade };
      case 'set info':
        return { ...state, userInfo: { ...state.userInfo, [action.payload.info]: action.payload.value }};
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

StateProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export { store, StateProvider };
