export const REORDER_ITEM = 'Reorder item';

export const ReorderItem = (initialPosition: number, newPosition: number) => ({
  type: REORDER_ITEM,
  payload: { initialPosition, newPosition },
});
