import React, { Component, MouseEventHandler } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Form from '../Form/Form';
import FormEdit from '../FormEdit/FormEdit';
import FormItem from '../FormItem/FormItem';
import Item from '../../types/Item';

import './Content.css';

interface Props {
  items: Array<Item>,
  editingItem: Item,
  className: string,
  handleAddItem: Function,
  handleCancelEditItem: MouseEventHandler,
  handleDeleteItem: Function,
  handleEditItem: Function,
  handleItemCompletion: Function,
  handleSelectEditItem: Function,
  handleReorderItem: Function,
};

class Content extends Component<Props> {

  static defaultProps = {
    items: [],
    editingItem: {},
  };

  onDragEnd = (result: any) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    this.props.handleReorderItem(result.source.index, result.destination.index);
  };

  render() {
    return (
      <div className={this.props.className}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Welcome!</h5>
                  <p className="card-text">To get started, add some items to your list:</p>
                  <div className="d-inline-block">
                    <Form handleAddItem={this.props.handleAddItem} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.props.items.length ? (
            <div className="row justify-content-center">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="content__todos">
                  <ul className="list-group content__todos__ul">
                    <DragDropContext onDragEnd={this.onDragEnd}>
                      <Droppable droppableId="droppable">
                        {provided => (
                          <div ref={provided.innerRef}>
                            {this.props.items.map((item, index) => (
                              <Draggable key={index} draggableId={item.id} index={index}>
                                {provided => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="content__todos__li">
                                    {this.props.editingItem.id === item.id ? (
                                      <FormEdit
                                        item={this.props.editingItem}
                                        handleEditItem={this.props.handleEditItem}
                                        handleCancelEditItem={this.props.handleCancelEditItem}
                                      />
                                    ) : (
                                      <FormItem
                                        item={item}
                                        handleDeleteItem={this.props.handleDeleteItem}
                                        handleSelectEditItem={this.props.handleSelectEditItem}
                                        handleItemCompletion={this.props.handleItemCompletion}
                                      />
                                    )}
                                  </div>
                                )}
                              </Draggable>
                            ))}
                          </div>
                        )}
                      </Droppable>
                    </DragDropContext>
                  </ul>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Content;
