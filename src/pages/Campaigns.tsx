import { useState } from "react";

interface CampaignsProps {
  onExport: () => void;
  onNewCampaign: () => void;
  onCreativeIdeas: () => void;
  onCampaignIdeas: () => void;
}

interface CampaignDetail {
  name: string;
  platform: string;
  status: string;
  spend: string;
  impressions: string;
  clicks: string;
  ctr: string;
  conversions: number;
  costPerConv: string;
  startDate: string;
  schedule: string;
  adGroups: { name: string; impressions: string; clicks: string; ctr: string; conversions: number }[];
  keywords: { keyword: string; matchType: string; bid: string; impressions: string; clicks: string; position: string; qualityScore: number }[];
  demographics: {
    age: { group: string; percentage: number }[];
    gender: { group: string; percentage: number }[];
    devices: { device: string; percentage: number }[];
    topCities: { city: string; percentage: number }[];
  };
  audience: { segment: string; reach: string; engagement: string }[];
  settings: {
    bidStrategy: string;
    dailyBudget: string;
    adRotation: string;
    locationTarget: string;
    languageTarget: string;
    deviceTarget: string;
  };
}

const campaignDetails: CampaignDetail[] = [
  {
    name: "Bangalore 2BHK Push",
    platform: "Google Ads",
    status: "active",
    spend: "₹82,400",
    impressions: "145K",
    clicks: "8.2K",
    ctr: "5.7%",
    conversions: 342,
    costPerConv: "₹241",
    startDate: "May 15, 2026",
    schedule: "Mon-Sat, 8AM-10PM",
    adGroups: [
      { name: "2BHK Whitefield", impressions: "52K", clicks: "3.1K", ctr: "6.0%", conversions: 142 },
      { name: "2BHK Marathahalli", impressions: "38K", clicks: "2.0K", ctr: "5.3%", conversions: 98 },
      { name: "2BHK Electronic City", impressions: "31K", clicks: "1.8K", ctr: "5.8%", conversions: 72 },
      { name: "2BHK Sarjapur Road", impressions: "24K", clicks: "1.3K", ctr: "5.4%", conversions: 30 },
    ],
    keywords: [
      { keyword: "2bhk flat for rent in whitefield", matchType: "Exact", bid: "₹22", impressions: "28K", clicks: "1.8K", position: "2.1", qualityScore: 9 },
      { keyword: "2bhk rent marathahalli", matchType: "Phrase", bid: "₹18", impressions: "22K", clicks: "1.2K", position: "3.4", qualityScore: 8 },
      { keyword: "2 bhk apartment bangalore", matchType: "Broad", bid: "₹15", impressions: "35K", clicks: "1.6K", position: "4.2", qualityScore: 7 },
      { keyword: "flat for rent near tech park", matchType: "Phrase", bid: "₹20", impressions: "18K", clicks: "1.1K", position: "2.8", qualityScore: 8 },
      { keyword: "2bhk without brokerage bangalore", matchType: "Exact", bid: "₹25", impressions: "15K", clicks: "980", position: "1.8", qualityScore: 9 },
      { keyword: "rental flat electronic city", matchType: "Exact", bid: "₹16", impressions: "12K", clicks: "720", position: "3.1", qualityScore: 7 },
      { keyword: "2bhk sarjapur road rent", matchType: "Phrase", bid: "₹17", impressions: "10K", clicks: "580", position: "3.6", qualityScore: 7 },
      { keyword: "furnished 2bhk bangalore", matchType: "Broad", bid: "₹19", impressions: "14K", clicks: "890", position: "3.9", qualityScore: 8 },
    ],
    demographics: {
      age: [
        { group: "18-24", percentage: 12 },
        { group: "25-34", percentage: 48 },
        { group: "35-44", percentage: 28 },
        { group: "45-54", percentage: 9 },
        { group: "55+", percentage: 3 },
      ],
      gender: [
        { group: "Male", percentage: 62 },
        { group: "Female", percentage: 36 },
        { group: "Other", percentage: 2 },
      ],
      devices: [
        { device: "Mobile", percentage: 74 },
        { device: "Desktop", percentage: 21 },
        { device: "Tablet", percentage: 5 },
      ],
      topCities: [
        { city: "Bangalore", percentage: 89 },
        { city: "Hyderabad", percentage: 5 },
        { city: "Chennai", percentage: 3 },
        { city: "Pune", percentage: 2 },
        { city: "Others", percentage: 1 },
      ],
    },
    audience: [
      { segment: "IT Professionals (25-34)", reach: "1.2M", engagement: "High" },
      { segment: "Recently Relocated", reach: "340K", engagement: "Very High" },
      { segment: "Young Couples", reach: "580K", engagement: "Medium" },
      { segment: "Working Women", reach: "420K", engagement: "High" },
    ],
    settings: {
      bidStrategy: "Maximize Conversions",
      dailyBudget: "₹3,200",
      adRotation: "Optimize",
      locationTarget: "Bangalore + 25km radius",
      languageTarget: "English, Hindi, Kannada",
      deviceTarget: "All devices (Mobile preferred)",
    },
  },
  {
    name: "PG Listings - Hyderabad",
    platform: "Meta Ads",
    status: "active",
    spend: "₹45,200",
    impressions: "98K",
    clicks: "4.1K",
    ctr: "4.2%",
    conversions: 187,
    costPerConv: "₹242",
    startDate: "May 22, 2026",
    schedule: "Daily, 7AM-11PM",
    adGroups: [
      { name: "PG Madhapur", impressions: "34K", clicks: "1.5K", ctr: "4.4%", conversions: 68 },
      { name: "PG Gachibowli", impressions: "28K", clicks: "1.1K", ctr: "3.9%", conversions: 52 },
      { name: "PG HITEC City", impressions: "22K", clicks: "980", ctr: "4.5%", conversions: 42 },
      { name: "PG Kondapur", impressions: "14K", clicks: "520", ctr: "3.7%", conversions: 25 },
    ],
    keywords: [
      { keyword: "pg in madhapur hyderabad", matchType: "Interest", bid: "₹12", impressions: "24K", clicks: "1.0K", position: "—", qualityScore: 8 },
      { keyword: "student pg gachibowli", matchType: "Interest", bid: "₹10", impressions: "18K", clicks: "720", position: "—", qualityScore: 7 },
      { keyword: "ladies pg hyderabad", matchType: "Interest", bid: "₹14", impressions: "22K", clicks: "980", position: "—", qualityScore: 8 },
      { keyword: "pg near hitec city", matchType: "Behavior", bid: "₹13", impressions: "16K", clicks: "700", position: "—", qualityScore: 7 },
      { keyword: "budget pg kondapur", matchType: "Interest", bid: "₹9", impressions: "10K", clicks: "380", position: "—", qualityScore: 6 },
      { keyword: "shared accommodation hyderabad", matchType: "Broad", bid: "₹8", impressions: "14K", clicks: "520", position: "—", qualityScore: 6 },
    ],
    demographics: {
      age: [
        { group: "18-24", percentage: 42 },
        { group: "25-34", percentage: 38 },
        { group: "35-44", percentage: 14 },
        { group: "45-54", percentage: 4 },
        { group: "55+", percentage: 2 },
      ],
      gender: [
        { group: "Male", percentage: 55 },
        { group: "Female", percentage: 43 },
        { group: "Other", percentage: 2 },
      ],
      devices: [
        { device: "Mobile", percentage: 88 },
        { device: "Desktop", percentage: 9 },
        { device: "Tablet", percentage: 3 },
      ],
      topCities: [
        { city: "Hyderabad", percentage: 92 },
        { city: "Secunderabad", percentage: 5 },
        { city: "Warangal", percentage: 2 },
        { city: "Others", percentage: 1 },
      ],
    },
    audience: [
      { segment: "College Students (18-24)", reach: "680K", engagement: "Very High" },
      { segment: "Entry-level IT Professionals", reach: "420K", engagement: "High" },
      { segment: "Recently Migrated to Hyderabad", reach: "180K", engagement: "Very High" },
      { segment: "Budget-conscious Renters", reach: "920K", engagement: "Medium" },
    ],
    settings: {
      bidStrategy: "Lowest Cost",
      dailyBudget: "₹1,800",
      adRotation: "Equal Distribution",
      locationTarget: "Hyderabad + 15km radius",
      languageTarget: "English, Telugu, Hindi",
      deviceTarget: "Mobile only",
    },
  },
  {
    name: "No Brokerage Campaign",
    platform: "Google Ads",
    status: "active",
    spend: "₹63,800",
    impressions: "112K",
    clicks: "6.8K",
    ctr: "6.1%",
    conversions: 298,
    costPerConv: "₹214",
    startDate: "Apr 28, 2026",
    schedule: "Daily, 24/7",
    adGroups: [
      { name: "Direct Owner Rentals", impressions: "45K", clicks: "2.9K", ctr: "6.4%", conversions: 132 },
      { name: "Zero Brokerage Flats", impressions: "38K", clicks: "2.2K", ctr: "5.8%", conversions: 98 },
      { name: "No Middleman Homes", impressions: "29K", clicks: "1.7K", ctr: "5.9%", conversions: 68 },
    ],
    keywords: [
      { keyword: "flat for rent without brokerage", matchType: "Exact", bid: "₹28", impressions: "32K", clicks: "2.1K", position: "1.5", qualityScore: 9 },
      { keyword: "no brokerage rental", matchType: "Exact", bid: "₹24", impressions: "24K", clicks: "1.5K", position: "2.0", qualityScore: 9 },
      { keyword: "direct owner flat rent", matchType: "Phrase", bid: "₹20", impressions: "18K", clicks: "1.0K", position: "2.8", qualityScore: 8 },
      { keyword: "rent without broker", matchType: "Broad", bid: "₹16", impressions: "22K", clicks: "1.2K", position: "3.2", qualityScore: 7 },
      { keyword: "owner direct rental homes", matchType: "Phrase", bid: "₹18", impressions: "12K", clicks: "680", position: "2.4", qualityScore: 8 },
      { keyword: "zero brokerage apartments india", matchType: "Exact", bid: "₹22", impressions: "14K", clicks: "820", position: "1.9", qualityScore: 9 },
    ],
    demographics: {
      age: [
        { group: "18-24", percentage: 18 },
        { group: "25-34", percentage: 44 },
        { group: "35-44", percentage: 26 },
        { group: "45-54", percentage: 9 },
        { group: "55+", percentage: 3 },
      ],
      gender: [
        { group: "Male", percentage: 58 },
        { group: "Female", percentage: 40 },
        { group: "Other", percentage: 2 },
      ],
      devices: [
        { device: "Mobile", percentage: 71 },
        { device: "Desktop", percentage: 24 },
        { device: "Tablet", percentage: 5 },
      ],
      topCities: [
        { city: "Bangalore", percentage: 32 },
        { city: "Mumbai", percentage: 24 },
        { city: "Pune", percentage: 18 },
        { city: "Hyderabad", percentage: 14 },
        { city: "Chennai", percentage: 8 },
        { city: "Others", percentage: 4 },
      ],
    },
    audience: [
      { segment: "Cost-conscious Renters", reach: "2.1M", engagement: "Very High" },
      { segment: "First-time Renters", reach: "890K", engagement: "High" },
      { segment: "Families (35-44)", reach: "640K", engagement: "Medium" },
      { segment: "Previous Brokerage Users", reach: "1.4M", engagement: "High" },
    ],
    settings: {
      bidStrategy: "Target CPA (₹220)",
      dailyBudget: "₹2,500",
      adRotation: "Optimize (CTR focus)",
      locationTarget: "Pan India (Top 8 cities)",
      languageTarget: "English, Hindi",
      deviceTarget: "All devices",
    },
  },
  {
    name: "Pune Rental Season",
    platform: "Google Ads",
    status: "paused",
    spend: "₹31,500",
    impressions: "67K",
    clicks: "3.2K",
    ctr: "4.8%",
    conversions: 124,
    costPerConv: "₹254",
    startDate: "May 1, 2026",
    schedule: "Mon-Fri, 9AM-9PM",
    adGroups: [
      { name: "Pune IT Park Areas", impressions: "28K", clicks: "1.4K", ctr: "5.0%", conversions: 58 },
      { name: "Pune Student Areas", impressions: "22K", clicks: "1.0K", ctr: "4.5%", conversions: 38 },
      { name: "Pune Family Rentals", impressions: "17K", clicks: "800", ctr: "4.7%", conversions: 28 },
    ],
    keywords: [
      { keyword: "flat for rent in pune", matchType: "Exact", bid: "₹18", impressions: "22K", clicks: "1.1K", position: "3.2", qualityScore: 7 },
      { keyword: "1bhk rent pune", matchType: "Phrase", bid: "₹14", impressions: "16K", clicks: "780", position: "4.1", qualityScore: 7 },
      { keyword: "pg in hinjewadi pune", matchType: "Exact", bid: "₹16", impressions: "12K", clicks: "620", position: "3.5", qualityScore: 7 },
      { keyword: "rental flat kothrud pune", matchType: "Phrase", bid: "₹15", impressions: "10K", clicks: "480", position: "3.8", qualityScore: 6 },
      { keyword: "furnished flat pune", matchType: "Broad", bid: "₹17", impressions: "14K", clicks: "700", position: "4.4", qualityScore: 6 },
    ],
    demographics: {
      age: [
        { group: "18-24", percentage: 22 },
        { group: "25-34", percentage: 42 },
        { group: "35-44", percentage: 24 },
        { group: "45-54", percentage: 8 },
        { group: "55+", percentage: 4 },
      ],
      gender: [
        { group: "Male", percentage: 60 },
        { group: "Female", percentage: 38 },
        { group: "Other", percentage: 2 },
      ],
      devices: [
        { device: "Mobile", percentage: 68 },
        { device: "Desktop", percentage: 27 },
        { device: "Tablet", percentage: 5 },
      ],
      topCities: [
        { city: "Pune", percentage: 94 },
        { city: "Pimpri-Chinchwad", percentage: 4 },
        { city: "Others", percentage: 2 },
      ],
    },
    audience: [
      { segment: "IT Professionals (Hinjewadi)", reach: "380K", engagement: "High" },
      { segment: "Students (University areas)", reach: "220K", engagement: "Medium" },
      { segment: "Young Families", reach: "310K", engagement: "Medium" },
    ],
    settings: {
      bidStrategy: "Maximize Clicks",
      dailyBudget: "₹1,500",
      adRotation: "Manual",
      locationTarget: "Pune + 20km radius",
      languageTarget: "English, Hindi, Marathi",
      deviceTarget: "All devices",
    },
  },
  {
    name: "Chennai Premium Flats",
    platform: "Meta Ads",
    status: "active",
    spend: "₹28,900",
    impressions: "54K",
    clicks: "2.4K",
    ctr: "4.4%",
    conversions: 98,
    costPerConv: "₹295",
    startDate: "Jun 1, 2026",
    schedule: "Daily, 10AM-9PM",
    adGroups: [
      { name: "Premium OMR", impressions: "22K", clicks: "1.0K", ctr: "4.5%", conversions: 42 },
      { name: "Luxury ECR", impressions: "18K", clicks: "820", ctr: "4.6%", conversions: 32 },
      { name: "Premium Nungambakkam", impressions: "14K", clicks: "580", ctr: "4.1%", conversions: 24 },
    ],
    keywords: [
      { keyword: "premium flat rent chennai", matchType: "Interest", bid: "₹24", impressions: "18K", clicks: "820", position: "—", qualityScore: 8 },
      { keyword: "luxury apartment omr", matchType: "Interest", bid: "₹28", impressions: "14K", clicks: "640", position: "—", qualityScore: 8 },
      { keyword: "3bhk gated community chennai", matchType: "Behavior", bid: "₹22", impressions: "12K", clicks: "520", position: "—", qualityScore: 7 },
      { keyword: "premium rental nungambakkam", matchType: "Interest", bid: "₹26", impressions: "8K", clicks: "340", position: "—", qualityScore: 7 },
    ],
    demographics: {
      age: [
        { group: "18-24", percentage: 5 },
        { group: "25-34", percentage: 28 },
        { group: "35-44", percentage: 42 },
        { group: "45-54", percentage: 18 },
        { group: "55+", percentage: 7 },
      ],
      gender: [
        { group: "Male", percentage: 65 },
        { group: "Female", percentage: 33 },
        { group: "Other", percentage: 2 },
      ],
      devices: [
        { device: "Mobile", percentage: 58 },
        { device: "Desktop", percentage: 36 },
        { device: "Tablet", percentage: 6 },
      ],
      topCities: [
        { city: "Chennai", percentage: 95 },
        { city: "Others", percentage: 5 },
      ],
    },
    audience: [
      { segment: "Senior IT Professionals (35+)", reach: "280K", engagement: "High" },
      { segment: "Business Owners / Executives", reach: "150K", engagement: "Very High" },
      { segment: "NRIs Looking for Rental", reach: "85K", engagement: "Medium" },
      { segment: "Families with Children", reach: "340K", engagement: "High" },
    ],
    settings: {
      bidStrategy: "Cost Cap (₹300)",
      dailyBudget: "₹1,200",
      adRotation: "Optimize (Conversion focus)",
      locationTarget: "Chennai (Premium zones only)",
      languageTarget: "English, Tamil",
      deviceTarget: "All devices (Desktop preferred)",
    },
  },
  {
    name: "Mumbai Diwali Special",
    platform: "Google Ads",
    status: "ended",
    spend: "₹95,000",
    impressions: "189K",
    clicks: "11.2K",
    ctr: "5.9%",
    conversions: 445,
    costPerConv: "₹213",
    startDate: "Oct 1, 2025",
    schedule: "Daily, 24/7 (ended Nov 15)",
    adGroups: [
      { name: "Diwali Rental Offers", impressions: "72K", clicks: "4.5K", ctr: "6.3%", conversions: 182 },
      { name: "Festival Move-in Special", impressions: "58K", clicks: "3.4K", ctr: "5.9%", conversions: 142 },
      { name: "Mumbai New Home", impressions: "42K", clicks: "2.3K", ctr: "5.5%", conversions: 88 },
      { name: "Diwali Bonus Housing", impressions: "17K", clicks: "1.0K", ctr: "5.9%", conversions: 33 },
    ],
    keywords: [
      { keyword: "flat for rent mumbai diwali", matchType: "Exact", bid: "₹30", impressions: "42K", clicks: "2.8K", position: "1.4", qualityScore: 9 },
      { keyword: "diwali offer rental", matchType: "Phrase", bid: "₹22", impressions: "28K", clicks: "1.6K", position: "2.1", qualityScore: 8 },
      { keyword: "move in before diwali mumbai", matchType: "Exact", bid: "₹26", impressions: "22K", clicks: "1.4K", position: "1.8", qualityScore: 9 },
      { keyword: "festival rental offer", matchType: "Broad", bid: "₹18", impressions: "35K", clicks: "1.8K", position: "3.5", qualityScore: 7 },
      { keyword: "new home mumbai diwali", matchType: "Phrase", bid: "₹20", impressions: "18K", clicks: "1.0K", position: "2.6", qualityScore: 8 },
      { keyword: "diwali special flat deal", matchType: "Exact", bid: "₹24", impressions: "15K", clicks: "880", position: "2.0", qualityScore: 8 },
      { keyword: "mumbai rental diwali discount", matchType: "Phrase", bid: "₹22", impressions: "12K", clicks: "680", position: "2.4", qualityScore: 7 },
    ],
    demographics: {
      age: [
        { group: "18-24", percentage: 10 },
        { group: "25-34", percentage: 38 },
        { group: "35-44", percentage: 34 },
        { group: "45-54", percentage: 13 },
        { group: "55+", percentage: 5 },
      ],
      gender: [
        { group: "Male", percentage: 56 },
        { group: "Female", percentage: 42 },
        { group: "Other", percentage: 2 },
      ],
      devices: [
        { device: "Mobile", percentage: 66 },
        { device: "Desktop", percentage: 28 },
        { device: "Tablet", percentage: 6 },
      ],
      topCities: [
        { city: "Mumbai", percentage: 78 },
        { city: "Thane", percentage: 12 },
        { city: "Navi Mumbai", percentage: 7 },
        { city: "Others", percentage: 3 },
      ],
    },
    audience: [
      { segment: "Families Preparing for Diwali", reach: "1.8M", engagement: "Very High" },
      { segment: "Job Transfers to Mumbai", reach: "420K", engagement: "High" },
      { segment: "Young Professionals (25-34)", reach: "980K", engagement: "High" },
      { segment: "Married Couples (New Home)", reach: "640K", engagement: "Very High" },
    ],
    settings: {
      bidStrategy: "Maximize Conversions",
      dailyBudget: "₹3,800",
      adRotation: "Optimize",
      locationTarget: "Mumbai Metropolitan Region",
      languageTarget: "English, Hindi, Marathi",
      deviceTarget: "All devices",
    },
  },
];

