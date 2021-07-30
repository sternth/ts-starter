describe('app', () => {
  beforeAll(() => {
    jest.spyOn(console, 'log')
      .mockImplementation()
  })

  it('should log beginning alphabet', async () => {
    const hi = 'Hello World!'
    const list = 'alpha, bravo, charlie'
    await import('./app')
    expect(console.log)
      .toHaveBeenCalledWith(hi, list)
  })
})
