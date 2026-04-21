import React, { useState } from 'react';
import Button from '../Button/Button';
import './tradingPlans.scss';
import { Clock, DailyLoss, MaxLoss, ProfitSplit } from '../icons';

const TradingPlans = () => {
  const [activeMainTab, setActiveMainTab] = useState('forex');
  const [activeChallengeType, setActiveChallengeType] = useState('two-step');

  // Main tabs data
  const mainTabs = [
    {
      id: 'forex',
      title: 'Standard Account',
      subtitle: 'Trade 50+ Forex pairs',
      icon: ''
    },
    {
      id: 'crypto',
      title: 'Customized Account',
      subtitle: 'Custom accounts plans',
      icon: ''
    }
  ];

  // Challenge types for Forex
  const forexChallengeTypes = {
    'two-step': {
      title: 'Two-Step',
      features: ['Traditional evaluation', '4% DD, 10% MD'],
      badge: null
    },
    'instant-master': {
      title: 'Instant Master',
      features: ['Fastest rewards', 'No Challenge needed'],
      badge: null
    },
  };


  // Data for Two-Step Challenge (from second screenshot)

  const twoStepData = {
    '15k': {
      amount: '$15K',
      price: '$79',
      novice: {
        profitTarget: '$1,200 (8%)',
        maxLoss: '$750 (5%)',
        maxOverallLoss: '$1,500 (10%)',
        minmumDay: '5 Days',
      },

      expert: {
        profitTarget: '$750 (5%)',
        maxLoss: '$750 (5%)',
        maxOverallLoss: '$1,500 (10%)',
        minmumDay: '5 Days',
      },

      funded: {
        profitTarget: 'unlimited',
        maxLoss: '$750 (5%)',
        maxOverallLoss: '$1,500 (10%)',
        minmumDay: '-',
      }
    },

    '25k': {
      amount: '$25K',
      price: '$179',
      novice: {
        profitTarget: '$2,000 (8%)',
        maxLoss: '$1,250 (5%)',
        maxOverallLoss: '$2,500 (10%)',
        minmumDay: '5 Days',
      },

      expert: {
        profitTarget: '$1,250 (5%)',
        maxLoss: '$1,250 (5%)',
        maxOverallLoss: '$2,500 (10%)',
        minmumDay: '5 Days',
      },

      funded: {
        profitTarget: 'unlimited',
        maxLoss: '$1,250 (5%)',
        maxOverallLoss: '$2,500 (10%)',
        minmumDay: '-',
      }
    },

    '50k': {
      amount: '$50K',
      price: '$299',
      novice: {
        profitTarget: '$4,000 (8%)',
        maxLoss: '$2,500 (5%)',
        maxOverallLoss: '$5,000 (10%)',
        minmumDay: '5 Days',
      },

      expert: {
        profitTarget: '$2,500 (5%)',
        maxLoss: '$2,500 (5%)',
        maxOverallLoss: '$5,000 (10%)',
        minmumDay: '5 Days',
      },

      funded: {
        profitTarget: 'unlimited',
        maxLoss: '$2,500 (5%)',
        maxOverallLoss: '$5,000 (10%)',
        minmumDay: '-',
      }
    },

    '100k': {
      amount: '$100K',
      price: '$549',
      novice: {
        profitTarget: '$8,000 (8%)',
        maxLoss: '$5,000 (5%)',
        maxOverallLoss: '$10,000 (10%)',
        minmumDay: '5 Days',
      },

      expert: {
        profitTarget: '$5,000 (5%)',
        maxLoss: '$5,000 (5%)',
        maxOverallLoss: '$10,000 (10%)',
        minmumDay: '5 Days',
      },

      funded: {
        profitTarget: 'unlimited',
        maxLoss: '$5,000 (5%)',
        maxOverallLoss: '$10,000 (10%)',
        minmumDay: '-',
      }
    },
    '200k': {
      amount: '$100K',
      price: '$999',
      novice: {
        profitTarget: '$10,000 (8%)',
        maxLoss: '$5,000 (5%)',
        maxOverallLoss: '$10,000 (10%)',
        minmumDay: '5 Days',
      },

      expert: {
        profitTarget: '$10,000 (5%)',
        maxLoss: '$5,000 (5%)',
        maxOverallLoss: '$10,000 (10%)',
        minmumDay: '5 Days',
      },

      funded: {
        profitTarget: 'unlimited',
        maxLoss: '$5,000 (5%)',
        maxOverallLoss: '$10,000 (10%)',
        minmumDay: '-',
      }
    }
  };

  // Data for Instant Master
  const instantMasterData = {
    '5k': {
      amount: '$5K',
      accountBalance: '$2,500',
      profitTarget: '10%',
      profitShare: '50%',
      maxDailyLoss: '3%',
      maxOverallLoss: '6%',
      minimumTradingDays: '-',
      price: '$599'
    },
    '10k': {
      amount: '$10K',
      accountBalance: '$5,000',
      profitTarget: '10%',
      profitShare: '50%',
      maxDailyLoss: '3%',
      maxOverallLoss: '6%',
      minimumTradingDays: '-',
      price: '$599'
    },
    '50k': {
      amount: '$50K',
      accountBalance: '$25,000',
      profitTarget: '10%',
      profitShare: '75%',
      maxDailyLoss: '3%',
      maxOverallLoss: '6%',
      minimumTradingDays: '-',
      price: '$2799'
    },
    '100k': {
      amount: '$100K',
      accountBalance: '$25,000',
      profitTarget: '10%',
      profitShare: '80%',
      maxDailyLoss: '3%',
      maxOverallLoss: '6%',
      minimumTradingDays: '-',
      price: '$9689',
      highlight: true
    }
  };


  // Get current data based on active challenge type
  const getCurrentData = () => {
    if (activeMainTab === 'crypto') {
      return {}; // Empty for crypto as requested
    }

    switch (activeChallengeType) {
      case 'two-step':
        return twoStepData;
      case 'instant-master':
        return instantMasterData;
      default:
        return twoStepData;
    }
  };

  const currentData = getCurrentData();
  const accountSizes = Object.keys(currentData);

  return (
    <section className="trading-plans-new" data-aos="fade-up">
      <div className="container">
        {/* Main Tabs */}
        <div className="trading-plans-new__main-tabs">
          {mainTabs.map((tab) => (
            <button
              key={tab.id}
              className={`trading-plans-new__main-tab ${activeMainTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveMainTab(tab.id)}
            >
              <span className="trading-plans-new__main-tab-icon">{tab.icon}</span>
              <div className="trading-plans-new__main-tab-content">
                <h3 className="trading-plans-new__main-tab-title">{tab.title}</h3>
                <p className="trading-plans-new__main-tab-subtitle">{tab.subtitle}</p>
              </div>
            </button>
          ))}
        </div>

<div className='trading-plans-new__main-inner'>
        {/* Challenge Types */}
        {activeMainTab === 'forex' && (
          <div className="trading-plans-new__challenge-types">
            {Object.entries(forexChallengeTypes).map(([key, challenge]) => (
              <div
                key={key}
                className={`trading-plans-new__challenge-type ${activeChallengeType === key ? 'active' : ''}`}
                onClick={() => setActiveChallengeType(key)}
              >
                {challenge.badge && (
                  <div className={`trading-plans-new__challenge-badge ${challenge.badgeColor}`}>
                    {challenge.badge}
                  </div>
                )}
                <h4 className="trading-plans-new__challenge-title">{challenge.title}</h4>
                <ul className="trading-plans-new__challenge-features">
                  {challenge.features.map((feature, index) => (
                    <li key={index} className="trading-plans-new__challenge-feature">
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div class="trading-plans-new__stat-glow"></div>
              </div>
            ))}
          </div>
        )}

        {/* Crypto Empty State */}
        {activeMainTab === 'crypto' && (
          <div className="trading-plans-new__empty-state">
            <p>Crypto trading plans coming soon...</p>
          </div>
        )}

        {/* Vertical Table */}
        {activeMainTab === 'forex' && accountSizes.length > 0 && (
          <div className="trading-plans-new__table">
            {/* Account Size Headers */}
            <div className="trading-plans-new__account-headers">
              <div className="trading-plans-new__feature-column"></div>
              {accountSizes.map((size) => (
                <div
                  key={size}
                  className={`trading-plans-new__account-header ${currentData[size].highlight ? 'highlight' : ''}`}
                >
                  <h3 className="trading-plans-new__account-amount">{currentData[size].amount}</h3>
                  <p className="trading-plans-new__account-label">Funded Stage</p>
                </div>
              ))}
            </div>

            {/* Profit Target Row(s) */}
            {activeChallengeType === 'two-step' ? (
              <>
                <div className="trading-plans-new__table-row">
                  <div className="trading-plans-new__feature-cell">
                    <span className="trading-plans-new__feature-icon"><ProfitSplit/></span>
                    <div className="trading-plans-new__feature-text">
                      <span className="trading-plans-new__feature-title">Profit Target</span>
                      <span className="trading-plans-new__feature-subtitle">Novice</span>
                    </div>
                  </div>
                  {accountSizes.map((size) => (
                    <div key={size} className="trading-plans-new__value-cell">
                      <span className="trading-plans-new__value-text">{currentData[size].novice?.profitTarget}</span>
                    </div>
                  ))}
                </div>
                <div className="trading-plans-new__table-row">
                  <div className="trading-plans-new__feature-cell">
                    <span className="trading-plans-new__feature-icon"><ProfitSplit/></span>
                    <div className="trading-plans-new__feature-text">
                      <span className="trading-plans-new__feature-title">Profit Target</span>
                      <span className="trading-plans-new__feature-subtitle">Expert</span>
                    </div>
                  </div>
                  {accountSizes.map((size) => (
                    <div key={size} className="trading-plans-new__value-cell">
                      <span className="trading-plans-new__value-text">{currentData[size].expert?.profitTarget}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : activeChallengeType === 'instant-master' || activeChallengeType === 'instant-master-pro' ? (
              <>
                <div className="trading-plans-new__table-row">
                  <div className="trading-plans-new__feature-cell">
                    <span className="trading-plans-new__feature-icon"><Clock/></span>
                    <div className="trading-plans-new__feature-text">
                      <span className="trading-plans-new__feature-title">Funded Stage</span>
                      <span className="trading-plans-new__feature-subtitle">ARC Funded Traders</span>
                    </div>
                  </div>
                  {accountSizes.map((size) => (
                    <div key={size} className="trading-plans-new__value-cell">
                      <span className="trading-plans-new__value-text">{currentData[size].accountBalance}</span>
                    </div>
                  ))}
                </div>
                <div className="trading-plans-new__table-row">
                  <div className="trading-plans-new__feature-cell">
                    <span className="trading-plans-new__feature-icon"><ProfitSplit/></span>
                    <div className="trading-plans-new__feature-text">
                      <span className="trading-plans-new__feature-title">Profit Target</span>
                    </div>
                  </div>
                  {accountSizes.map((size) => (
                    <div key={size} className="trading-plans-new__value-cell">
                      <span className="trading-plans-new__value-text">{currentData[size].profitTarget}</span>
                    </div>
                  ))}
                </div>
                <div className="trading-plans-new__table-row">
                  <div className="trading-plans-new__feature-cell">
                    <span className="trading-plans-new__feature-icon"><ProfitSplit/></span>
                    <div className="trading-plans-new__feature-text">
                      <span className="trading-plans-new__feature-title">Profit Share</span>
                    </div>
                  </div>
                  {accountSizes.map((size) => (
                    <div key={size} className="trading-plans-new__value-cell">
                      <span className="trading-plans-new__value-text">{currentData[size].profitShare}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="trading-plans-new__table-row">
                <div className="trading-plans-new__feature-cell">
                  <span className="trading-plans-new__feature-icon">🎯</span>
                  <div className="trading-plans-new__feature-text">
                    <span className="trading-plans-new__feature-title">Profit Target</span>
                    <span className="trading-plans-new__feature-subtitle">ARC Funded Traders</span>
                  </div>
                </div>
                {accountSizes.map((size) => (
                  <div key={size} className="trading-plans-new__value-cell">
                    <span className="trading-plans-new__value-text">{currentData[size].funded?.profitTarget}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Max Loss Row */}
            {activeChallengeType === 'two-step' ? (
              <>
                <div className="trading-plans-new__table-row">
                  <div className="trading-plans-new__feature-cell">
                    <span className="trading-plans-new__feature-icon"><DailyLoss/></span>
                    <div className="trading-plans-new__feature-text">
                      <span className="trading-plans-new__feature-title">Maximum Daily Loss</span>
                      <span className="trading-plans-new__feature-subtitle">Novice</span>
                    </div>
                  </div>
                  {accountSizes.map((size) => (
                    <div key={size} className="trading-plans-new__value-cell">
                      <span className="trading-plans-new__value-text">{currentData[size].novice?.maxLoss}</span>
                    </div>
                  ))}
                </div>
                <div className="trading-plans-new__table-row">
                  <div className="trading-plans-new__feature-cell">
                    <span className="trading-plans-new__feature-icon"><DailyLoss/></span>
                    <div className="trading-plans-new__feature-text">
                      <span className="trading-plans-new__feature-title">Maximum Daily Loss</span>
                      <span className="trading-plans-new__feature-subtitle">Expert</span>
                    </div>
                  </div>
                  {accountSizes.map((size) => (
                    <div key={size} className="trading-plans-new__value-cell">
                      <span className="trading-plans-new__value-text">{currentData[size].expert?.maxLoss}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : activeChallengeType === 'instant-master' || activeChallengeType === 'instant-master-pro' ? (
              <div className="trading-plans-new__table-row">
                <div className="trading-plans-new__feature-cell">
                  <span className="trading-plans-new__feature-icon"><DailyLoss/></span>
                  <div className="trading-plans-new__feature-text">
                    <span className="trading-plans-new__feature-title">Maximum Daily Loss</span>
                  </div>
                </div>
                {accountSizes.map((size) => (
                  <div key={size} className="trading-plans-new__value-cell">
                    <span className="trading-plans-new__value-text">{currentData[size].maxDailyLoss}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="trading-plans-new__table-row">
                <div className="trading-plans-new__feature-cell">
                  <span className="trading-plans-new__feature-icon">📉</span>
                  <div className="trading-plans-new__feature-text">
                    <span className="trading-plans-new__feature-title">Maximum Daily Loss</span>
                    <span className="trading-plans-new__feature-subtitle">Novice</span>
                  </div>
                </div>
                {accountSizes.map((size) => (
                  <div key={size} className="trading-plans-new__value-cell">
                    <span className="trading-plans-new__value-text">{currentData[size].maxLoss}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Maximum Overall Loss Row */}
            {activeChallengeType === 'two-step' ? (
              <>
                <div className="trading-plans-new__table-row">
                  <div className="trading-plans-new__feature-cell">
                    <span className="trading-plans-new__feature-icon"><MaxLoss/></span>
                    <div className="trading-plans-new__feature-text">
                      <span className="trading-plans-new__feature-title">Maximum Overall Loss</span>
                      <span className="trading-plans-new__feature-subtitle">Novice</span>
                    </div>
                  </div>
                  {accountSizes.map((size) => (
                    <div key={size} className="trading-plans-new__value-cell">
                      <span className="trading-plans-new__value-text">{currentData[size].novice?.maxOverallLoss}</span>
                    </div>
                  ))}
                </div>
                <div className="trading-plans-new__table-row">
                  <div className="trading-plans-new__feature-cell">
                    <span className="trading-plans-new__feature-icon"><MaxLoss/></span>
                    <div className="trading-plans-new__feature-text">
                      <span className="trading-plans-new__feature-title">Maximum Overall Loss</span>
                      <span className="trading-plans-new__feature-subtitle">Expert</span>
                    </div>
                  </div>
                  {accountSizes.map((size) => (
                    <div key={size} className="trading-plans-new__value-cell">
                      <span className="trading-plans-new__value-text">{currentData[size].expert?.maxOverallLoss}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : activeChallengeType === 'instant-master' || activeChallengeType === 'instant-master-pro' ? (
              <div className="trading-plans-new__table-row">
                <div className="trading-plans-new__feature-cell">
                  <span className="trading-plans-new__feature-icon"><MaxLoss/></span>
                  <div className="trading-plans-new__feature-text">
                    <span className="trading-plans-new__feature-title">Maximum Overall Loss</span>
                  </div>
                </div>
                {accountSizes.map((size) => (
                  <div key={size} className="trading-plans-new__value-cell">
                    <span className="trading-plans-new__value-text">{currentData[size].maxOverallLoss}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="trading-plans-new__table-row">
                <div className="trading-plans-new__feature-cell">
                  <span className="trading-plans-new__feature-icon"><DailyLoss/></span>
                  <div className="trading-plans-new__feature-text">
                    <span className="trading-plans-new__feature-title">Daily Drawdown</span>
                  </div>
                </div>
                {accountSizes.map((size) => (
                  <div key={size} className="trading-plans-new__value-cell">
                    <span className="trading-plans-new__value-text">{currentData[size].dailyDrawdown}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Minimum Days Row (Two-Step Only) */}
            {activeChallengeType === 'two-step' ? (
              <>
                <div className="trading-plans-new__table-row">
                  <div className="trading-plans-new__feature-cell">
                    <span className="trading-plans-new__feature-icon"><Clock/></span>
                    <div className="trading-plans-new__feature-text">
                      <span className="trading-plans-new__feature-title">Minimum Days</span>
                      <span className="trading-plans-new__feature-subtitle">Novice</span>
                    </div>
                  </div>
                  {accountSizes.map((size) => (
                    <div key={size} className="trading-plans-new__value-cell">
                      <span className="trading-plans-new__value-text">{currentData[size].novice?.minmumDay}</span>
                    </div>
                  ))}
                </div>
                <div className="trading-plans-new__table-row">
                  <div className="trading-plans-new__feature-cell">
                    <span className="trading-plans-new__feature-icon"><Clock/></span>
                    <div className="trading-plans-new__feature-text">
                      <span className="trading-plans-new__feature-title">Minimum Days</span>
                      <span className="trading-plans-new__feature-subtitle">Expert</span>
                    </div>
                  </div>
                  {accountSizes.map((size) => (
                    <div key={size} className="trading-plans-new__value-cell">
                      <span className="trading-plans-new__value-text">{currentData[size].expert?.minmumDay}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : activeChallengeType === 'instant-master' || activeChallengeType === 'instant-master-pro' ? (
              <div className="trading-plans-new__table-row">
                <div className="trading-plans-new__feature-cell">
                  <span className="trading-plans-new__feature-icon"><Clock/></span>
                  <div className="trading-plans-new__feature-text">
                    <span className="trading-plans-new__feature-title">Minimum Trading Days</span>
                  </div>
                </div>
                {accountSizes.map((size) => (
                  <div key={size} className="trading-plans-new__value-cell">
                    <span className="trading-plans-new__value-text">{currentData[size].minimumTradingDays}</span>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="trading-plans-new__table-row">
                  <div className="trading-plans-new__feature-cell">
                    <span className="trading-plans-new__feature-icon">💰</span>
                    <div className="trading-plans-new__feature-text">
                      <span className="trading-plans-new__feature-title">Rewards</span>
                    </div>
                  </div>
                  {accountSizes.map((size) => (
                    <div key={size} className="trading-plans-new__value-cell">
                      <span className="trading-plans-new__value-text">{currentData[size].rewards}</span>
                    </div>
                  ))}
                </div>

                <div className="trading-plans-new__table-row">
                  <div className="trading-plans-new__feature-cell">
                    <span className="trading-plans-new__feature-icon">💹</span>
                    <div className="trading-plans-new__feature-text">
                      <span className="trading-plans-new__feature-title">Profit Split</span>
                    </div>
                  </div>
                  {accountSizes.map((size) => (
                    <div key={size} className="trading-plans-new__value-cell">
                      <span className="trading-plans-new__value-text">{currentData[size].profitSplit}</span>
                    </div>
                  ))}
                </div>

                <div className="trading-plans-new__table-row">
                  <div className="trading-plans-new__feature-cell">
                    <span className="trading-plans-new__feature-icon">⏰</span>
                    <div className="trading-plans-new__feature-text">
                      <span className="trading-plans-new__feature-title">Time Limit</span>
                    </div>
                  </div>
                  {accountSizes.map((size) => (
                    <div key={size} className="trading-plans-new__value-cell">
                      <span className="trading-plans-new__value-text">{currentData[size].timeLimit}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* One-Time Fee Row */}
            <div className="trading-plans-new__table-row">
              <div className="trading-plans-new__feature-cell">
                <span className="trading-plans-new__feature-icon"></span>
                <div className="trading-plans-new__feature-text">
                  <span className="trading-plans-new__feature-title">One-Time Fee</span>
                </div>
              </div>
              {accountSizes.map((size) => (
                <div key={size} className="trading-plans-new__value-cell">
                  <div className="trading-plans-new__pricing">
                    <span className="trading-plans-new__current-price">{currentData[size].price}</span>
                    {currentData[size].strikePrice && (
                      <span className="trading-plans-new__strike-price">{currentData[size].strikePrice}</span>
                    )}
                  </div>
                  {currentData[size].code && (
                    <div className="trading-plans-new__discount-code">{currentData[size].code}</div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Row */}
            <div className="trading-plans-new__table-row">
              <div className="trading-plans-new__feature-cell"></div>
              {accountSizes.map((size) => (
                <div key={size} className="trading-plans-new__value-cell">
                   <Button variant="primary" size="large"  >
                    Start Now
                 </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </div>
    </section>
  );
};

export default TradingPlans;