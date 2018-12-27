import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

interface Props {
  isCompleted: boolean
}

const Checkout: React.StatelessComponent<Props> = (props) => (
  <span>
    {props.isCompleted ? (
      <FontAwesomeIcon icon={faCheckSquare} size="2x" />
    ) : (
      <FontAwesomeIcon icon={faSquare} size="2x" />
    )}
  </span>
);

export default Checkout;
