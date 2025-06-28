import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import ReactECharts from 'echarts-for-react';

const { FiTrendingUp, FiTrendingDown, FiUsers, FiMapPin, FiCamera, FiSun } = FiIcons;

const MetricsOverview = ({ dateRange }) => {
  const metrics = [
    {
      title: 'Visitantes Totais',
      value: '12,432',
      change: '+18.5%',
      trend: 'up',
      icon: FiUsers,
      color: 'from-[#57B1B1] to-[#5EA7A7]'
    },
    {
      title: 'Ocupação Hoteleira',
      value: '89.2%',
      change: '+12.3%',
      trend: 'up',
      icon: FiMapPin,
      color: 'from-[#D9A47F] to-[#E6B592]'
    },
    {
      title: 'Satisfação',
      value: '4.9/5',
      change: '+0.2',
      trend: 'up',
      icon: FiSun,
      color: 'from-[#57B1B1] to-[#D9A47F]'
    },
    {
      title: 'Fotos Postadas',
      value: '8,721',
      change: '+25.1%',
      trend: 'up',
      icon: FiCamera,
      color: 'from-[#D9A47F] to-[#57B1B1]'
    }
  ];

  const chartOption = {
    backgroundColor: 'transparent',
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
      axisLine: {
        lineStyle: {
          color: '#FFFFFF'
        }
      },
      axisLabel: {
        color: '#FFFFFF'
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#FFFFFF'
        }
      },
      axisLabel: {
        color: '#FFFFFF'
      },
      splitLine: {
        lineStyle: {
          color: '#FFFFFF',
          opacity: 0.2
        }
      }
    },
    series: [
      {
        name: 'Visitantes',
        type: 'line',
        data: [8500, 9200, 10100, 11800, 12400, 13100, 12432],
        smooth: true,
        lineStyle: {
          color: '#D9A47F',
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
              {
                offset: 0,
                color: 'rgba(217,164,127,0.4)'
              },
              {
                offset: 1,
                color: 'rgba(217,164,127,0.05)'
              }
            ]
          }
        }
      }
    ],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255,255,255,0.95)',
      borderColor: '#D9A47F',
      textStyle: {
        color: '#2F2F2F'
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center`}>
                <SafeIcon icon={metric.icon} className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center space-x-1 ${metric.trend === 'up' ? 'text-[#D9A47F]' : 'text-red-400'}`}>
                <SafeIcon icon={metric.trend === 'up' ? FiTrendingUp : FiTrendingDown} className="w-4 h-4" />
                <span className="text-sm font-medium font-['Montserrat']">{metric.change}</span>
              </div>
            </div>
            <h3 className="text-white/70 text-sm font-medium mb-2 font-['Montserrat']">{metric.title}</h3>
            <p className="text-white text-2xl font-bold font-['Montserrat']">{metric.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white font-['Montserrat']">Tendência de Visitação</h3>
          <div className="flex items-center space-x-4 text-sm text-white/70">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#D9A47F] rounded-full"></div>
              <span className="font-['Montserrat']">Visitantes</span>
            </div>
          </div>
        </div>
        <div className="h-80">
          <ReactECharts
            option={chartOption}
            style={{ height: '100%', width: '100%' }}
          />
        </div>
      </motion.div>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg"
        >
          <h3 className="text-lg font-semibold text-white mb-4 font-['Montserrat']">Locais Mais Visitados</h3>
          <div className="space-y-4">
            {[
              { local: 'Praia do Marco', visitantes: '3,245', change: '+22%' },
              { local: 'Centro da Cidade', visitantes: '2,891', change: '+15%' },
              { local: 'Praia de Tourinhos', visitantes: '2,432', change: '+18%' },
              { local: 'Praia da Xepa', visitantes: '1,876', change: '+8%' }
            ].map((item) => (
              <div key={item.local} className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium font-['Montserrat']">{item.local}</p>
                  <p className="text-white/70 text-sm font-['Montserrat']">{item.visitantes} visitantes</p>
                </div>
                <span className="text-sm font-medium font-['Montserrat'] text-[#D9A47F]">
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg"
        >
          <h3 className="text-lg font-semibold text-white mb-4 font-['Montserrat']">Origem dos Visitantes</h3>
          <div className="space-y-4">
            {[
              { origem: 'São Paulo', percentage: 35, color: 'bg-[#D9A47F]' },
              { origem: 'Rio de Janeiro', percentage: 25, color: 'bg-[#57B1B1]' },
              { origem: 'Brasília', percentage: 20, color: 'bg-gradient-to-r from-[#D9A47F] to-[#57B1B1]' },
              { origem: 'Internacional', percentage: 20, color: 'bg-gradient-to-r from-[#57B1B1] to-[#D9A47F]' }
            ].map((item, index) => (
              <div key={item.origem}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm font-['Montserrat']">{item.origem}</span>
                  <span className="text-white/70 text-sm font-['Montserrat']">{item.percentage}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className={`h-2 ${item.color} rounded-full`}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MetricsOverview;