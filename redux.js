const { configureStore, createAction, createReducer } = window.RTK;

const module = 'example';

const increment = createAction(`${module}/INCREMENT`);
const decrement = createAction(`${module}/DECREMENT`);

const initialState = 0;

const counter = createReducer(initialState, {
  [increment]: (state) => state + 1,
  [decrement]: (state) => state - 1,
});

const store = configureStore({ reducer: counter });
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
