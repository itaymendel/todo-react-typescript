export const DELETE_ITEM = 'Delete item';

export const DeleteItem = (selectedItemId: string) => ({
  type: DELETE_ITEM,
  payload: { id: selectedItemId },
});
