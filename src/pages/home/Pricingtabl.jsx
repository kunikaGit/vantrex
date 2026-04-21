import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./Pricingsection.module.scss";

// ─── DATA ────────────────────────────────────────────────────────────────────

const ACCOUNT_TYPES = [
  { id: 2, label: "Two Phase" },
  { id: 4, label: "Instant Funding" },
];

const SUBTYPES = {
  2: [
    { id: "classic",  label: "Classic",  sub: "Static"   },
    { id: "standard", label: "Standard", sub: "Trailing" },
  ],
  4: [
    { id: "standard", label: "Standard", sub: "Trailing" },
  ],
};

// Account sizes per type
const ACCOUNT_SIZES = {
  2: ["$5k", "$15k", "$25k", "$50k", "$100k", "$200k"],
  4: ["$5k", "$15k", "$25k", "$50k", "$100k"],
};

// ─── PRICING DATA ────────────────────────────────────────────────────────────
// Two Phase prices from Image 1 (Price / Net)
// Instant Funding prices from Image 2

const PRICING_DATA = {
  // ── TWO PHASE ──────────────────────────────────────────────────────────────
  2: {
    classic: {
      "$5k": {
        badge: "For Beginners",
        title: "Two Phase – Classic, 2 steps",
        originalPrice: "$29",
        discountedPrice: "$26",
        coupon: "ARC10",
        phases: ["Phase 1", "Phase 2", "Funded"],
        features: [
          { label: "Profit Target",        value: "$250",  badge: "5%"  },
          { label: "Daily Loss Limit",     value: "4%",    desc: "Calculated based on the balance at the end of the previous trading day (5PM EST). If equity drops below this level it is a breach." },
          { label: "Max Static Drawdown",  value: "10%" },
          { label: "Consistency Rule",     value: "N/A" },
        ],
        allPlans: {
          "Minimum Trading Days":    "4 days",
          "Maximum Trading Days":    "Unlimited",
          "Performance Split":       "up to 100%",
          "Leverage":                "up to 30:1",
          "Drawdown Type":           "Static",
          "EAs Allowed":             "Yes",
          "Hold Over Weekend":       "Yes",
          "Trade Through News":      "Yes",
          "Platform":                "MT4, MT5, DXTrade or TradingView",
          "Payout On Demand":        "No",
          "Payout Frequency":        "14 or 30 Days",
        },
      },
      "$15k": {
        badge: "For Beginners",
        title: "Two Phase – Classic, 2 steps",
        originalPrice: "$75",
        discountedPrice: "$70.50",
        coupon: "ARC10",
        phases: ["Phase 1", "Phase 2", "Funded"],
        features: [
          { label: "Profit Target",        value: "$750",  badge: "5%"  },
          { label: "Daily Loss Limit",     value: "4%",    desc: "Calculated based on the balance at the end of the previous trading day (5PM EST)." },
          { label: "Max Static Drawdown",  value: "10%" },
          { label: "Consistency Rule",     value: "N/A" },
        ],
        allPlans: {
          "Minimum Trading Days":    "4 days",
          "Maximum Trading Days":    "Unlimited",
          "Performance Split":       "up to 100%",
          "Leverage":                "up to 30:1",
          "Drawdown Type":           "Static",
          "EAs Allowed":             "Yes",
          "Hold Over Weekend":       "Yes",
          "Trade Through News":      "Yes",
          "Platform":                "MT4, MT5, DXTrade or TradingView",
          "Payout On Demand":        "No",
          "Payout Frequency":        "14 or 30 Days",
        },
      },
      "$25k": {
        badge: "Popular",
        title: "Two Phase – Classic, 2 steps",
        originalPrice: "$129",
        discountedPrice: "$121.50",
        coupon: "ARC10",
        phases: ["Phase 1", "Phase 2", "Funded"],
        features: [
          { label: "Profit Target",        value: "$1,250", badge: "5%"  },
          { label: "Daily Loss Limit",     value: "4%",     desc: "Calculated based on the balance at the end of the previous trading day (5PM EST)." },
          { label: "Max Static Drawdown",  value: "10%" },
          { label: "Consistency Rule",     value: "N/A" },
        ],
        allPlans: {
          "Minimum Trading Days":    "4 days",
          "Maximum Trading Days":    "Unlimited",
          "Performance Split":       "up to 100%",
          "Leverage":                "up to 30:1",
          "Drawdown Type":           "Static",
          "EAs Allowed":             "Yes",
          "Hold Over Weekend":       "Yes",
          "Trade Through News":      "Yes",
          "Platform":                "MT4, MT5, DXTrade or TradingView",
          "Payout On Demand":        "No",
          "Payout Frequency":        "14 or 30 Days",
        },
      },
      "$50k": {
        badge: "Popular",
        title: "Two Phase – Classic, 2 steps",
        originalPrice: "$249",
        discountedPrice: "$234",
        coupon: "ARC10",
        phases: ["Phase 1", "Phase 2", "Funded"],
        features: [
          { label: "Profit Target",        value: "$2,500", badge: "5%"  },
          { label: "Daily Loss Limit",     value: "4%",     desc: "Calculated based on the balance at the end of the previous trading day (5PM EST)." },
          { label: "Max Static Drawdown",  value: "10%" },
          { label: "Consistency Rule",     value: "N/A" },
        ],
        allPlans: {
          "Minimum Trading Days":    "4 days",
          "Maximum Trading Days":    "Unlimited",
          "Performance Split":       "up to 100%",
          "Leverage":                "up to 30:1",
          "Drawdown Type":           "Static",
          "EAs Allowed":             "Yes",
          "Hold Over Weekend":       "Yes",
          "Trade Through News":      "Yes",
          "Platform":                "MT4, MT5, DXTrade or TradingView",
          "Payout On Demand":        "No",
          "Payout Frequency":        "14 or 30 Days",
        },
      },
      "$100k": {
        badge: "Best Value",
        title: "Two Phase – Classic, 2 steps",
        originalPrice: "$489",
        discountedPrice: "$459",
        coupon: "ARC10",
        phases: ["Phase 1", "Phase 2", "Funded"],
        features: [
          { label: "Profit Target",        value: "$5,000", badge: "5%"  },
          { label: "Daily Loss Limit",     value: "4%",     desc: "Calculated based on the balance at the end of the previous trading day (5PM EST)." },
          { label: "Max Static Drawdown",  value: "10%" },
          { label: "Consistency Rule",     value: "N/A" },
        ],
        allPlans: {
          "Minimum Trading Days":    "4 days",
          "Maximum Trading Days":    "Unlimited",
          "Performance Split":       "up to 100%",
          "Leverage":                "up to 30:1",
          "Drawdown Type":           "Static",
          "EAs Allowed":             "Yes",
          "Hold Over Weekend":       "Yes",
          "Trade Through News":      "Yes",
          "Platform":                "MT4, MT5, DXTrade or TradingView",
          "Payout On Demand":        "No",
          "Payout Frequency":        "14 or 30 Days",
        },
      },
      "$200k": {
        badge: "Best Value",
        title: "Two Phase – Classic, 2 steps",
        originalPrice: "$969",
        discountedPrice: "$909",
        coupon: "ARC10",
        phases: ["Phase 1", "Phase 2", "Funded"],
        features: [
          { label: "Profit Target",        value: "$10,000", badge: "5%"  },
          { label: "Daily Loss Limit",     value: "4%",      desc: "Calculated based on the balance at the end of the previous trading day (5PM EST)." },
          { label: "Max Static Drawdown",  value: "10%" },
          { label: "Consistency Rule",     value: "N/A" },
        ],
        allPlans: {
          "Minimum Trading Days":    "4 days",
          "Maximum Trading Days":    "Unlimited",
          "Performance Split":       "up to 100%",
          "Leverage":                "up to 30:1",
          "Drawdown Type":           "Static",
          "EAs Allowed":             "Yes",
          "Hold Over Weekend":       "Yes",
          "Trade Through News":      "Yes",
          "Platform":                "MT4, MT5, DXTrade or TradingView",
          "Payout On Demand":        "No",
          "Payout Frequency":        "14 or 30 Days",
        },
      },
    },

    standard: {
      "$5k": {
        badge: "For Beginners",
        title: "Two Phase – Standard, 2 steps",
        originalPrice: "$29",
        discountedPrice: "$26",
        coupon: "ARC10",
        phases: ["Phase 1", "Phase 2", "Funded"],
        features: [
          { label: "Profit Target",          value: "$500",  badge: "10%" },
          { label: "Daily Loss Limit",       value: "4%",    desc: "Calculated based on the balance at the end of the previous trading day (5PM EST). If equity drops below this level it is a breach." },
          { label: "Max Trailing Drawdown",  value: "10%",   desc: "Trailing drawdown – 10% trails your closed trading balance until you reach 10% profits. Once achieved, MAX drawdown locks at your starting balance." },
          { label: "Refundable Fee",         value: "100%" },
        ],
        allPlans: {
          "Minimum Trading Days":    "5 days",
          "Maximum Trading Days":    "Unlimited",
          "Performance Split":       "up to 90%",
          "Leverage":                "up to 50:1",
          "Drawdown Type":           "Trailing",
          "EAs Allowed":             "Yes",
          "Refund":                  "100%",
          "Hold Over Weekend":       "Yes",
          "Trade Through News":      "Yes",
          "Platform":                "MT4, MT5, DXTrade or TradingView",
          "Payout On Demand":        "Yes",
          "Payout Frequency":        "14 or 30 Days",
        },
      },
      "$15k": {
        badge: "For Beginners",
        title: "Two Phase – Standard, 2 steps",
        originalPrice: "$75",
        discountedPrice: "$70.50",
        coupon: "ARC10",
        phases: ["Phase 1", "Phase 2", "Funded"],
        features: [
          { label: "Profit Target",          value: "$1,500", badge: "10%" },
          { label: "Daily Loss Limit",       value: "4%",     desc: "Calculated based on the balance at the end of the previous trading day (5PM EST)." },
          { label: "Max Trailing Drawdown",  value: "10%",    desc: "Trailing drawdown locks at starting balance once 10% profits are reached." },
          { label: "Refundable Fee",         value: "100%" },
        ],
        allPlans: {
          "Minimum Trading Days":    "5 days",
          "Maximum Trading Days":    "Unlimited",
          "Performance Split":       "up to 90%",
          "Leverage":                "up to 50:1",
          "Drawdown Type":           "Trailing",
          "EAs Allowed":             "Yes",
          "Refund":                  "100%",
          "Hold Over Weekend":       "Yes",
          "Trade Through News":      "Yes",
          "Platform":                "MT4, MT5, DXTrade or TradingView",
          "Payout On Demand":        "Yes",
          "Payout Frequency":        "14 or 30 Days",
        },
      },
      "$25k": {
        badge: "Popular",
        title: "Two Phase – Standard, 2 steps",
        originalPrice: "$129",
        discountedPrice: "$121.50",
        coupon: "ARC10",
        phases: ["Phase 1", "Phase 2", "Funded"],
        features: [
          { label: "Profit Target",          value: "$2,500", badge: "10%" },
          { label: "Daily Loss Limit",       value: "4%",     desc: "Calculated based on the balance at the end of the previous trading day (5PM EST)." },
          { label: "Max Trailing Drawdown",  value: "10%",    desc: "Trailing drawdown locks at starting balance once 10% profits are reached." },
          { label: "Refundable Fee",         value: "100%" },
        ],
        allPlans: {
          "Minimum Trading Days":    "5 days",
          "Maximum Trading Days":    "Unlimited",
          "Performance Split":       "up to 90%",
          "Leverage":                "up to 50:1",
          "Drawdown Type":           "Trailing",
          "EAs Allowed":             "Yes",
          "Refund":                  "100%",
          "Hold Over Weekend":       "Yes",
          "Trade Through News":      "Yes",
          "Platform":                "MT4, MT5, DXTrade or TradingView",
          "Payout On Demand":        "Yes",
          "Payout Frequency":        "14 or 30 Days",
        },
      },
      "$50k": {
        badge: "Popular",
        title: "Two Phase – Standard, 2 steps",
        originalPrice: "$249",
        discountedPrice: "$234",
        coupon: "ARC10",
        phases: ["Phase 1", "Phase 2", "Funded"],
        features: [
          { label: "Profit Target",          value: "$5,000", badge: "10%" },
          { label: "Daily Loss Limit",       value: "4%",     desc: "Calculated based on the balance at the end of the previous trading day (5PM EST)." },
          { label: "Max Trailing Drawdown",  value: "10%",    desc: "Trailing drawdown locks at starting balance once 10% profits are reached." },
          { label: "Refundable Fee",         value: "100%" },
        ],
        allPlans: {
          "Minimum Trading Days":    "5 days",
          "Maximum Trading Days":    "Unlimited",
          "Performance Split":       "up to 90%",
          "Leverage":                "up to 50:1",
          "Drawdown Type":           "Trailing",
          "EAs Allowed":             "Yes",
          "Refund":                  "100%",
          "Hold Over Weekend":       "Yes",
          "Trade Through News":      "Yes",
          "Platform":                "MT4, MT5, DXTrade or TradingView",
          "Payout On Demand":        "Yes",
          "Payout Frequency":        "14 or 30 Days",
        },
      },
      "$100k": {
        badge: "Best Value",
        title: "Two Phase – Standard, 2 steps",
        originalPrice: "$489",
        discountedPrice: "$459",
        coupon: "ARC10",
        phases: ["Phase 1", "Phase 2", "Funded"],
        features: [
          { label: "Profit Target",          value: "$10,000", badge: "10%" },
          { label: "Daily Loss Limit",       value: "4%",      desc: "Calculated based on the balance at the end of the previous trading day (5PM EST)." },
          { label: "Max Trailing Drawdown",  value: "10%",     desc: "Trailing drawdown locks at starting balance once 10% profits are reached." },
          { label: "Refundable Fee",         value: "100%" },
        ],
        allPlans: {
          "Minimum Trading Days":    "5 days",
          "Maximum Trading Days":    "Unlimited",
          "Performance Split":       "up to 90%",
          "Leverage":                "up to 50:1",
          "Drawdown Type":           "Trailing",
          "EAs Allowed":             "Yes",
          "Refund":                  "100%",
          "Hold Over Weekend":       "Yes",
          "Trade Through News":      "Yes",
          "Platform":                "MT4, MT5, DXTrade or TradingView",
          "Payout On Demand":        "Yes",
          "Payout Frequency":        "14 or 30 Days",
        },
      },
      "$200k": {
        badge: "Best Value",
        title: "Two Phase – Standard, 2 steps",
        originalPrice: "$969",
        discountedPrice: "$909",
        coupon: "ARC10",
        phases: ["Phase 1", "Phase 2", "Funded"],
        features: [
          { label: "Profit Target",          value: "$20,000", badge: "10%" },
          { label: "Daily Loss Limit",       value: "4%",      desc: "Calculated based on the balance at the end of the previous trading day (5PM EST)." },
          { label: "Max Trailing Drawdown",  value: "10%",     desc: "Trailing drawdown locks at starting balance once 10% profits are reached." },
          { label: "Refundable Fee",         value: "100%" },
        ],
        allPlans: {
          "Minimum Trading Days":    "5 days",
          "Maximum Trading Days":    "Unlimited",
          "Performance Split":       "up to 90%",
          "Leverage":                "up to 50:1",
          "Drawdown Type":           "Trailing",
          "EAs Allowed":             "Yes",
          "Refund":                  "100%",
          "Hold Over Weekend":       "Yes",
          "Trade Through News":      "Yes",
          "Platform":                "MT4, MT5, DXTrade or TradingView",
          "Payout On Demand":        "Yes",
          "Payout Frequency":        "14 or 30 Days",
        },
      },
    },
  },

  // ── INSTANT FUNDING ────────────────────────────────────────────────────────
  4: {
    standard: {
      "$5k": {
        badge: "Most Popular",
        title: "Instant Funding – Standard, 0 steps",
        originalPrice: "$169",
        discountedPrice: "$169",
        coupon: null,
        phases: ["Funded"],
        features: [
          { label: "Profit Target",         value: "–" },
          { label: "Daily Loss Limit",      value: "8%", desc: "Calculated based on the balance at the end of the previous trading day (5PM EST). If equity drops below this level it is a breach." },
          { label: "Max Trailing Drawdown", value: "8%", desc: "Trailing drawdown – 8% trails your closed trading balance until you reach 8% profits in your account." },
        ],
        allPlans: {
          "Minimum Trading Days":  "N/A",
          "Maximum Trading Days":  "N/A",
          "Performance Split":     "up to 90%",
          "Leverage":              "up to 50:1",
          "Drawdown Type":         "Trailing",
          "EAs Allowed":           "No",
          "Refund":                "No",
          "Hold Over Weekend":     "No",
          "Trade Through News":    "No",
          "Platform":              "MT5, DXTrade or TradingView",
        },
      },
      "$15k": {
        badge: "Most Popular",
        title: "Instant Funding – Standard, 0 steps",
        originalPrice: "$499",
        discountedPrice: "$499",
        coupon: null,
        phases: ["Funded"],
        features: [
          { label: "Profit Target",         value: "–" },
          { label: "Daily Loss Limit",      value: "8%", desc: "Calculated based on the balance at the end of the previous trading day (5PM EST)." },
          { label: "Max Trailing Drawdown", value: "8%", desc: "Trailing drawdown – 8% trails your closed trading balance until you reach 8% profits." },
        ],
        allPlans: {
          "Minimum Trading Days":  "N/A",
          "Maximum Trading Days":  "N/A",
          "Performance Split":     "up to 90%",
          "Leverage":              "up to 50:1",
          "Drawdown Type":         "Trailing",
          "EAs Allowed":           "No",
          "Refund":                "No",
          "Hold Over Weekend":     "No",
          "Trade Through News":    "No",
          "Platform":              "MT5, DXTrade or TradingView",
        },
      },
      "$25k": {
        badge: "Most Popular",
        title: "Instant Funding – Standard, 0 steps",
        originalPrice: "$829",
        discountedPrice: "$829",
        coupon: null,
        phases: ["Funded"],
        features: [
          { label: "Profit Target",         value: "–" },
          { label: "Daily Loss Limit",      value: "8%", desc: "Calculated based on the balance at the end of the previous trading day (5PM EST)." },
          { label: "Max Trailing Drawdown", value: "8%", desc: "Trailing drawdown – 8% trails your closed trading balance until you reach 8% profits." },
        ],
        allPlans: {
          "Minimum Trading Days":  "N/A",
          "Maximum Trading Days":  "N/A",
          "Performance Split":     "up to 90%",
          "Leverage":              "up to 50:1",
          "Drawdown Type":         "Trailing",
          "EAs Allowed":           "No",
          "Refund":                "No",
          "Hold Over Weekend":     "No",
          "Trade Through News":    "No",
          "Platform":              "MT5, DXTrade or TradingView",
        },
      },
      "$50k": {
        badge: "Best Value",
        title: "Instant Funding – Standard, 0 steps",
        originalPrice: "$1,649",
        discountedPrice: "$1,649",
        coupon: null,
        phases: ["Funded"],
        features: [
          { label: "Profit Target",         value: "–" },
          { label: "Daily Loss Limit",      value: "8%", desc: "Calculated based on the balance at the end of the previous trading day (5PM EST)." },
          { label: "Max Trailing Drawdown", value: "8%", desc: "Trailing drawdown – 8% trails your closed trading balance until you reach 8% profits." },
        ],
        allPlans: {
          "Minimum Trading Days":  "N/A",
          "Maximum Trading Days":  "N/A",
          "Performance Split":     "up to 90%",
          "Leverage":              "up to 50:1",
          "Drawdown Type":         "Trailing",
          "EAs Allowed":           "No",
          "Refund":                "No",
          "Hold Over Weekend":     "No",
          "Trade Through News":    "No",
          "Platform":              "MT5, DXTrade or TradingView",
        },
      },
      "$100k": {
        badge: "Best Value",
        title: "Instant Funding – Standard, 0 steps",
        originalPrice: "$3,289",
        discountedPrice: "$3,289",
        coupon: null,
        phases: ["Funded"],
        features: [
          { label: "Profit Target",         value: "–" },
          { label: "Daily Loss Limit",      value: "8%", desc: "Calculated based on the balance at the end of the previous trading day (5PM EST)." },
          { label: "Max Trailing Drawdown", value: "8%", desc: "Trailing drawdown – 8% trails your closed trading balance until you reach 8% profits." },
        ],
        allPlans: {
          "Minimum Trading Days":  "N/A",
          "Maximum Trading Days":  "N/A",
          "Performance Split":     "up to 90%",
          "Leverage":              "up to 50:1",
          "Drawdown Type":         "Trailing",
          "EAs Allowed":           "No",
          "Refund":                "No",
          "Hold Over Weekend":     "No",
          "Trade Through News":    "No",
          "Platform":              "MT5, DXTrade or TradingView",
        },
      },
    },
  },
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function getPlansData(typeId, subtypeId, size) {
  const typeData = PRICING_DATA[typeId];
  if (!typeData) return null;
  const subtypeData = typeData[subtypeId] || typeData[Object.keys(typeData)[0]];
  return subtypeData?.[size] || subtypeData?.[Object.keys(subtypeData)[0]] || null;
}

// ─── ICONS ───────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 10.5l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── SLIDING ACCOUNT SIZE BAR ─────────────────────────────────────────────────

function SlidingAccountSizeBar({ sizes, activeSize, onSelect }) {
  const barRef  = useRef(null);
  const btnRefs = useRef([]);
  const [indicatorLeft, setIndicatorLeft] = useState(0);

  const updateIndicator = useCallback(() => {
    const idx = sizes.indexOf(activeSize);
    const btn = btnRefs.current[idx];
    const bar = barRef.current;
    if (!btn || !bar) return;
    const bRect   = btn.getBoundingClientRect();
    const barRect = bar.getBoundingClientRect();
    setIndicatorLeft(bRect.left - barRect.left + bRect.width / 2 - 18);
  }, [activeSize, sizes]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  return (
    <div className={styles.sizeBarWrap}>
      <div className={styles.sizeBar} ref={barRef}>
        <div className={styles.sizeIndicator} style={{ transform: `translateX(${indicatorLeft}px) translateY(-50%)` }} />
        {sizes.map((size, i) => (
          <button
            key={size}
            ref={(el) => (btnRefs.current[i] = el)}
            className={`${styles.sizeBtn} ${size === activeSize ? styles.active : ""}`}
            onClick={() => onSelect(size)}
            aria-pressed={size === activeSize}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── LEFT CARD ───────────────────────────────────────────────────────────────

function LeftCard({ typeId, size, data }) {
  const typeName = ACCOUNT_TYPES.find((t) => t.id === typeId)?.label || "";

  return (
    <div className={styles.leftCard}>
      <div className={styles.cardBadgeRow}>
        <div className={styles.cardNum}>{typeId}</div>
        <div className={styles.cardTypeName}>{typeName}</div>
      </div>

      <div className={styles.popularBadge}>
        <span aria-hidden="true">✦</span>
        {data.badge || "Popular"}
      </div>

      <div className={styles.divider} />
      <div className={styles.cardTitle}>{data.title}</div>

      <div>
        {data.coupon && (
          <div className={styles.couponTag}>With Code: {data.coupon}</div>
        )}
        <div className={styles.priceRow}>
          <span className={styles.priceMain}>{data.discountedPrice}</span>
          {data.coupon && data.originalPrice !== data.discountedPrice && (
            <span className={styles.priceOld}>{data.originalPrice}</span>
          )}
          <span className={styles.priceFor}>For {size} account</span>
        </div>
      </div>

      <button className={styles.startBtn}>Start Trading</button>
    </div>
  );
}

// ─── MID CARD ────────────────────────────────────────────────────────────────

function MidCard({ typeId, size, data }) {
  const [activePhase,    setActivePhase]    = useState(0);
  const [expandedFeature, setExpandedFeature] = useState(null);

  useEffect(() => {
    setActivePhase(0);
    setExpandedFeature(null);
  }, [typeId, size, data]);

  const typeName = ACCOUNT_TYPES.find((t) => t.id === typeId)?.label || "";
  const phases   = data.phases   || ["Funded"];
  const features = data.features || [];

  const toggleExpand = (i) => setExpandedFeature((prev) => (prev === i ? null : i));

  return (
    <div className={styles.midCard}>
      <div className={styles.midHeader}>{size} {typeName} account includes:</div>

      <div className={styles.phasePills}>
        {phases.map((p, i) => (
          <button
            key={p}
            className={`${styles.phasePill} ${i === activePhase ? styles.active : ""}`}
            onClick={() => setActivePhase(i)}
            aria-pressed={i === activePhase}
          >
            {p}
          </button>
        ))}
      </div>

      {features.map((f, i) => (
        <div key={i} className={styles.featureRow}>
          <div className={styles.featureTop}>
            <div className={styles.featureLabel}>
              <CheckIcon />
              <span>{f.label}</span>
              {f.desc && (
                <button
                  className={styles.featureExpandBtn}
                  onClick={() => toggleExpand(i)}
                  aria-expanded={expandedFeature === i}
                  aria-label={`Toggle details for ${f.label}`}
                >
                  {expandedFeature === i ? "▲" : "▼"}
                </button>
              )}
            </div>
            <div className={styles.featureRight}>
              {f.badge && <span className={styles.featureBadgePill}>{f.badge}</span>}
              <span className={styles.featureValue}>{f.value}</span>
            </div>
          </div>
          {f.desc && expandedFeature === i && (
            <div className={styles.featureDesc}>{f.desc}</div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── RIGHT CARD ──────────────────────────────────────────────────────────────

function RightCard({ data }) {
  const entries = Object.entries(data.allPlans || {});
  return (
    <div className={styles.rightCard}>
      <div className={styles.rightHeader}>All plans include:</div>
      <div className={styles.planGrid}>
        {entries.map(([key, val]) => (
          <div key={key} className={styles.planItem}>
            <div className={styles.planKey}>{key}</div>
            <div className={styles.planVal}>
              <span className={styles.planCheck} aria-hidden="true">⊙</span>
              {val}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function PricingSection() {
  const [activeType,    setActiveType]    = useState(2);       // default: Two Phase
  const [activeSubtype, setActiveSubtype] = useState("classic");
  const [activeSize,    setActiveSize]    = useState("$5k");

  const subtypes = SUBTYPES[activeType] || [];
  const sizes    = ACCOUNT_SIZES[activeType] || [];

  // Reset subtype + size when account type changes
  useEffect(() => {
    const subs = SUBTYPES[activeType] || [];
    setActiveSubtype(subs[0]?.id || "standard");
    setActiveSize((ACCOUNT_SIZES[activeType] || [])[0] || "$5k");
  }, [activeType]);

  // Guard size when subtype changes
  useEffect(() => {
    const szs = ACCOUNT_SIZES[activeType] || [];
    if (!szs.includes(activeSize)) setActiveSize(szs[0] || "$5k");
  }, [activeSubtype]);

  const data = getPlansData(activeType, activeSubtype, activeSize);
  if (!data) return null;

  return (
    <div className={styles.root} data-aos="fade-left">
      <div className={`${styles.inner} container`}>

        {/* ── ACCOUNT TYPE TABS ── */}
        <nav className={styles.typeTabBar} aria-label="Account type">
          {ACCOUNT_TYPES.map((t) => (
            <button
              key={t.id}
              className={`${styles.typeTab} ${t.id === activeType ? styles.active : ""}`}
              onClick={() => setActiveType(t.id)}
              aria-pressed={t.id === activeType}
            >
              <span className={styles.typeNum}>{t.id}</span>
              {t.label}
            </button>
          ))}
        </nav>

        {/* ── SUBTYPE TOGGLE + PROMO BAR ── */}
        <div className={styles.subtypeRow}>
          {subtypes.length > 1 && (
            <div className={styles.subtypeToggle} role="group" aria-label="Plan variant">
              {subtypes.map((s) => (
                <button
                  key={s.id}
                  className={`${styles.subtypeBtn} ${s.id === activeSubtype ? styles.active : ""}`}
                  onClick={() => setActiveSubtype(s.id)}
                  aria-pressed={s.id === activeSubtype}
                >
                  <div>{s.label}</div>
                  <div className={styles.subtypeSub}>{s.sub}</div>
                </button>
              ))}
            </div>
          )}

          {/* Only show promo bar for Two Phase (has coupon discounts) */}
          {activeType === 2 && (
            <div className={styles.promoBar} aria-live="polite">
              <span>
                <span className={styles.promoHighlight}>Special Discount Available</span>
                {" "}on Two Phase challenges
              </span>
              <span className={styles.couponBadge}>ARC10</span>
            </div>
          )}
        </div>

        {/* ── ACCOUNT SIZE SLIDER ── */}
        <SlidingAccountSizeBar
          sizes={sizes}
          activeSize={activeSize}
          onSelect={setActiveSize}
        />

        {/* ── CONTENT GRID ── */}
        <div className={styles.contentGrid}>
          <LeftCard typeId={activeType} size={activeSize} data={data} />
          <MidCard  typeId={activeType} size={activeSize} data={data} />
          <RightCard data={data} />
        </div>

      </div>
    </div>
  );
}