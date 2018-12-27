import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface Props {
  handleAddItem: Function
};

export default class Form extends Component<Props, {itemValue: string}> {

  state = { itemValue: '' };

  handleSubmitAndResetForm = (ev: any) => {
    ev.preventDefault();

    this.props.handleAddItem(this.state.itemValue);

    // Reset value
    return this.setState({
      itemValue: '',
    });
  };

  handleItemChange = (ev: any) =>
    this.setState({
      itemValue: ev.target.value,
    });

  render() {
    return (
      <div>
        <form method="POST" onSubmit={this.handleSubmitAndResetForm}>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="new-todo-item"
                name="new-todo-item"
                placeholder="I want to do..."
                aria-label="Todo item description"
                value={this.state.itemValue}
                onChange={this.handleItemChange}
                autoFocus
              />
            </div>

            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!this.state.itemValue}
                aria-label="Add todo item">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
