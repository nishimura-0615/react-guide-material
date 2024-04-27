import { produce } from 'immer';

const state = {
  name: 'Tom',
  hobbies: ['tennis', 'soccer'],
};

// immmerを使わない場合、const newState = state; newState.name = 'John';
// const newStateとconst stateは同じのオブジェクト
// const newState = state;
// newState.name = 'John';
// immerを使う場合は const newStateとconst stateは別のオブジェクト
const newState = produce(state, (draft) => {
  // draft.name = 'John';
  // draft.hobbies[0] = 'baseball';

  console.log(draft);
  return [];
});

console.log(state, newState);
