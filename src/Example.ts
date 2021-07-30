export class Example {
  private readonly list: string[]

  public constructor() {
    this.list = [
      'alpha',
      'bravo',
      'charlie',
    ]
  }

  public toString (): string {
    return this.list.join(', ')
  }
}
