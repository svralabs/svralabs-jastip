import React, { createContext, useContext, useReducer, useEffect } from 'react';

const STORAGE_KEY = 'jastip_store_v1';
const defaultState = { cart: [], orders: [], toast: null };

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return Object.assign({}, defaultState, JSON.parse(raw));
  } catch(e) {}
  return defaultState;
}

function saveState(s) {
  try {
    const p = Object.assign({}, s); delete p.toast;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch(e) {}
}

function reducer(state, action) {
  if (action.type === 'ADD_TO_CART') {
    const ex = state.cart.find(function(i){ return i.product.id === action.product.id; });
    const cart = ex
      ? state.cart.map(function(i){ return i.product.id === action.product.id ? Object.assign({},i,{qty:i.qty+1}) : i; })
      : state.cart.concat([{product: action.product, qty: 1}]);
    return Object.assign({}, state, {cart});
  }
  if (action.type === 'REMOVE_FROM_CART') {
    return Object.assign({}, state, {cart: state.cart.filter(function(i){ return i.product.id !== action.productId; })});
  }
  if (action.type === 'UPDATE_QTY') {
    if (action.qty <= 0) return Object.assign({}, state, {cart: state.cart.filter(function(i){ return i.product.id !== action.productId; })});
    return Object.assign({}, state, {cart: state.cart.map(function(i){ return i.product.id === action.productId ? Object.assign({},i,{qty:action.qty}) : i; })});
  }
  if (action.type === 'CLEAR_CART') return Object.assign({}, state, {cart: []});
  if (action.type === 'PLACE_ORDER') {
    const order = {
      id: 'ORD-' + Date.now(),
      items: state.cart.slice(),
      total: action.total,
      status: 'Menunggu Konfirmasi',
      createdAt: new Date().toISOString(),
      customer: action.customer,
    };
    return Object.assign({}, state, {cart: [], orders: [order].concat(state.orders)});
  }
  if (action.type === 'SHOW_TOAST') return Object.assign({}, state, {toast: {message: action.message, toastType: action.toastType || 'success'}});
  if (action.type === 'CLEAR_TOAST') return Object.assign({}, state, {toast: null});
  return state;
}

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadState);

  useEffect(function() { saveState(state); }, [state]);

  useEffect(function() {
    if (state.toast) {
      const t = setTimeout(function() { dispatch({type:'CLEAR_TOAST'}); }, 3000);
      return function() { clearTimeout(t); };
    }
  }, [state.toast]);

  const cartCount = state.cart.reduce(function(s,i){ return s + i.qty; }, 0);
  const cartTotal = state.cart.reduce(function(s,i){ return s + (i.product.price_idr + i.product.service_fee) * i.qty; }, 0);

  const toastColors = {
    success: 'bg-purple-600 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-white text-gray-800 border border-gray-200',
  };
  const toastIcons = { success: 'check_circle', error: 'error', info: 'info' };

  return (
    <StoreContext.Provider value={{ state, dispatch, cartCount, cartTotal }}>
      {children}
      {state.toast && (
        <div className={'fixed top-4 left-1/2 -translate-x-1/2 z-[9999] px-5 py-3 rounded-2xl shadow-2xl font-bold text-sm flex items-center gap-2 ' + (toastColors[state.toast.toastType] || toastColors.info)}>
          <span className="material-symbols-outlined text-[18px]">{toastIcons[state.toast.toastType] || 'info'}</span>
          {state.toast.message}
        </div>
      )}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be inside StoreProvider');
  return ctx;
}
