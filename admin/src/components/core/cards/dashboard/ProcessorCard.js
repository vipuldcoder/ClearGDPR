import React from 'react';
import PropTypes from 'prop-types';

import { processorType } from 'types';

import Card from './Card';
import defaultLogo from 'assets/logo.png';
import { PrimaryButton } from 'components/core/Common/Buttons/Buttons';

const ProcessorCard = props => {
  function onDeleteHandler(e, processor) {
    e.stopPropagation();
    props.onDelete && props.onDelete(processor);
  }

  return (
    <Card cols={3} onClick={props.onClick}>
      <div className="processor">
        <div className="image-container">
          {props.data.logoUrl ? (
            <img src={props.data.logoUrl} alt={props.data.name} />
          ) : (
            <img src={defaultLogo} alt={props.data.name} />
          )}
        </div>
        <p>{props.data.description}</p>
        <p>
          <strong>Scopes:</strong>
        </p>
        <ul>
          {props.data.scopes.map((data, id) => {
            return <li key={id}>{data}</li>;
          })}
        </ul>
        <p>Block-chain address: {props.data.address || 'None'}</p>
        <PrimaryButton onClick={e => onDeleteHandler(e, props.data)} text="Delete" />
      </div>
    </Card>
  );
};

ProcessorCard.propTypes = {
  data: processorType,
  onClick: PropTypes.func,
  onDelete: PropTypes.func
};

export default ProcessorCard;
