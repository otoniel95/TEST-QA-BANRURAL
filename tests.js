// tests.js
QUnit.module('Game');

QUnit.test('randomNumber generation', function(assert) {
  assert.ok(randomNumber >= 1 && randomNumber <= 100, 'Número aleatorio generado correctamente');
});
