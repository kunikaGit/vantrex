import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './home3.scss';
import image from '../../utils/helper';
import PricingSection from './Pricingtabl';
import Testimonials from './Testimonials';
import { Footer, Rewards } from '../../components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Header from '../../components/Header';

// Register ScrollTrigger plugin once
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // ── Refs ─────────────────────────────────────────────────────────
  const textRef        = useRef(null);   // hero paragraph (SplitType)
  const heroTitleRef   = useRef(null);   // hero h1
  const heroBtnRef     = useRef(null);   // CTA buttons wrapper
  const heroSliderRef  = useRef(null);   // animated text slider
  const testimonialRef = useRef(null);   // testimonials section wrapper
  const rewardsRef     = useRef(null);   // rewards section wrapper
  const pricingRef     = useRef(null);   // pricing section wrapper

  const animatedTexts = [
    '90% Profit Split',
    '300K+ Trading Accounts',
    'Accounts Fully Customizable',
    'No Time Limit In Challenge Phase',
  ];

  // ── Scroll listener ──────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Hero entrance animation (SplitType paragraph) ────────────────
  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: 'chars' });

    gsap.from(split.chars, {
      x: -100,
      opacity: 0,
      stagger: 0.04,
      duration: 0.6,
      ease: 'power3.out',
    });

    return () => split.revert();
  }, []);

  // ── Hero entrance — title & CTA ──────────────────────────────────
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(heroTitleRef.current, {
      y: 60,
      opacity: 0,
      duration: 0.9,
    })
      .from(
        heroBtnRef.current,
        { y: 30, opacity: 0, duration: 0.7 },
        '-=0.4'
      )
      .from(
        heroSliderRef.current,
        { y: 20, opacity: 0, duration: 0.5 },
        '-=0.3'
      );
  }, []);

  // ── Scroll-triggered section reveals ─────────────────────────────
  useEffect(() => {
    // Helper — fade-up from below for section wrappers
    const fadeUpSection = (el) => {
      if (!el) return;
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',   // fire when top of element is 85% down viewport
          toggleActions: 'play none none none',
        },
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });
    };

    // Testimonials — fade up
    fadeUpSection(testimonialRef.current);

    // Rewards — stagger children cards
    if (rewardsRef.current) {
      const cards = rewardsRef.current.querySelectorAll('.rewards__card');
      if (cards.length) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: rewardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          y: 50,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
        });
      } else {
        fadeUpSection(rewardsRef.current);
      }
    }

    // Pricing — slide in from bottom with slight scale
    if (pricingRef.current) {
      gsap.from(pricingRef.current, {
        scrollTrigger: {
          trigger: pricingRef.current,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
        y: 80,
        opacity: 0,
        scale: 0.97,
        duration: 1,
        ease: 'power4.out',
      });
    }

    // Cleanup all ScrollTriggers on unmount
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="home3-wrapper">
      <Header />
      {/* ── Main ───────────────────────────────────────────────── */}
      <main className="home3-main">
        {/* Background Video */}
        <div className="home3-video-background">
          {/* <video autoPlay muted loop playsInline>
            <source src="/src/assets/images/bg.mp4"  type="video/mp4" />
            <source src="/src/assets/images/bg.webm" type="video/webm" />
          </video> */}
          <img src={image['golden_bg.jpg']} alt="Background" className="home3-bg-image" />
          <div className="home3-video-overlay" />
        </div>

        <div className="container">
          <div className="home3-content">
            {/* Title — GSAP entrance ref */}
            <h1 className="home3-title" ref={heroTitleRef}>
              <span className="home3-title-highlight">VANTREX</span> Built for{' '}
              <span className="home3-title-highlight">Traders</span>
              <br />
              <span className=''>Backed by Professionals!</span>
            </h1>

            {/* Paragraph — SplitType char animation */}
            <div className="para" ref={textRef}>
              Master your trading skills on our simulated trading platform,
              improve your trading on a demo VANTREX Account with up to $300,000 and
              get a reward of up to 90% of your simulated profits
            </div>

            {/* CTA Buttons */}
            <div className="cta" ref={heroBtnRef}>
              <button className="home3-cta-button primary-btn">VANTREX CHALLENGE</button>
              <button className="home3-cta-button bordered">Go To Dashboard</button>
            </div>

            {/* Animated Text Slider */}
            <div className="home3-animated-text" ref={heroSliderRef}>
              <div className="home3-text-slider">
                {animatedTexts.map((text, index) => (
                  <div
                    key={index}
                    className="home3-slide-text"
                    style={{ animationDelay: `${index * 3}s` }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* ── Sections with scroll-reveal refs ─────────────────── */}
      <div ref={testimonialRef}>
        <Testimonials />
      </div>

      <section ref={rewardsRef}>
        <Rewards />
      </section>

      <section className="pricing-table-section" ref={pricingRef}>
        <PricingSection />
      </section>

      <Footer />
    </div>
  );
};

export default Home;