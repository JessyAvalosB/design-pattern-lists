import React = require('react');

export const RegularList = ({
  items,
  resouceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <React.Fragment>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resouceName]: item }} />
      ))}
    </React.Fragment>
  );
};
