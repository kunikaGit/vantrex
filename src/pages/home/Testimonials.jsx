import React, { useRef } from 'react';
import './Testimonials.scss';

const testimonials = [
  {
    id: 1,
    quote: "VANTREX completely changed how I approach prop trading. The one-phase challenge is straightforward and the 90% profit split is unmatched in the industry.",
    name: "Marcus Thompson",
    designation: "Forex Trader · 3 years",
    avatar: "MT",
    rating: 5,
  },
  {
    id: 2,
    quote: "I passed the challenge in just 8 days. The rules are clear, the platform is fast, and payouts hit on time every single time. Highly recommend.",
    name: "Sarah Chen",
    designation: "Crypto & Futures Trader",
    avatar: "SC",
    rating: 5,
  },
  {
    id: 3,
    quote: "After trying 4 other prop firms, VANTREX is the only one I stayed with. No hidden rules, real support, and freedom to trade my strategy without micromanagement.",
    name: "Alejandro Ruiz",
    designation: "Scalper · 5 years",
    avatar: "AR",
    rating: 5,
  },
  {
    id: 4,
    quote: "The instant funding option let me start trading a live account the same day. For experienced traders, this is the fastest path to a funded account.",
    name: "Priya Nair",
    designation: "Swing Trader · Equities",
    avatar: "PN",
    rating: 5,
  },
  {
    id: 5,
    quote: "Transparent drawdown rules, EA support, and the ability to hold trades over the weekend — VANTREX treats traders like professionals.",
    name: "James O'Brien",
    designation: "Algorithmic Trader",
    avatar: "JO",
    rating: 5,
  },
  {
    id: 6,
    quote: "The two-phase program gave me the structure I needed. Consistent targets and a 100% profit split on the funded account is genuinely incredible.",
    name: "Fatima Al-Rashidi",
    designation: "Day Trader · 2 years",
    avatar: "FA",
    rating: 5,
  },
  {
    id: 7,
    quote: "Customer support responded within minutes. When I had a question about my drawdown calculation, they walked me through everything patiently.",
    name: "Daniel Kwan",
    designation: "Options & Futures Trader",
    avatar: "DK",
    rating: 5,
  },
  {
    id: 8,
    quote: "I love that VANTREX supports TradingView. Being able to trade directly from my charts without switching platforms is a huge quality-of-life improvement.",
    name: "Elena Kozlov",
    designation: "Technical Analyst",
    avatar: "EK",
    rating: 5,
  },
  {
    id: 9,
    quote: "Three funded accounts later and I'm consistently scaling my profits. The trailing drawdown locking mechanism is smartly designed.",
    name: "Tobias Müller",
    designation: "Professional Trader · 7 years",
    avatar: "TM",
    rating: 5,
  },
  {
    id: 10,
    quote: "Passed my $100K one-phase challenge with 3 weeks to spare. The rules are fair and the fee refund on the funded account is a genuine differentiator.",
    name: "Amara Osei",
    designation: "Growth Trader · West Africa",
    avatar: "AO",
    rating: 5,
  },
  {
    id: 11,
    quote: "VANTREX's MT5 integration is seamless. I migrated my existing strategy without any modifications and hit my profit target on the first attempt.",
    name: "Lucas Ferreira",
    designation: "EA Developer & Trader",
    avatar: "LF",
    rating: 5,
  },
  {
    id: 12,
    quote: "Unlike other firms, VANTREX doesn't penalize you for trading news. That freedom alone makes it the top choice for macro-based strategies.",
    name: "Yuki Tanaka",
    designation: "Macro Trader · Tokyo",
    avatar: "YT",
    rating: 5,
  },
];

// Split into two columns
const col1 = testimonials.slice(0, 6);
const col2 = testimonials.slice(6, 12);

const StarRating = ({ rating }) => (
  <div className="testimonial-stars">
    {Array.from({ length: rating }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M7 1L8.854 5.09L13.5 5.724L10.25 8.886L11.09 13.5L7 11.25L2.91 13.5L3.75 8.886L0.5 5.724L5.146 5.09L7 1Z"
          fill="url(#starGrad)"
        />
        <defs>
          <linearGradient id="starGrad" x1="0" y1="0" x2="14" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C8993A" />
            <stop offset="1" stopColor="#C8993A" />
          </linearGradient>
        </defs>
      </svg>
    ))}
  </div>
);

const QuoteIcon = () => (
  <svg className="testimonial-quote-icon" width="32" height="24" viewBox="0 0 32 24" fill="none">
    <path
      d="M0 24V14.4C0 10.4 1.06667 7.06667 3.2 4.4C5.33333 1.6 8.26667 0 12 0L13.6 3.2C11.3333 3.73333 9.46667 5.06667 8 7.2C6.66667 9.33333 6 11.7333 6 14.4H12V24H0ZM19.2 24V14.4C19.2 10.4 20.2667 7.06667 22.4 4.4C24.5333 1.6 27.4667 0 31.2 0L32 3.2C29.7333 3.73333 27.8667 5.06667 26.4 7.2C25.0667 9.33333 24.4 11.7333 24.4 14.4H30.4V24H19.2Z"
      fill="url(#quoteGrad)"
      fillOpacity="0.4"
    />
    <defs>
      <linearGradient id="quoteGrad" x1="0" y1="0" x2="32" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C8993A" />
        <stop offset="1" stopColor="#C8993A" />
      </linearGradient>
    </defs>
  </svg>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card">
    <QuoteIcon />
    <StarRating rating={testimonial.rating} />
    <p className="testimonial-card__text">{testimonial.quote}</p>
    <div className="testimonial-card__footer">
      <div className="testimonial-card__avatar">
        <span>{testimonial.avatar}</span>
      </div>
      <div className="testimonial-card__info">
        <span className="testimonial-card__name">{testimonial.name}</span>
        <span className="testimonial-card__designation">{testimonial.designation}</span>
      </div>
    </div>
  </div>
);

const MarqueeColumn = ({ cards, direction = 'up', speed = 4,classname }) => {
  // Duplicate cards for seamless loop
  const allCards = [...cards, ...cards];

  return (
    <div className="testimonial-marquee-column">
      <div
        className={`testimonial-marquee-track testimonial-marquee-track--${direction} ${classname}`}
        style={{ '--marquee-speed': `${speed}s` }}
      >
        {allCards.map((card, index) => (
          <TestimonialCard key={`${card.id}-${index}`} testimonial={card} />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials-section" data-aos="fade-bottom">
      <div className="testimonials-inner container">

        {/* Marquee grid: fades are INSIDE so they anchor to card-viewport edges */}
        <div className="testimonials-marquee-grid">
          {/* Top gradient — masks cards exiting upward */}
          <div className="testimonials-fade testimonials-fade--top" />

          <MarqueeColumn cards={col1} direction="up" speed={38} />
          <MarqueeColumn cards={col2} direction="up" speed={48} classname="marquee-column-hidden"/>

          {/* Bottom gradient — masks cards entering from below */}
          <div className="testimonials-fade testimonials-fade--bottom" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;