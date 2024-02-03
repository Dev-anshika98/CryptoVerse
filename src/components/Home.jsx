import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if (isFetching) return 'Loading...';

  const renderStatistic = (title, value) => (
    <Col span={12}>
      <Statistic title={title} value={millify(value)} />
    </Col>
  );

  const renderStatistics = () => (
    <Row gutter={[16, 16]}>
      {renderStatistic('Total Cryptocurrencies', globalStats.total)}
      {renderStatistic('Total Exchanges', globalStats.exchanges)}
      {renderStatistic('Total Market Cap', globalStats.totalMarketCap)}
      {renderStatistic('Total 24h Volume', globalStats.total24hVolume)}
      {renderStatistic('Total Markets', globalStats.totalMarkets)}
    </Row>
  );

  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto Stats!
      </Title>
      {renderStatistics()}
    </>
  );
};

export default Home;
