export const ADD_ITEM = 'Add item';

export const AddItem = (itemValue: string) => ({
  type: ADD_ITEM,
  payload: { value: itemValue },
});