import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import { Provider } from 'react-redux';
import { store } from '@store/index.ts';
import '@styles/global.scss';
import Toast from '@atoms/Toast';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <I18nextProvider i18n={i18n}>
         <Provider store={store}>
          <App />
          <Toast></Toast>
        </Provider>
      </I18nextProvider>
  </StrictMode>,
)
