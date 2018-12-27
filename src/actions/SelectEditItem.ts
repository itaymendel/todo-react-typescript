export const SELECT_EDIT_ITEM = 'Select edit item';

export const SelectEditItem = (id: string) => ({
  type: SELECT_EDIT_ITEM,
  payload: { id },
});
