import React = require('react');

export const NumberedList = ({
  items,
  resouceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <React.Fragment>
      {items.map((item, i) => (
        <div>
          <h3>{i + 1}</h3>
          <ItemComponent key={i} {...{ [resouceName]: item }} />
        </div>
      ))}
    </React.Fragment>
  );
};
