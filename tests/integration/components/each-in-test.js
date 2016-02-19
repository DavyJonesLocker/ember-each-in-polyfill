import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('each-in', 'Integration | Component | each in', {
  integration: true
});

test('It does what an each-in does', function(assert) {
  this.set('object', {
    foo: 'bar',
    baz: 'qux'
  });

  this.render(hbs`
    {{#each-in object as |key value|}}{{key}}:{{value}}{{/each-in}}
  `);

  assert.equal(this.$().text().trim(), 'foo:barbaz:qux');
});

test('It can yield to inverse like an each-in should', function(assert) {
  this.set('object', {});

  this.render(hbs`
    {{#each-in object as |key value|}}BAD{{else}}GOOD{{/each-in}}
  `);

  assert.equal(this.$().text().trim(), 'GOOD');
});
