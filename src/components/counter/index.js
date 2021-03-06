'use strict';
import {h} from '../../utils';

// const init = (store) => {
const init = () => {
  /*
  let dispatch = store.dispatch;
  if (!isNode) {
    most.fromEvent('click', document).filter((e) => {
      if (e.target && e.target.matches) {
        return e.target.matches('.counter');
      }
      return false;
    }).observe((e) => {
      if (e.target.matches('.increment')) {
        dispatch({
          type: 'INCREMENT'
        });
      } else if (e.target.matches('.decrement')) {
        dispatch({
          type: 'DECREMENT'
        });
      }
    });
  }
*/
};

const render = (props) => {
  let id = props[0];
  let val = props[1];
  return h('div', [
    h(`button#${id}.counter.decrement`, '-'),
    h(`span#${id}.counter.count`, val),
    h(`button#${id}.counter.increment`, '+'),
    h(`button#${id}.counter.reset`, 'Reset'),
    h(`button#${id}.counter.delete`, 'X')
  ]);
};

module.exports = {init, render};
