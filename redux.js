const { configureStore, createAction, createReducer, createSlice } = window.RTK;

const module = 'counter';
const initialState = 0;

/**
 * createSlice
 * - generates actionCreators based on reducers keys
 * - generates reducer case for each supplied reduce function
 */
const counterSlice = createSlice({
  name: module,
  initialState,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

// actionCreator type property, or toString method returns the action name
const { increment, decrement } = counterSlice.actions;

const store = configureStore({ reducer: counterSlice.reducer });

const valueEl = document.getElementById('value');

function render() {
  valueEl.innerHTML = store.getState().toString();
}

render();
store.subscribe(render);

document.getElementById('increment').addEventListener('click', function () {
  store.dispatch(increment());
});

document.getElementById('decrement').addEventListener('click', function () {
  store.dispatch(decrement());
});

document
  .getElementById('incrementIfOdd')
  .addEventListener('click', function () {
    if (store.getState() % 2 !== 0) {
      store.dispatch(increment());
    }
  });

document
  .getElementById('incrementAsync')
  .addEventListener('click', function () {
    setTimeout(function () {
      store.dispatch(increment());
    }, 1000);
  });
