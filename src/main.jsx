import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 将 App 组件挂载到 index.html 的 root 元素中
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)