import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiDollarSign, FiTrendingUp, FiCalendar } = FiIcons;

const RevenueChart = ({ dateRange }) => {
  const [chartType, setChartType] = useState('line');

  const revenueData = {
    daily: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
    weekly: [85000, 92000, 78000, 105000, 98000, 112000, 125000],
    monthly: [350000, 420000, 380000, 450000, 520000, 480000, 590000]
  };

  const getChartOption = () => {
    const baseOption = {
      backgroundColor: 'transparent',
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        top: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: dateRange === '1d' 
          ? ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00']
          : dateRange === '7d'
          ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisLine: { lineStyle: { color: '#374151' } },
        axisLabel: { color: '#9CA3AF' }
      },
      yAxis: {
        type: 'value',
        axisLine: { lineStyle: { color: '#374151' } },
        axisLabel: { 
          color: '#9CA3AF',
          formatter: (value) => `$${(value / 1000).toFixed(0)}K`
        },
        splitLine: { lineStyle: { color: '#374151' } }
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderColor: '#374151',
        textStyle: { color: '#fff' },
        formatter: (params) => {
          const value = params[0].value;
          return `${params[0].name}<br/>Revenue: $${value.toLocaleString()}`;
        }
      }
    };

    if (chartType === 'line') {
      return {
        ...baseOption,
        series: [
          {
            name: 'Revenue',
            type: 'line',
            data: revenueData.daily,
            smooth: true,
            lineStyle: {
              color: '#ff6b35',
              width: 3
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(255, 107, 53, 0.3)' },
                  { offset: 1, color: 'rgba(255, 107, 53, 0.05)' }
                ]
              }
            },
            itemStyle: {
              color: '#ff6b35'
            }
          }
        ]
      };
    } else {
      return {
        ...baseOption,
        series: [
          {
            name: 'Revenue',
            type: 'bar',
            data: revenueData.daily,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: '#ff6b35' },
                  { offset: 1, color: '#f7931e' }
                ]
              }
            },
            barWidth: '60%'
          }
        ]
      };
    }
  };

  const summaryStats = [
    {
      label: 'Total Revenue',
      value: '$124,592',
      change: '+12.5%',
      trend: 'up'
    },
    {
      label: 'Average Order Value',
      value: '$89.32',
      change: '+5.2%',
      trend: 'up'
    },
    {
      label: 'Revenue Growth',
      value: '15.8%',
      change: '+2.1%',
      trend: 'up'
    },
    {
      label: 'Forecast',
      value: '$145K',
      change: '+16.4%',
      trend: 'up'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#ff6b35]/20"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm font-['Orbitron']">{stat.label}</span>
              <div className="flex items-center space-x-1 text-[#f7931e]">
                <SafeIcon icon={FiTrendingUp} className="w-4 h-4" />
                <span className="text-xs font-['Inter']">{stat.change}</span>
              </div>
            </div>
            <p className="text-white text-2xl font-bold font-['Orbitron']">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#ff6b35]/20"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] rounded-xl flex items-center justify-center">
              <SafeIcon icon={FiDollarSign} className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white font-['Orbitron']">Revenue Analytics</h3>
              <p className="text-gray-400 text-sm font-['Inter']">Track your revenue performance over time</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setChartType('line')}
              className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 font-['Orbitron'] ${
                chartType === 'line'
                  ? 'bg-[#ff6b35] text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Line
            </button>
            <button
              onClick={() => setChartType('bar')}
              className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 font-['Orbitron'] ${
                chartType === 'bar'
                  ? 'bg-[#ff6b35] text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Bar
            </button>
          </div>
        </div>
        
        <div className="h-96">
          <ReactECharts option={getChartOption()} style={{ height: '100%', width: '100%' }} />
        </div>
      </motion.div>

      {/* Revenue Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#ff6b35]/20"
        >
          <h3 className="text-lg font-semibold text-white mb-4 font-['Orbitron']">Revenue by Product</h3>
          <div className="space-y-4">
            {[
              { product: 'Premium Plan', revenue: '$45,230', percentage: 36 },
              { product: 'Pro Plan', revenue: '$32,180', percentage: 26 },
              { product: 'Basic Plan', revenue: '$28,450', percentage: 23 },
              { product: 'Enterprise', revenue: '$18,732', percentage: 15 }
            ].map((item, index) => (
              <div key={item.product}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm font-['Orbitron']">{item.product}</span>
                  <span className="text-gray-400 text-sm font-['Inter']">{item.revenue}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    className="h-2 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#ff6b35]/20"
        >
          <h3 className="text-lg font-semibold text-white mb-4 font-['Orbitron']">Monthly Targets</h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-['Orbitron']">Current Month</span>
                <span className="text-[#f7931e] font-semibold font-['Inter']">$124,592 / $150,000</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '83%' }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="h-3 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] rounded-full"
                ></motion.div>
              </div>
              <p className="text-gray-400 text-sm mt-1 font-['Inter']">83% of target achieved</p>
            </div>
            
            <div className="pt-4 border-t border-[#ff6b35]/20">
              <h4 className="text-white font-medium mb-3 font-['Orbitron']">Upcoming Milestones</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300 font-['Inter']">Q1 Target</span>
                  <span className="text-[#f7931e] font-['Orbitron']">$450K</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300 font-['Inter']">Annual Goal</span>
                  <span className="text-[#ff6b35] font-['Orbitron']">$1.8M</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevenueChart;