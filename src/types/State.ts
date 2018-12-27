import Item from './Item';

export default interface State {
    items: Array<Item>,
    editingItem?: Item | {}
  }