export default function Campaigns({ onExport, onNewCampaign, onCreativeIdeas, onCampaignIdeas }: CampaignsProps) {
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignDetail | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "keywords" | "demographics" | "audience" | "settings">("overview");

  const adCreatives = [
    { title: "2BHK in Whitefield - ₹15K/mo", type: "Search", performance: "high", score: 92 },
    { title: "No Brokerage PG Stays", type: "Search", performance: "high", score: 88 },
    { title: "Find Your Dream Rental", type: "Display", performance: "medium", score: 74 },
    { title: "Verified Properties Only", type: "Search", performance: "high", score: 85 },
    { title: "Instant Move-in Homes", type: "Display", performance: "low", score: 58 },
  ];

  return (
    <div className="space-y-6 reveal-stagger">
      {/* Header */}
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Ad Campaigns</h1>
          <p className="text-sm text-mut mt-1">Performance tracking, creative intelligence & AI-powered ideas</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button onClick={onExport} className="btn btn-ghost !text-xs">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Export Report
          </button>
          <button onClick={onCreativeIdeas} className="btn btn-amber !text-xs">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l2 4 4.5.7-3.3 3.1.8 4.5L8 11.2 3.9 13.3l.8-4.5L1.5 5.7 6 5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
            </svg>
            Creative Ideas
          </button>
          <button onClick={onCampaignIdeas} className="btn btn-soft !text-xs">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M2 12l4-4 3 3 5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Campaign Ideas
          </button>
          <button onClick={onNewCampaign} className="btn btn-prime !text-xs">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            New Campaign
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="panel p-4">
          <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Total Spend (MTD)</span>
          <p className="font-display text-xl font-bold text-ink mt-1">₹2.47L</p>
          <span className="text-xs text-grn font-semibold">↓ 8% vs last month</span>
        </div>
        <div className="panel p-4">
          <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Total Conversions</span>
          <p className="font-display text-xl font-bold text-ink mt-1">1,494</p>
          <span className="text-xs text-grn font-semibold">↑ 12% vs last month</span>
        </div>
        <div className="panel p-4">
          <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Avg. CPC</span>
          <p className="font-display text-xl font-bold text-ink mt-1">₹18.4</p>
          <span className="text-xs text-grn font-semibold">↓ 5% vs last month</span>
        </div>
        <div className="panel p-4">
          <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Avg. CPA</span>
          <p className="font-display text-xl font-bold text-ink mt-1">₹238</p>
          <span className="text-xs text-ros font-semibold">↑ 3% vs last month</span>
        </div>
      </div>

      {/* Campaigns Table */}
      <div className="panel">
        <div className="panel-hd">
          <div>
            <h3 className="text-sm font-semibold text-ink">Active Campaigns</h3>
            <p className="text-xs text-dim mt-0.5">Click any campaign to view keywords, demographics & full details</p>
          </div>
          <div className="flex gap-1">
            <span className="chip chip-on">All</span>
            <span className="chip">Google</span>
            <span className="chip">Meta</span>
          </div>
        </div>
        <div className="panel-bd overflow-x-auto">
          <table className="tbl">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Platform</th>
                <th>Status</th>
                <th>Spend</th>
                <th>Impressions</th>
                <th>CTR</th>
                <th>Conversions</th>
                <th>CPA</th>
              </tr>
            </thead>
            <tbody>
              {campaignDetails.map((c, i) => (
                <tr
                  key={i}
                  onClick={() => { setSelectedCampaign(c); setActiveTab("overview"); }}
                  className="cursor-pointer hover:bg-grn/[0.03]!"
                >
                  <td className="font-medium text-ink text-xs">
                    <div className="flex items-center gap-2">
                      <span>{c.name}</span>
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-dim opacity-0 group-hover:opacity-100 transition-opacity">
                        <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </td>
                  <td><span className="chip !text-[10px]">{c.platform}</span></td>
                  <td>
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider ${
                      c.status === "active" ? "text-grn" : c.status === "paused" ? "text-amb" : "text-dim"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        c.status === "active" ? "bg-grn pulse-dot" : c.status === "paused" ? "bg-amb" : "bg-dim"
                      }`}/>
                      {c.status}
                    </span>
                  </td>
                  <td className="mono text-xs text-mut">{c.spend}</td>
                  <td className="mono text-xs text-mut">{c.impressions}</td>
                  <td className="mono text-xs text-mut">{c.ctr}</td>
                  <td className="font-display font-bold text-ink">{c.conversions}</td>
                  <td className="mono text-xs text-mut">{c.costPerConv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ad Creatives */}
      <div className="panel">
        <div className="panel-hd">
          <div>
            <h3 className="text-sm font-semibold text-ink">Ad Creative Performance</h3>
            <p className="text-xs text-dim mt-0.5">AI-scored creative effectiveness</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="chip">
              <span className="dt dt-ai">AI</span>
              Scored
            </span>
            <button onClick={onCreativeIdeas} className="btn btn-amber !text-[10px] !py-1.5 !px-2.5">
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                <path d="M8 1l2 4 4.5.7-3.3 3.1.8 4.5L8 11.2 3.9 13.3l.8-4.5L1.5 5.7 6 5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
              </svg>
              Get Ideas
            </button>
          </div>
        </div>
        <div className="panel-bd space-y-2">
          {adCreatives.map((ad, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-panel2/50 border border-line/50 hover:border-line2 transition-colors">
              <div className="flex-1">
                <p className="text-xs font-medium text-ink">{ad.title}</p>
                <span className="chip !text-[9px] mt-1">{ad.type}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-bold uppercase ${
                  ad.performance === "high" ? "text-grn" : ad.performance === "medium" ? "text-amb" : "text-ros"
                }`}>
                  {ad.performance}
                </span>
                <div className="w-20 h-1.5 rounded-full bg-panel2 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      ad.score >= 80 ? "bg-grn" : ad.score >= 60 ? "bg-amb" : "bg-ros"
                    }`}
                    style={{ width: `${ad.score}%` }}
                  />
                </div>
                <span className="font-mono text-xs font-bold text-ink w-8 text-right">{ad.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Campaign Ideas Quick Preview */}
      <div className="panel">
        <div className="panel-hd">
          <div>
            <h3 className="text-sm font-semibold text-ink">AI Campaign Recommendations</h3>
            <p className="text-xs text-dim mt-0.5">Market-gap opportunities identified by AI — click to explore</p>
          </div>
          <button onClick={onCampaignIdeas} className="btn btn-soft !text-xs">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M2 12l4-4 3 3 5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            View All Ideas
          </button>
        </div>
        <div className="panel-bd">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { title: "IT Corridor PG Push", city: "Bangalore", confidence: 92, expected: "450+ leads", budget: "₹75K/mo" },
              { title: "Monsoon Moving Season", city: "Pan India", confidence: 88, expected: "2,800+ conv.", budget: "₹1.2L/mo" },
              { title: "No Brokerage Trust", city: "All Cities", confidence: 85, expected: "500K+ impr.", budget: "₹50K/mo" },
            ].map((rec, i) => (
              <div key={i} className="p-3 rounded-lg bg-panel2/50 border border-line/50 hover:border-grn/30 transition-colors cursor-pointer" onClick={onCampaignIdeas}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold text-grn">{rec.confidence}% confidence</span>
                  <span className="chip !text-[9px]">{rec.city}</span>
                </div>
                <h4 className="text-xs font-semibold text-ink mb-1">{rec.title}</h4>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-dim">{rec.budget}</span>
                  <span className="text-grn font-semibold">{rec.expected}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campaign Detail Drawer */}
      {selectedCampaign && (
        <div className="fixed inset-0 z-50 flex justify-end" onClick={() => setSelectedCampaign(null)}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm anim-in" />
          {/* Drawer */}
          <div
            className="relative w-full max-w-3xl h-full bg-bg1 border-l border-line overflow-y-auto anim-in"
            style={{ animation: "slideInRight 0.3s cubic-bezier(.2,.7,.3,1) both" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="sticky top-0 z-10 bg-bg1/95 backdrop-blur-md border-b border-line px-6 py-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="font-display text-lg font-bold text-ink">{selectedCampaign.name}</h2>
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider ${
                      selectedCampaign.status === "active" ? "text-grn" : selectedCampaign.status === "paused" ? "text-amb" : "text-dim"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        selectedCampaign.status === "active" ? "bg-grn pulse-dot" : selectedCampaign.status === "paused" ? "bg-amb" : "bg-dim"
                      }`}/>
                      {selectedCampaign.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-dim">
                    <span className="chip !text-[10px]">{selectedCampaign.platform}</span>
                    <span>Started {selectedCampaign.startDate}</span>
                    <span>•</span>
                    <span>{selectedCampaign.schedule}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCampaign(null)}
                  className="btn btn-ghost !p-2"
                  aria-label="Close"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 mt-4 -mb-4">
                {(["overview", "keywords", "demographics", "audience", "settings"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-2 text-xs font-semibold rounded-t-lg border-b-2 transition-colors capitalize ${
                      activeTab === tab
                        ? "text-grn border-grn bg-grn/5"
                        : "text-dim border-transparent hover:text-ink hover:border-line2"
                    }`}
                  >
                    {tab === "overview" ? "Overview" : tab === "keywords" ? "Keywords" : tab === "demographics" ? "Demographics" : tab === "audience" ? "Audience" : "Settings"}
                  </button>
                ))}
              </div>
            </div>

            {/* Drawer Content */}
            <div className="p-6 space-y-5">
              {activeTab === "overview" && (
                <div className="space-y-5 anim-in">
                  {/* Performance Summary */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Spend</span>
                      <p className="font-display text-lg font-bold text-ink mt-0.5">{selectedCampaign.spend}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Impressions</span>
                      <p className="font-display text-lg font-bold text-ink mt-0.5">{selectedCampaign.impressions}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">CTR</span>
                      <p className="font-display text-lg font-bold text-grn mt-0.5">{selectedCampaign.ctr}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Conversions</span>
                      <p className="font-display text-lg font-bold text-ink mt-0.5">{selectedCampaign.conversions}</p>
                    </div>
                  </div>

                  {/* Ad Groups */}
                  <div>
                    <h4 className="text-xs font-semibold text-ink mb-3 uppercase tracking-wider">Ad Groups Performance</h4>
                    <div className="space-y-2">
                      {selectedCampaign.adGroups.map((ag, i) => (
                        <div key={i} className="p-3 rounded-lg bg-panel2/40 border border-line/40 hover:border-line2 transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-ink">{ag.name}</span>
                            <span className="font-display font-bold text-sm text-ink">{ag.conversions} conv.</span>
                          </div>
                          <div className="grid grid-cols-4 gap-2 text-[10px]">
                            <div>
                              <span className="text-dim">Impr.</span>
                              <p className="mono text-mut font-medium">{ag.impressions}</p>
                            </div>
                            <div>
                              <span className="text-dim">Clicks</span>
                              <p className="mono text-mut font-medium">{ag.clicks}</p>
                            </div>
                            <div>
                              <span className="text-dim">CTR</span>
                              <p className="mono text-mut font-medium">{ag.ctr}</p>
                            </div>
                            <div>
                              <span className="text-dim">Conv. Rate</span>
                              <p className="mono text-grn font-medium">
                                {((ag.conversions / parseFloat(ag.clicks.replace("K", "000"))) * 100).toFixed(1)}%
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Demographics Preview */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-[10px] font-semibold text-dim uppercase tracking-wider mb-2">Top Age Group</h4>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-lg font-bold text-ink">
                          {selectedCampaign.demographics.age.reduce((a, b) => a.percentage > b.percentage ? a : b).group}
                        </span>
                        <span className="text-xs text-grn font-semibold">
                          {selectedCampaign.demographics.age.reduce((a, b) => a.percentage > b.percentage ? a : b).percentage}%
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-semibold text-dim uppercase tracking-wider mb-2">Primary Device</h4>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-lg font-bold text-ink">
                          {selectedCampaign.demographics.devices.reduce((a, b) => a.percentage > b.percentage ? a : b).device}
                        </span>
                        <span className="text-xs text-grn font-semibold">
                          {selectedCampaign.demographics.devices.reduce((a, b) => a.percentage > b.percentage ? a : b).percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "keywords" && (
                <div className="space-y-4 anim-in">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-ink">Target Keywords</h4>
                      <p className="text-[10px] text-dim mt-0.5">{selectedCampaign.keywords.length} keywords being tracked</p>
                    </div>
                    <div className="flex gap-1">
                      <span className="chip chip-on">All</span>
                      <span className="chip">Exact</span>
                      <span className="chip">Phrase</span>
                      <span className="chip">Broad</span>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="tbl">
                      <thead>
                        <tr>
                          <th>Keyword</th>
                          <th>Match Type</th>
                          <th>Max CPC</th>
                          <th>Impr.</th>
                          <th>Clicks</th>
                          <th>Avg. Pos.</th>
                          <th>Quality</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedCampaign.keywords.map((kw, i) => (
                          <tr key={i}>
                            <td className="text-xs font-medium text-ink">{kw.keyword}</td>
                            <td>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                kw.matchType === "Exact" ? "bg-grn/10 text-grn border border-grn/30" :
                                kw.matchType === "Phrase" ? "bg-sky/10 text-sky border border-sky/30" :
                                "bg-amb/10 text-amb border border-amb/30"
                              }`}>
                                {kw.matchType}
                              </span>
                            </td>
                            <td className="mono text-xs text-mut">{kw.bid}</td>
                            <td className="mono text-xs text-mut">{kw.impressions}</td>
                            <td className="mono text-xs text-mut">{kw.clicks}</td>
                            <td className="mono text-xs text-ink font-semibold">{kw.position}</td>
                            <td>
                              <div className="flex items-center gap-1.5">
                                <div className="w-10 h-1.5 rounded-full bg-panel2 overflow-hidden">
                                  <div
                                    className={`h-full rounded-full ${
                                      kw.qualityScore >= 8 ? "bg-grn" : kw.qualityScore >= 6 ? "bg-amb" : "bg-ros"
                                    }`}
                                    style={{ width: `${(kw.qualityScore / 10) * 100}%` }}
                                  />
                                </div>
                                <span className="font-mono text-[10px] font-bold text-ink">{kw.qualityScore}/10</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "demographics" && (
                <div className="space-y-5 anim-in">
                  {/* Age Distribution */}
                  <div>
                    <h4 className="text-xs font-semibold text-ink mb-3 uppercase tracking-wider">Age Distribution</h4>
                    <div className="space-y-2">
                      {selectedCampaign.demographics.age.map((a, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="w-14 text-xs text-mut font-medium">{a.group}</span>
                          <div className="flex-1 h-5 rounded bg-panel2/50 overflow-hidden relative">
                            <div
                              className="h-full rounded bg-gradient-to-r from-grn/80 to-grn/40 transition-all duration-500"
                              style={{ width: `${a.percentage}%` }}
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-ink">
                              {a.percentage}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gender */}
                  <div>
                    <h4 className="text-xs font-semibold text-ink mb-3 uppercase tracking-wider">Gender Split</h4>
                    <div className="flex gap-3">
                      {selectedCampaign.demographics.gender.map((g, i) => (
                        <div key={i} className="flex-1 p-3 rounded-lg bg-panel2/40 border border-line/40 text-center">
                          <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">{g.group}</span>
                          <p className="font-display text-xl font-bold text-ink mt-1">{g.percentage}%</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Devices */}
                  <div>
                    <h4 className="text-xs font-semibold text-ink mb-3 uppercase tracking-wider">Device Breakdown</h4>
                    <div className="flex gap-3">
                      {selectedCampaign.demographics.devices.map((d, i) => (
                        <div key={i} className="flex-1 p-3 rounded-lg bg-panel2/40 border border-line/40">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">{d.device}</span>
                            <span className="font-mono text-xs font-bold text-grn">{d.percentage}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-panel2 overflow-hidden">
                            <div className="h-full rounded-full bg-grn" style={{ width: `${d.percentage}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Cities */}
                  <div>
                    <h4 className="text-xs font-semibold text-ink mb-3 uppercase tracking-wider">Top Locations</h4>
                    <div className="space-y-2">
                      {selectedCampaign.demographics.topCities.map((c, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="w-28 text-xs text-mut font-medium truncate">{c.city}</span>
                          <div className="flex-1 h-4 rounded bg-panel2/50 overflow-hidden relative">
                            <div
                              className="h-full rounded bg-gradient-to-r from-sky/70 to-sky/30 transition-all duration-500"
                              style={{ width: `${c.percentage}%` }}
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-ink">
                              {c.percentage}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "audience" && (
                <div className="space-y-4 anim-in">
                  <div>
                    <h4 className="text-xs font-semibold text-ink mb-1">Target Audience Segments</h4>
                    <p className="text-[10px] text-dim">Based on campaign performance and user behavior analysis</p>
                  </div>
                  <div className="space-y-3">
                    {selectedCampaign.audience.map((seg, i) => (
                      <div key={i} className="p-4 rounded-lg bg-panel2/40 border border-line/40 hover:border-line2 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="text-xs font-semibold text-ink">{seg.segment}</h5>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            seg.engagement === "Very High" ? "bg-grn/10 text-grn border border-grn/30" :
                            seg.engagement === "High" ? "bg-sky/10 text-sky border border-sky/30" :
                            "bg-amb/10 text-amb border border-amb/30"
                          }`}>
                            {seg.engagement} engagement
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-[11px]">
                          <div>
                            <span className="text-dim">Est. Reach:</span>
                            <span className="text-ink font-medium ml-1">{seg.reach}</span>
                          </div>
                          <div>
                            <span className="text-dim">Engagement:</span>
                            <span className={`font-medium ml-1 ${
                              seg.engagement === "Very High" ? "text-grn" : seg.engagement === "High" ? "text-sky" : "text-amb"
                            }`}>{seg.engagement}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="space-y-4 anim-in">
                  <div>
                    <h4 className="text-xs font-semibold text-ink mb-1">Campaign Settings</h4>
                    <p className="text-[10px] text-dim">Current configuration and targeting parameters</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Object.entries(selectedCampaign.settings).map(([key, value]) => (
                      <div key={key} className="p-3 rounded-lg bg-panel2/40 border border-line/40">
                        <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">
                          {key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}
                        </span>
                        <p className="text-xs text-ink font-medium mt-1">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-lg bg-panel2/30 border border-line/30">
                    <h5 className="text-[10px] font-semibold text-dim uppercase tracking-wider mb-2">Campaign Schedule</h5>
                    <p className="text-xs text-ink">{selectedCampaign.schedule}</p>
                    <p className="text-[10px] text-dim mt-1">Timezone: IST (UTC+5:30)</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Inline style for drawer animation */}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
