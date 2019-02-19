describe('sample test 101', () => {
  it('works as expected', () => {
    const age = 100;
    expect(1).toEqual(1);
    expect(age).toEqual(100);
  });

  it('handles ranges', () => {
    const age = 200;
    expect(age).toBeGreaterThan(100);
  });

  it('makes list of dogs name', () => {
    const dogs = ['test1', 'hugo'];
    expect(dogs).toEqual(dogs);
    expect(dogs).toContain('hugo');
  });
});
