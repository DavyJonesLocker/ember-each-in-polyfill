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

  assert.equal(this.$().text().trim(), 'foo:barbaz:qux', 'should render key-value pairs');
});

test('It can yield to inverse like an each-in should', function(assert) {
  this.set('object', {});

  this.render(hbs`
    {{#each-in object as |key value|}}BAD{{else}}GOOD{{/each-in}}
  `);

  assert.equal(this.$().text().trim(), 'GOOD', 'should only render inverse block');
});

test('It can handle non-objects gracefully', function(assert) {
  this.render(hbs`
    {{~#each-in "lol" as |key value|~}}BAD{{else}}1{{~/each-in~}}
    {{~#each-in 123 as |key value|~}}BAD{{else}}2{{~/each-in~}}
    {{~#each-in null as |key value|~}}BAD{{else}}3{{~/each-in~}}
    {{~#each-in undefined as |key value|~}}BAD{{else}}4{{~/each-in~}}
  `);

  assert.equal(this.$().text().replace(/\W+/g, ''), '1234', 'should only render inverse blocks');
});
