import { ActionTypes } from "../constants/actionType";

const initialState = {
  chatData: [],
  imageData: [],
  isLoading: false,
};

export const chatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_DATA_START:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.GET_ANSWER:
      return {
        ...state,
        chatData: [...state.chatData, payload],
        isLoading: false,
      };
    case ActionTypes.GET_IMAGE:
      return {
        ...state,
        imageData: [...state.imageData, payload],
        isLoading: false,
      };

    default:
      return state;
  }
};
