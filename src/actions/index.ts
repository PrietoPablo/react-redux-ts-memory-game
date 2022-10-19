// This reducer is meant to be basic as i want to familiarize myself with the use 
// of typescript in redux
// the actions in here don't represent the app proper fuctionality
export const ACTION_ONE = 'ACTION_ONE';
interface ActionOne {
   type: typeof ACTION_ONE;
   payload: number;
}

export const ACTION_TWO = 'ACTION_TWO';
interface ActionTwo {
   type: typeof ACTION_TWO;
   payload: number;
}

export type Action = ActionOne | ActionTwo;