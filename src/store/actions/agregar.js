import * as actionType from './type';

export const agregar1 = (amout) => ({
  type: actionType.MAS1,
  amout,
});

export const eliminar1 = (amout) => ({
  type: actionType.MENOS1,
  amout,
});
