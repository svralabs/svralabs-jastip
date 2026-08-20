import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import JastipLandingPage from './pages/JastipLandingPage';
import JastipHomeScreenMobile from './pages/JastipHomeScreenMobile';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetailOrderForm from './pages/ProductDetailOrderForm';
import ShoppingCart from './pages/ShoppingCart';
import CustomerCheckoutForm from './pages/CustomerCheckoutForm';
import OrderHistoryStatus from './pages/OrderHistoryStatus';
import OrderHistoryTracking from './pages/OrderHistoryTracking';
import AuthenticationScreen from './pages/AuthenticationScreen';
import PaymentReceiptUploadScreen from './pages/PaymentReceiptUploadScreen';
import PaymentCancellationGateway from './pages/PaymentCancellationGateway';
import RingkasanOrderCheckout from './pages/RingkasanOrderCheckout';
import CancellationOutOfStockResolution from './pages/CancellationOutOfStockResolution';
import JastipCatalogJepangTrip1 from './pages/JastipCatalogJepangTrip1';
import JastipCatalogJepangTrip2 from './pages/JastipCatalogJepangTrip2';
import JastipOrderFormMobile from './pages/JastipOrderFormMobile';
import KalenderEventJastip from './pages/KalenderEventJastip';
import CustomerHomeJastiphub from './pages/CustomerHomeJastiphub';
import WellnessDashboard from './pages/WellnessDashboard';
import AiProfitCalculatorBudgetingPanel1 from './pages/AiProfitCalculatorBudgetingPanel1';
import AiProfitCalculatorBudgetingPanel2 from './pages/AiProfitCalculatorBudgetingPanel2';
import ShopperListWorkspace from './pages/ShopperListWorkspace';
import AdminTeamLoginJastipControlCenter from './pages/AdminTeamLoginJastipControlCenter';
import AdminDashboardOverview from './pages/AdminDashboardOverview';
import AdminMasterDashboard from './pages/AdminMasterDashboard';
import AdminCustomerManagement from './pages/AdminCustomerManagement';
import AdminEventManagementScreen from './pages/AdminEventManagementScreen';
import AdminEventCatalogManagement from './pages/AdminEventCatalogManagement';
import AdminInvoiceFeesManager from './pages/AdminInvoiceFeesManager';
import AdminPaymentCancellationDashboard from './pages/AdminPaymentCancellationDashboard';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC — Customer Flow */}
        <Route path="/" element={<JastipLandingPage />} />
        <Route path="/home" element={<JastipHomeScreenMobile />} />
        <Route path="/product-catalog" element={<ProductCatalog />} />
        <Route path="/product-detail-order-form" element={<ProductDetailOrderForm />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/customer-checkout-form" element={<CustomerCheckoutForm />} />
        <Route path="/ringkasan-order-checkout" element={<RingkasanOrderCheckout />} />
        <Route path="/order-history-status" element={<OrderHistoryStatus />} />
        <Route path="/order-history-tracking" element={<OrderHistoryTracking />} />
        <Route path="/payment-receipt-upload-screen" element={<PaymentReceiptUploadScreen />} />
        <Route path="/payment-cancellation-gateway" element={<PaymentCancellationGateway />} />
        <Route path="/cancellation-out-of-stock-resolution" element={<CancellationOutOfStockResolution />} />
        <Route path="/authentication-screen" element={<AuthenticationScreen />} />
        <Route path="/customer-home-jastiphub" element={<CustomerHomeJastiphub />} />
        <Route path="/wellness-dashboard" element={<WellnessDashboard />} />

        {/* CATALOG — Trip-specific */}
        <Route path="/jastip-catalog-jepang-trip-1" element={<JastipCatalogJepangTrip1 />} />
        <Route path="/jastip-catalog-jepang-trip-2" element={<JastipCatalogJepangTrip2 />} />
        <Route path="/jastip-order-form-mobile" element={<JastipOrderFormMobile />} />
        <Route path="/jastip-landing-page" element={<JastipLandingPage />} />
        <Route path="/jastip-home-screen-mobile" element={<JastipHomeScreenMobile />} />
        <Route path="/kalender-event-jastip" element={<KalenderEventJastip />} />

        {/* TOOLS */}
        <Route path="/ai-profit-calculator-budgeting-panel-1" element={<AiProfitCalculatorBudgetingPanel1 />} />
        <Route path="/ai-profit-calculator-budgeting-panel-2" element={<AiProfitCalculatorBudgetingPanel2 />} />
        <Route path="/shopper-list-workspace" element={<ShopperListWorkspace />} />

        {/* ADMIN */}
        <Route path="/admin-team-login-jastip-control-center" element={<AdminTeamLoginJastipControlCenter />} />
        <Route path="/admin-dashboard-overview" element={<AdminDashboardOverview />} />
        <Route path="/admin-master-dashboard" element={<AdminMasterDashboard />} />
        <Route path="/admin-customer-management" element={<AdminCustomerManagement />} />
        <Route path="/admin-event-management-screen" element={<AdminEventManagementScreen />} />
        <Route path="/admin-event-catalog-management" element={<AdminEventCatalogManagement />} />
        <Route path="/admin-invoice-fees-manager" element={<AdminInvoiceFeesManager />} />
        <Route path="/admin-payment-cancellation-dashboard" element={<AdminPaymentCancellationDashboard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
