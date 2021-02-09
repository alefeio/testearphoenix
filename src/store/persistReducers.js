import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'teste',
      storage,
      whitelist: ['auth', 'usuario'],
    },
    reducers
  );

  return persistedReducer;
};
