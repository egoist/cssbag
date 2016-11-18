import postcss from 'postcss'
import cssbag from '../src'

test('main', () => {
  const input = `
    @define-mixin hey $size {
      font-size: $size;
    }
    body {
      $foo: #ccc;
      color: $foo;
      width: calc(55px - 5px);
      @mixin hey 14px;
    }

  `
  return postcss([
      cssbag()
    ])
    .process(input)
    .then(result => {
      // advance-vars
      expect(result.css.indexOf('color: #ccc') !== -1).toBe(true)
      // calc
      expect(result.css.indexOf('50px') !== -1).toBe(true)
      // mixins
      expect(result.css.indexOf('font-size: 14px') !== -1).toBe(true)
    })
})
