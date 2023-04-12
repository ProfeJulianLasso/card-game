import { HolaPipe } from './hola.pipe';

describe('HolaPipe', () => {
  let pipe: HolaPipe;

  beforeEach(() => {
    pipe = new HolaPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeDefined();
  });

  it('should return "Hola Julian"', () => {
    // Arrange
    const value = 'Julian';
    const expected = 'Hola Julian';

    // Act
    const result = pipe.transform(value);

    // Assert
    expect(result).toEqual(expected);
  });

  it('should not return "Hola Julian"', () => {
    // Arrange
    const value = 'Julian2';
    const expected = 'Hola Julian';

    // Act
    const result = pipe.transform(value);

    // Assert
    expect(result).not.toEqual(expected);
  });
});
