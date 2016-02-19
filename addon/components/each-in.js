import Component from 'ember-component';
import get from 'ember-metal/get';
import computed from 'ember-computed';

import layout from '../templates/components/each-in';

const EachInComponent = Component.extend({
  layout,

  keyValuePairs: computed('object', function() {
    let object = get(this, 'object');
    let keys = object ? Object.keys(object) : [];

    return keys.map((key) => {
      return { key, value: get(object, key) };
    });
  })
});

EachInComponent.reopenClass({
  positionalParams: ['object']
});

export default EachInComponent;
