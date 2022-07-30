import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import PropTypes from 'prop-types';

export default function StoreCard({ store }) {
  const { imgUrl, title, address, phone, mapsUrl } = store;
  return (
    <div>
      <img alt="Fachada da loja" src={imgUrl} />
      <h3>{title}</h3>
      <address>{address}</address>
      <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer">
        <BsWhatsapp />
      </a>
      <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
        <MdLocationOn />
      </a>
    </div>
  );
}

StoreCard.propTypes = {
  store: PropTypes.shape(
    {
      imgUrl: PropTypes.string,
      title: PropTypes.string,
      address: PropTypes.string,
      mapsUrl: PropTypes.string
    }.isRequired
  )
};
