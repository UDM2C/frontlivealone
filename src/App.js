import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import BroadcastHistoryPage from './pages/BroadcastHistoryPage';
import CompletePaymentPage from './pages/CompletePaymentPage';
import DeliveryHistoryPage from './pages/DeliveryHistoryPage';
import MyInfoPage from './pages/MyInfoPage';
import PaymentHistoryPage from './pages/PaymentHistoryPage';
import PaymentPage from './pages/PaymentPage';
import StreamerPage from './pages/StreamerPage';
import StreamingPage from './pages/StreamingPage';
import Header from './components/Header';
import OAuth2RedirectHandler from './components/Oauth2RedirectHandler'
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';
import FailPage from './pages/FailPage';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/broadcasthistory" element={<BroadcastHistoryPage />} />
            <Route path="/completepayment" element={<CompletePaymentPage />} />
            <Route path="/deliveryhistory" element={<DeliveryHistoryPage />} />
            <Route path="/myinfo" element={<MyInfoPage />} />
            <Route path="/paymenthistory" element={<PaymentHistoryPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/fail" element={<FailPage />} />
            <Route path="/streamer" element={<StreamerPage />} />
            <Route path="/streaming" element={<StreamingPage />} />
            <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
          </Routes>
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;
