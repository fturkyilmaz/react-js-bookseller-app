import React, { useReducer, createContext } from "react";

export const BookSellerContext = createContext();

const initialState = {
  books: [],
  carts: [],
  book: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BOOKS":
      return {
        ...state,
        books: action.payload,
      };

    case "ADD_BOOKS":
      return {
        ...state,
        books: [...state.books, action.payload],
      };

    case "EDIT_BOOKS":
      return {
        ...state,
        books: [
          ...state.books.filter((book) => book.id !== action.payload.id),
          action.payload,
        ],
      };

    case "DELETE_BOOKS":
      return {
        ...state,
        carts: state.books.filter((book) => book.id !== action.payload),
      };

    case "FETCH_CARTS":
      return {
        ...state,
        carts: action.payload,
      };

    default:
      return state;
  }
};

// Fakat useReducer bu ve daha kompleks State geçişleri için geliştiricileri bunu aynen Redux mekanizmasındaki benzer şekilde dispatch mantığı ile yönetmenize imkan sağlar.
// Aşağıda kırmızı gördüğümüz kısım reducer fonksiyonu ve mevcut state ve bu state bir sonraki aşamaya geçirecek komutu bekliyor.
// 2nci kısımda useReducer dispatch ve state(count) bilgisini alıyoruz
// dispatch fonksiyonu gönderdiğimiz “string” komutunu ilgili reducer (state, action) olarak iletilmesinden sorumlu…
// Sonrasında bileşenimiz tekrardan render edilecektir.

export const BookSellerContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BookSellerContext.Provider value={[state, dispatch]}>
      {props.children}
    </BookSellerContext.Provider>
  );
};
