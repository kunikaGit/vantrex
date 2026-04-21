import React from 'react';
import './rewards.scss';
import Button from '../Button/Button';

const Rewards = () => {
  return (
    <section className="rewards">
      <div className="container">
        <div className="rewards__content">
          {/* Left Side Content */}
          <div className="rewards__left" data-aos="fade-right">
            <h2 className="rewards__title">
              Show us your <span className="rewards__title-highlight">talent</span><br />
              and be <span className="rewards__title-muted">rewarded</span>
            </h2>

            <div className="rewards__cards">
              {/* Evaluation Process Card */}
              <div className="rewards__card rewards__card--large">
                <div className="rewards__card-header">
                {/* <div className='rewards__linera-border'></div> */}
                  <h3 className="rewards__card-title">Evaluation Process</h3>
                  <span className="rewards__badge">Demo</span>
                </div>

                <div className="rewards__steps">
                  <div className="rewards__step">
                    <div className="rewards__step-header">
                      <span className="rewards__step-number">Step 1</span>
                      <h4 className="rewards__step-title">Novice</h4>
                    </div>
                    <p className="rewards__step-description">
                      The ARC Challenge educates traders and leads them to master their 
                      trading habits. Traders demonstrate their experience by following our 
                      Trading Objectives inspired by key risk management rules when 
                      completing an ARC Challenge, traders move on to the Verification 
                      step.
                    </p>
                  </div>

                  <div className="rewards__step">
                    <div className="rewards__step-header">
                      <span className="rewards__step-number">Step 2</span>
                      <h4 className="rewards__step-title">Expert Phase</h4>
                    </div>
                    <p className="rewards__step-description">
                      The Verification step verifies the skills traders demonstrated in the ARC 
                      Challenge. The Trading Objectives are simplified, with the Profit Target 
                      being halved while the Maximum Loss Rules remain intact. Upon 
                      passing it, traders get access to an ARC Account.
                    </p>
                  </div>
                </div>
              </div>

              {/* Evaluation Process Summary Card */}
              <div className="rewards__card rewards__card--small">
                <h3 className="rewards__card-title">Evaluation Process</h3>
                <div className="rewards__features">
                  <div className="rewards__feature">
                    <span className="rewards__feature-icon">•</span>
                    <span className="rewards__feature-text">Trading Tools & Services</span>
                  </div>
                </div>
                <Button className="rewards__button">Learn More</Button>
              </div>

              {/* ARC Account Card */}
              <div className="rewards__card rewards__card--large">
                <div className="rewards__card-header">
                  <h3 className="rewards__card-title">ARC Account</h3>
                  <span className="rewards__badge rewards__badge--monetized">Monetized Demo</span>
                </div>

                <div className="rewards__step">
                  <div className="rewards__step-header">
                    <span className="rewards__step-number">Step 3</span>
                    <h4 className="rewards__step-title">ARC Trader</h4>
                  </div>
                  <p className="rewards__step-description">
                    Advancing to another step demonstrates commitment and talent, 
                    leading to an ARC Account with fictitious funds of up to $200,000 in a 
                    demo environment. Despite being a demo, ARC Traders can be 
                    rewarded for their performance with profits without risking their 
                    capital and access exclusive opportunities, including the ARC Premium 
                    Programme.
                  </p>
                </div>
              </div>

              {/* ARC Account Summary Card */}
              <div className="rewards__card rewards__card--small">
                <h3 className="rewards__card-title">ARC Account</h3>
                <div className="rewards__features">
                  <div className="rewards__feature">
                    <span className="rewards__feature-icon">•</span>
                    <span className="rewards__feature-text">ARC Account with fictitious funds up to $200,000</span>
                  </div>
                  <div className="rewards__feature">
                    <span className="rewards__feature-icon">•</span>
                    <span className="rewards__feature-text">Reward up to 90% of simulated profits</span>
                  </div>
                  <div className="rewards__feature">
                    <span className="rewards__feature-icon">•</span>
                    <span className="rewards__feature-text">Performance Coaching Sessions</span>
                  </div>
                  <div className="rewards__feature">
                    <span className="rewards__feature-icon">•</span>
                    <span className="rewards__feature-text">ARC Premium Programme</span>
                  </div>
                  <div className="rewards__feature">
                    <span className="rewards__feature-icon">•</span>
                    <span className="rewards__feature-text">All - Trading Tools & Services</span>
                  </div>
                </div>
                <Button className="rewards__button">Learn More</Button>
              </div>
            </div>
          </div>

          {/* Right Side - Empty space for image */}
          <div className="rewards__right" data-aos="fade-left">
            {/* Empty space for image to be added later */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;