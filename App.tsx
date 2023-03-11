import * as React from 'react';
import { NumberedList } from './components/Lists/NumberedList/NumberedList';
import { RegularList } from './components/Lists/RegularList/RegularList';
import { LargeProductListItem } from './components/Products/LargeProductListItem';
import { SmallProductListItem } from './components/Products/SmallProductListItem';
import { LargeUserListItem } from './components/User/LargeUserListItem';
import { SmallUserListItem } from './components/User/SmallUserListItem';
import './style.css';

export default function App() {
  const users = [
    {
      name: 'John Doe',
      age: 54,
      hairColor: 'red',
      hobbies: ['swimming', 'bicycling', 'video games'],
    },
    {
      name: 'Brenda Smith',
      age: 33,
      hairColor: 'black',
      hobbies: ['golf', 'mathematics'],
    },
    {
      name: 'Jane Garcia',
      age: 27,
      hairColor: 'blonde',
      hobbies: ['biology', 'medicine', 'gymnastics'],
    },
  ];

  const products = [
    {
      name: 'Flat-Screen TV',
      price: '$300',
      description: 'Huge LCD screen, a great deal',
      rating: 4.5,
    },
    {
      name: 'Basketball',
      price: '$10',
      description: 'Just like the pros use',
      rating: 3.8,
    },
    {
      name: 'Running Shoes',
      price: '$120',
      description: 'State-of-the-art technology for optimum',
      rating: 4.2,
    },
  ];
  return (
    <div>
      <h1>Regular List</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1' }}>
          <h2>Small User Item</h2>
          <RegularList
            items={users}
            resouceName="user"
            itemComponent={SmallUserListItem}
          />
          <h2>Large User Item</h2>
          <RegularList
            items={users}
            resouceName="user"
            itemComponent={LargeUserListItem}
          />
        </div>
        <div style={{ flex: '1' }}>
          <h2>Small Product Item</h2>
          <RegularList
            items={products}
            resouceName="product"
            itemComponent={SmallProductListItem}
          />
          <h2>Large Product Item</h2>
          <RegularList
            items={products}
            resouceName="product"
            itemComponent={LargeProductListItem}
          />
        </div>
      </div>

      <h1>Numbered List</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1' }}>
          <h2>Small User Item</h2>
          <NumberedList
            items={users}
            resouceName="user"
            itemComponent={SmallUserListItem}
          />
          <h2>Large User Item</h2>
          <NumberedList
            items={users}
            resouceName="user"
            itemComponent={LargeUserListItem}
          />
        </div>
        <div style={{ flex: '1' }}>
          <h2>Small Product Item</h2>
          <NumberedList
            items={products}
            resouceName="product"
            itemComponent={SmallProductListItem}
          />
          <h2>Large Product Item</h2>
          <NumberedList
            items={products}
            resouceName="product"
            itemComponent={LargeProductListItem}
          />
        </div>
      </div>
    </div>
  );
}
