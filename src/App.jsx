import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CartContext from './context/CartContext';
import Testimonials from './components/Testimonials';
import HeroBanner from './components/HeroBanner';
import HowItWorks from './components/HowItWorks';
import FilterSidebar from './components/FilterSidebar';
import CartSummary from './components/CartSummary';
import ProductGrid from './components/ProductGrid';
import FeaturedItems from './components/FeaturedItems';
import PaymentForm from './components/PaymentForm';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import CartReview from './components/CartReview';
import ShippingForm from './components/ShippingForm';
import Payment from './components/Payment';
import ShippingInfo from './components/ShippingInfo';
import ThirtyspaceLoaderShowcase from './pages/ThirtyspaceLoaderShowcase';
import ThirtyspaceComponentShowcaseInputs from './pages/ThirtyspaceComponentShowcaseInputs';
import Home from './pages/Home';
import ThirtyspaceButtonShowcase from './pages/ThirtyspaceButtonShowcase';
import ThirtyspaceTableShowcase from './pages/ThirtyspaceTableShowcase';
import OrderForm from './pages/OrderForm';
import Order from './pages/Order';
import JastipCatalogJepangTrip1 from './pages/JastipCatalogJepangTrip1';
import Catalog from './pages/Catalog';
import Thirtyspace404NavigationBentoVariant from './pages/Thirtyspace404NavigationBentoVariant';
import JastipOrderFormMobile from './pages/JastipOrderFormMobile';
import NotFound from './pages/NotFound';
import ThirtyspaceBadgeShowcase from './pages/ThirtyspaceBadgeShowcase';
import JastipCatalogJepangTrip2 from './pages/JastipCatalogJepangTrip2';
import JastipHomeScreenMobile from './pages/JastipHomeScreenMobile';
import ThirtyspaceSidebarShowcase from './pages/ThirtyspaceSidebarShowcase';
import ThirtyspaceHeroSection from './pages/ThirtyspaceHeroSection';
import Catalog1 from './pages/Catalog1';
import Catalog2 from './pages/Catalog2';
import ThirtyspaceLoginRegisterMobile from './pages/ThirtyspaceLoginRegisterMobile';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
        <CartContext />
        <Testimonials />
        <HeroBanner />
        <HowItWorks />
        <FilterSidebar />
        <CartSummary />
        <ProductGrid />
        <FeaturedItems />
        <PaymentForm />
        <ProductCard />
        <Footer />
        <SearchBar />
        <CartReview />
        <ShippingForm />
        <Payment />
        <ShippingInfo />
        <ThirtyspaceLoaderShowcase />
        <ThirtyspaceComponentShowcaseInputs />
        <Home />
        <ThirtyspaceButtonShowcase />
        <ThirtyspaceTableShowcase />
        <OrderForm />
        <Order />
        <JastipCatalogJepangTrip1 />
        <Catalog />
        <Thirtyspace404NavigationBentoVariant />
        <JastipOrderFormMobile />
        <NotFound />
        <ThirtyspaceBadgeShowcase />
        <JastipCatalogJepangTrip2 />
        <JastipHomeScreenMobile />
        <ThirtyspaceSidebarShowcase />
        <ThirtyspaceHeroSection />
        <Catalog1 />
        <Catalog2 />
        <ThirtyspaceLoginRegisterMobile />
      </div>
    </BrowserRouter>
  );
}
