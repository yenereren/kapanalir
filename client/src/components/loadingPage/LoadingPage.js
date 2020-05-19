import React from 'react';
import { Spin, Space } from 'antd';
import './LoadingPage.css';


function LoadingPage() {
  return (
    <Space className="LoadingPage">
      <Spin size="large" />
      <h1>Kapan Alır</h1>
    </Space>
  );
}

export default LoadingPage;
