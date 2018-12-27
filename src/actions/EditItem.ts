import Item from '../types/Item';

export const EDIT_ITEM = 'Edit item';

export const EditItem = (modifiedItem: Item) => ({
  type: EDIT_ITEM,
  payload: { modifiedItem },
});
