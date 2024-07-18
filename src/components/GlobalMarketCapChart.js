import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const GlobalMarketCapChart = () => {
  const [marketCapData, setMarketCapData] = useState(null); // Initialize with null to handle loading state

  useEffect(() => {
    const fetchMarketCapData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/global');
        if (!response.ok) {
          throw new Error('Failed to fetch market cap data');
        }
        const data = await response.json();
        setMarketCapData(data.data); // Store only the 'data' object from the response
      } catch (error) {
        console.error('Error fetching market cap data:', error);
        // Handle error state or retry logic
      }
    };

    fetchMarketCapData();
  }, []);

  if (!marketCapData) {
    return <div>Loading...</div>; // Simple loading state while data is being fetched
  }

  // Extracting relevant data for the LineChart
  const marketCapChartData = [
    { name: 'BTC', value: marketCapData.total_market_cap.btc },
    { name: 'ETH', value: marketCapData.total_market_cap.eth },
    { name: 'LTC', value: marketCapData.total_market_cap.ltc },
    { name: 'BCH', value: marketCapData.total_market_cap.bch },
    { name: 'BNB', value: marketCapData.total_market_cap.bnb },
    { name: 'EOS', value: marketCapData.total_market_cap.eos },
    { name: 'XRP', value: marketCapData.total_market_cap.xrp },
    { name: 'XLM', value: marketCapData.total_market_cap.xlm },
    { name: 'LINK', value: marketCapData.total_market_cap.link },
    { name: 'DOT', value: marketCapData.total_market_cap.dot },
    { name: 'YFI', value: marketCapData.total_market_cap.yfi }
  ];

  return (
    <div className="global-market-cap-chart">
      <h2>Global Market Cap Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={marketCapChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GlobalMarketCapChart;
