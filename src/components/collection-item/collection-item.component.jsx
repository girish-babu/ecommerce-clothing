import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ name, imageUrl, price }) => (
  <div className="collection-item">
    <div
      className="collection-item-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-item-footer">
      <span className="name">{name}</span>
      <span className="price">{`$ ${price}`}</span>
    </div>
  </div>
);

export default CollectionItem;
