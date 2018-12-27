import Item from '../types/Item';

export const ITEM_COMPLETION = 'Item completion';

export const ItemCompletion = (modifiedItem: Item) => ({
  type: ITEM_COMPLETION,
  payload: { modifiedItem },
});
