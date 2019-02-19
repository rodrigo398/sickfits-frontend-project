function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
  return new Promise((resolve, reject) => {
    // simulate an API
    setTimeout(() => resolve(this.foods), 200);
  });
};

describe('mocking learnin', () => {
  it('mock a reg function', () => {
    const fetchDogs = jest.fn();
    fetchDogs('snickers');
    expect(fetchDogs).toHaveBeenCalled();
    expect(fetchDogs).toHaveBeenLastCalledWith('snickers');
    fetchDogs('hugo');
    expect(fetchDogs).toHaveBeenCalledTimes(2);
    //console.log(fetchDogs);
  });

  it('create person', () => {
    const me = new Person('Rodrix', ['burger', 'arroz']);
    expect(me.name).toBe('Rodrix');
  });

  it('can fetch food', async () => {
    const me = new Person('Rodrix', ['burger', 'arroz']);

    //mock the fastfoods function
    me.fetchFavFoods = jest.fn().mockResolvedValue(['sushi', 'arroz']);
    const favFoods = await me.fetchFavFoods();
    //console.log(favFoods);
    expect(favFoods).toContain('arroz');
  });
});
