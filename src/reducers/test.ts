import { createAction, ActionType, createReducer } from 'typesafe-actions';
import produce from 'immer';

//  Actions Type
export const TEST = 'test/TEST';
export const TEST_SUCCESS = 'test/TEST_SUCCESS';

//  Actions
export const test = createAction(TEST)<any>();
export const testSuccess = createAction(TEST_SUCCESS)<any>();

const actions = {
    test,
    testSuccess,
};

type Actions = ActionType<typeof actions>;

interface State {
    test: string;
}

// Default State
const initialState: State = {
    test: 'test',
};

const Reducer = createReducer<State, Actions>(initialState, {
    [TEST_SUCCESS]: (state, action) =>
        produce(state, (draft) => {
            draft.test = 'test success';
        }),
});

export default Reducer;
