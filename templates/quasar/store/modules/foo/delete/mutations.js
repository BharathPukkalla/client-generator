import * as types from './mutation_types';
import initState from './state';

export default {
  [types.{{{uc}}}_DELETE_SET_DELETED](state, deleted) {
    Object.assign(state, { deleted });
  },

  [types.{{{uc}}}_DELETE_SET_ERROR](state, error) {
    Object.assign(state, { error });
  },

  [types.{{{uc}}}_DELETE_TOGGLE_LOADING](state) {
    Object.assign(state, { isLoading: !state.isLoading });
  },

  [types.{{{uc}}}_DELETE_RESET](state) {
    Object.assign(state, initState);
  },
};
