import * as React from 'react';
import './style.css';
import MyHeader from './Header';
import Login from './Login';

const isLogin = localStorage.getItem('isLogin');

export default function App() {
  return <>{isLogin ? <MyHeader></MyHeader> : <Login></Login>}</>;
}
