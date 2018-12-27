import React, { Component } from 'react';

import './FormItem.css';

import PropertyBar from '../PropertyBar/PropertyBar';
import Checkout from '../Checkout/Checkout';
import Item from '../../types/Item';

interface Props {
  item: Item,
  handleDeleteItem: Function,
  handleSelectEditItem: Function,
  handleItemCompletion: Function
};

export default class FormItem extends Component<Props, {displayMenu: boolean}> {

  state = { displayMenu: false };

  setDisplayMenu = (bool: any) => {
    if (this.state.displayMenu !== bool) {
      this.setState({ displayMenu: bool });
    }
  };

  render() {
    return (
      <li
        className="form_item__component list-group-item form-control"
        onMouseMove={() => this.setDisplayMenu(true)}
        onMouseLeave={() => this.setDisplayMenu(false)}>
        <div className="text-truncate" onClick={() => this.props.handleItemCompletion(this.props.item)}>
          <div className="form_item__checkout d-inline-block">
            <Checkout isCompleted={this.props.item.completed} />
          </div>
          <span className="form_item__text">{this.props.item.value}</span>
        </div>

        {this.state.displayMenu ? (
          <PropertyBar
            id={this.props.item.id}
            handleSelectEditItem={this.props.handleSelectEditItem}
            handleDeleteItem={this.props.handleDeleteItem}
          />
        ) : null}
      </li>
    );
  }
}
