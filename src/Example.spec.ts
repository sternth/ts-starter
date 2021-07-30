import { Example } from './Example'

describe('Example', () => {
  let example: Example

  beforeEach(() => {
    example = new Example()
  })

  describe('toString()', () => {
    it('should print beginning alphabet', () => {
      expect(example.toString()).toBe('alpha, bravo, charlie')
    })
  })
})
