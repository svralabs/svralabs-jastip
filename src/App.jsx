import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CancellationOutOfStockResolution from './pages/CancellationOutOfStockResolution';
import AdminTeamLoginJastipControlCenter from './pages/AdminTeamLoginJastipControlCenter';
import AdminDashboardOverview from './pages/AdminDashboardOverview';
import PaymentReceiptUploadScreen from './pages/PaymentReceiptUploadScreen';
import OrderHistoryTracking from './pages/OrderHistoryTracking';
import AdminEventManagementScreen from './pages/AdminEventManagementScreen';
import KalenderEventJastip from './pages/KalenderEventJastip';
import CustomerHomeJastiphub from './pages/CustomerHomeJastiphub';
import AdminCustomerManagement from './pages/AdminCustomerManagement';
import RingkasanOrderCheckout from './pages/RingkasanOrderCheckout';
import AuthenticationScreen from './pages/AuthenticationScreen';
import ProductDetailOrderForm from './pages/ProductDetailOrderForm';
import OrderHistoryStatus from './pages/OrderHistoryStatus';
import ShoppingCart from './pages/ShoppingCart';
import AiProfitCalculatorBudgetingPanel2 from './pages/AiProfitCalculatorBudgetingPanel2';
import JastipLandingPage from './pages/JastipLandingPage';
import PaymentCancellationGateway from './pages/PaymentCancellationGateway';
import ProductCatalog from './pages/ProductCatalog';
import ShopperListWorkspace from './pages/ShopperListWorkspace';
import AiProfitCalculatorBudgetingPanel1 from './pages/AiProfitCalculatorBudgetingPanel1';
import AdminInvoiceFeesManager from './pages/AdminInvoiceFeesManager';
import AdminMasterDashboard from './pages/AdminMasterDashboard';
import CustomerCheckoutForm from './pages/CustomerCheckoutForm';
import AdminPaymentCancellationDashboard from './pages/AdminPaymentCancellationDashboard';
import WellnessDashboard from './pages/WellnessDashboard';
import AdminEventCatalogManagement from './pages/AdminEventCatalogManagement';
import JastipOrderFormMobile from './pages/JastipOrderFormMobile';
import ThirtyspaceTableShowcase from './pages/ThirtyspaceTableShowcase';
import JastipHomeScreenMobile from './pages/JastipHomeScreenMobile';
import ThirtyspaceHeroSection from './pages/ThirtyspaceHeroSection';
import ThirtyspaceSidebarShowcase from './pages/ThirtyspaceSidebarShowcase';
import JastipCatalogJepangTrip1 from './pages/JastipCatalogJepangTrip1';
import ThirtyspaceLoaderShowcase from './pages/ThirtyspaceLoaderShowcase';
import ThirtyspaceLoginRegisterMobile from './pages/ThirtyspaceLoginRegisterMobile';
import ThirtyspaceBadgeShowcase from './pages/ThirtyspaceBadgeShowcase';
import Thirtyspace404NavigationBentoVariant from './pages/Thirtyspace404NavigationBentoVariant';
import JastipCatalogJepangTrip2 from './pages/JastipCatalogJepangTrip2';
import ThirtyspaceButtonShowcase from './pages/ThirtyspaceButtonShowcase';
import ThirtyspaceComponentShowcaseInputs from './pages/ThirtyspaceComponentShowcaseInputs';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
        {/* Navigation Header for Multi-Screen Stitch Pages */}
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="font-bold text-sm tracking-wide text-white capitalize">jastip</span>
          </div>
          <nav className="flex items-center space-x-2 overflow-x-auto py-1">
            <Link to="/" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Cancellation Out Of Stock Resolution</Link>
            <Link to="/admin-team-login-jastip-control-center" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Team Login Jastip Control Center</Link>
            <Link to="/admin-dashboard-overview" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Dashboard Overview</Link>
            <Link to="/payment-receipt-upload-screen" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Payment Receipt Upload Screen</Link>
            <Link to="/order-history-tracking" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Order History Tracking</Link>
            <Link to="/admin-event-management-screen" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Event Management Screen</Link>
            <Link to="/kalender-event-jastip" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Kalender Event Jastip</Link>
            <Link to="/customer-home-jastiphub" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Customer Home Jastiphub</Link>
            <Link to="/admin-customer-management" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Customer Management</Link>
            <Link to="/ringkasan-order-checkout" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Ringkasan Order Checkout</Link>
            <Link to="/authentication-screen" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Authentication Screen</Link>
            <Link to="/product-detail-order-form" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Product Detail Order Form</Link>
            <Link to="/order-history-status" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Order History Status</Link>
            <Link to="/shopping-cart" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Shopping Cart</Link>
            <Link to="/ai-profit-calculator-budgeting-panel-2" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Ai Profit Calculator Budgeting Panel 2</Link>
            <Link to="/jastip-landing-page" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Jastip Landing Page</Link>
            <Link to="/payment-cancellation-gateway" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Payment Cancellation Gateway</Link>
            <Link to="/product-catalog" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Product Catalog</Link>
            <Link to="/shopper-list-workspace" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Shopper List Workspace</Link>
            <Link to="/ai-profit-calculator-budgeting-panel-1" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Ai Profit Calculator Budgeting Panel 1</Link>
            <Link to="/admin-invoice-fees-manager" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Invoice Fees Manager</Link>
            <Link to="/admin-master-dashboard" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Master Dashboard</Link>
            <Link to="/customer-checkout-form" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Customer Checkout Form</Link>
            <Link to="/admin-payment-cancellation-dashboard" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Payment Cancellation Dashboard</Link>
            <Link to="/wellness-dashboard" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Wellness Dashboard</Link>
            <Link to="/admin-event-catalog-management" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Event Catalog Management</Link>
            <Link to="/jastip-order-form-mobile" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Jastip Order Form Mobile</Link>
            <Link to="/thirtyspace-table-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace Table Showcase</Link>
            <Link to="/jastip-home-screen-mobile" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Jastip Home Screen Mobile</Link>
            <Link to="/thirtyspace-hero-section" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace Hero Section</Link>
            <Link to="/thirtyspace-sidebar-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace Sidebar Showcase</Link>
            <Link to="/jastip-catalog-jepang-trip-1" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Jastip Catalog Jepang Trip 1</Link>
            <Link to="/thirtyspace-loader-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace Loader Showcase</Link>
            <Link to="/thirtyspace-login-register-mobile" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace Login Register Mobile</Link>
            <Link to="/thirtyspace-badge-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace Badge Showcase</Link>
            <Link to="/thirtyspace-404-navigation-bento-variant" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace 404 Navigation Bento Variant</Link>
            <Link to="/jastip-catalog-jepang-trip-2" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Jastip Catalog Jepang Trip 2</Link>
            <Link to="/thirtyspace-button-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace Button Showcase</Link>
            <Link to="/thirtyspace-component-showcase-inputs" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace Component Showcase Inputs</Link>
          </nav>
        </header>

        {/* Dynamic Routed Pages */}
        <main className="flex-1 w-full">
          <Routes>
          <Route path="/" element={<CancellationOutOfStockResolution />} />
          <Route path="/admin-team-login-jastip-control-center" element={<AdminTeamLoginJastipControlCenter />} />
          <Route path="/admin-dashboard-overview" element={<AdminDashboardOverview />} />
          <Route path="/payment-receipt-upload-screen" element={<PaymentReceiptUploadScreen />} />
          <Route path="/order-history-tracking" element={<OrderHistoryTracking />} />
          <Route path="/admin-event-management-screen" element={<AdminEventManagementScreen />} />
          <Route path="/kalender-event-jastip" element={<KalenderEventJastip />} />
          <Route path="/customer-home-jastiphub" element={<CustomerHomeJastiphub />} />
          <Route path="/admin-customer-management" element={<AdminCustomerManagement />} />
          <Route path="/ringkasan-order-checkout" element={<RingkasanOrderCheckout />} />
          <Route path="/authentication-screen" element={<AuthenticationScreen />} />
          <Route path="/product-detail-order-form" element={<ProductDetailOrderForm />} />
          <Route path="/order-history-status" element={<OrderHistoryStatus />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/ai-profit-calculator-budgeting-panel-2" element={<AiProfitCalculatorBudgetingPanel2 />} />
          <Route path="/jastip-landing-page" element={<JastipLandingPage />} />
          <Route path="/payment-cancellation-gateway" element={<PaymentCancellationGateway />} />
          <Route path="/product-catalog" element={<ProductCatalog />} />
          <Route path="/shopper-list-workspace" element={<ShopperListWorkspace />} />
          <Route path="/ai-profit-calculator-budgeting-panel-1" element={<AiProfitCalculatorBudgetingPanel1 />} />
          <Route path="/admin-invoice-fees-manager" element={<AdminInvoiceFeesManager />} />
          <Route path="/admin-master-dashboard" element={<AdminMasterDashboard />} />
          <Route path="/customer-checkout-form" element={<CustomerCheckoutForm />} />
          <Route path="/admin-payment-cancellation-dashboard" element={<AdminPaymentCancellationDashboard />} />
          <Route path="/wellness-dashboard" element={<WellnessDashboard />} />
          <Route path="/admin-event-catalog-management" element={<AdminEventCatalogManagement />} />
          <Route path="/jastip-order-form-mobile" element={<JastipOrderFormMobile />} />
          <Route path="/thirtyspace-table-showcase" element={<ThirtyspaceTableShowcase />} />
          <Route path="/jastip-home-screen-mobile" element={<JastipHomeScreenMobile />} />
          <Route path="/thirtyspace-hero-section" element={<ThirtyspaceHeroSection />} />
          <Route path="/thirtyspace-sidebar-showcase" element={<ThirtyspaceSidebarShowcase />} />
          <Route path="/jastip-catalog-jepang-trip-1" element={<JastipCatalogJepangTrip1 />} />
          <Route path="/thirtyspace-loader-showcase" element={<ThirtyspaceLoaderShowcase />} />
          <Route path="/thirtyspace-login-register-mobile" element={<ThirtyspaceLoginRegisterMobile />} />
          <Route path="/thirtyspace-badge-showcase" element={<ThirtyspaceBadgeShowcase />} />
          <Route path="/thirtyspace-404-navigation-bento-variant" element={<Thirtyspace404NavigationBentoVariant />} />
          <Route path="/jastip-catalog-jepang-trip-2" element={<JastipCatalogJepangTrip2 />} />
          <Route path="/thirtyspace-button-showcase" element={<ThirtyspaceButtonShowcase />} />
          <Route path="/thirtyspace-component-showcase-inputs" element={<ThirtyspaceComponentShowcaseInputs />} />
          <Route path="*" element={<CancellationOutOfStockResolution />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
