import {
  TEST_ACTION,
} from './constants';

export function testAction() {
  return {
    type: TEST_ACTION,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
      };

    default:
      return state;
  }
}
