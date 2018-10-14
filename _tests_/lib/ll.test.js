'use strict';

let LL = require('../../lib/ll.js');

describe('Linked List', () => {

  it('constructor()', ()=> {
    let list = new LL();
    expect(list.head).toBeNull();
  });

  it('append()', ()=> {
    let list = new LL();
    let initialValue = 'Redskins';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'Sammy Baugh';
    list.append(newValue);
    expect(list.head.value).toEqual(initialValue);

    let anotherOne = 'John Riggns';
    list.append(anotherOne);

    console.log(list);

  });

  it('prepend()',()=> {
    let list = new LL();
    let initialValue = 'Redskins';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'Sammy Baugh';
    list.append(newValue);
    expect(list.head.value).toEqual(initialValue);

    let anotherOne = 'John Riggns';
    list.append(anotherOne);

    let prependValue = 'HTTR';
    list.prepend(prependValue);
    expect(list.head.value).toEqual(prependValue);

    console.log(list);

  } );




});