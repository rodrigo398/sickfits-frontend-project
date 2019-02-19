import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeItem = {
  id: 'ABC123',
  title: 'A cool Item',
  price: 500,
  description: 'this is description',
  image: 'dog.jpg',
  largeImage: 'largedog.jpg'
};

describe('<Item/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);

    const price = '$50.34';
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  /* it('renders the img properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const img = wrapper.find('img');
    expect(img.props().src).toBe(fakeItem.image);
    expect(img.props().alt).toBe(fakeItem.title);
  });

  it('renders price and title properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const PriceTag = wrapper.find('PriceTag');
    //console.log(PriceTag.children());
    expect(PriceTag.children().text()).toBe('$5');
    expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
    //console.log(wrapper.debug());
  });

  it('renders out the buttons properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    //console.log(wrapper.debug());
    const buttonList = wrapper.find('.buttonList');
    expect(buttonList.children()).toHaveLength(3);
    expect(buttonList.find('Link')).toHaveLength(1);
    expect(buttonList.find('Link').exists()).toBe(true);
    expect(buttonList.find('AddToCart').exists()).toBe(true);
    expect(buttonList.find('DeleteItem').exists()).toBe(true);

    console.log(buttonList.debug());
  }); */
});
