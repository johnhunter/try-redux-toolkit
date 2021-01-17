const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

function increment() {
  return { type: INCREMENT };
}

function decrement() {
  return { type: DECREMENT };
}

function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const store = Redux.createStore(counter);

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

var valueEl = document.getElementById('value');

function render() {
  valueEl.innerHTML = store.getState().toString();
}

render();
store.subscribe(render);
