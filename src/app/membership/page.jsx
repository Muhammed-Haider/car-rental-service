"use client";

import Image from "next/image";
import { useState } from "react";

const plans = [
  {
    name: "Silver",
    price: "AED 499",
    accentBar: "bg-slate-100 text-slate-600",
    border: "border-slate-200",
    icon: "S",
    highlights: [
      "Monthly concierge support",
      "2 airport transfers included",
      "Priority vehicle selection",
      "Dedicated WhatsApp line"
    ],
    fullBenefits: [
      "Complimentary vehicle sanitization before each rental",
      "Flexible delivery across Dubai",
      "Early check-in on vehicles when available",
      "One complimentary booking change per month"
    ],
  },
  {
    name: "Gold",
    price: "AED 1,099",
    accentBar: "bg-slate-100 text-slate-600",
    border: "border-slate-200",
    icon: "G",
    tag: "Most Popular",
    highlights: [
      "Monthly complimentary upgrade",
      "Unlimited airport transfers",
      "Same-day chauffeur availability",
      "Personal trip designer",
    ],
    fullBenefits: [
      "Complimentary premium insurance on one booking per month",
      "Vehicle storage between rentals",
      "Exclusive invites to WTB DXB launch events",
      "Two complimentary booking changes per month",
      "Access to limited-edition models when released"
    ],
  },
  {
    name: "Platinum",
    price: "AED 2,499",
    accentBar: "bg-slate-100 text-slate-600",
    border: "border-slate-200",
    icon: "P",
    highlights: [
      "Unlimited concierge & chauffeur",
      "Private airport lounge access",
      "Complimentary delivery worldwide",
      "Personal lifestyle manager",
    ],
    fullBenefits: [
      "Bespoke track-day experiences",
      "Invitations to partner brand previews",
      "Complimentary vehicle detailing twice per month",
      "Dedicated driver team on standby",
      "Custom itinerary planning with luxury partners"
    ],
  },
];

const perks = [
  {
    title: "Member discount",
    highlight: "Up to 12% off",
    description: "Instant savings on weekly rentals plus priority booking windows across Dubai.",
  },
  {
    title: "Complimentary upgrades",
    highlight: "GT & Chauffeur",
    description: "Gold and Platinum members unlock automatic vehicle upgrades whenever available.",
  },
];

const discountRows = [
  { tier: "Silver", rate: "AED 2,760", savings: "6% off" },
  { tier: "Gold", rate: "AED 2,540", savings: "14% off" },
  { tier: "Platinum", rate: "AED 2,420", savings: "18% off" },
];

export default function MembershipPage() {
  const [expandedPlan, setExpandedPlan] = useState(null);
  const [activeRateTab, setActiveRateTab] = useState("member");

  // Full-width membership banner with text overlay
  const MembershipBanner = () => (
    <div className="relative w-full h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/membership.jpg"
          alt="Premium Car Membership"
          fill
          className="object-cover w-full h-full"
          style={{ objectPosition: 'center 20%' }}
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
        <div className="container mx-auto h-full flex items-center">
          <div className="max-w-2xl text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              UNLOCK PREMIUM<br />EXPERIENCES
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
              Discover our tiered membership program, designed to cater to every luxury driving enthusiast. Choose from our Silver, Gold, or Platinum tiers, each offering escalating benefits and access to our premium fleet.
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-3.5 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] border border-[#6B4FE8] text-white font-semibold text-base md:text-lg rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Explore Membership
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const togglePlan = (planName) => {
    setExpandedPlan((prev) => (prev === planName ? null : planName));
  };

  const renderPlanCard = (plan) => {
    const isExpanded = expandedPlan === plan.name;

    return (
      <div
        key={plan.name}
        className={`relative rounded-3xl border ${plan.border} bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl`}
      >
        {plan.tag && (
          <span className="absolute -top-4 right-6 rounded-full bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg">
            {plan.tag}
          </span>
        )}
        <div className={`rounded-t-3xl px-6 py-4 flex items-center gap-3 text-sm font-semibold tracking-[0.2em] ${plan.accentBar}`}>
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-current/40 text-[10px]">
            {plan.icon}
          </span>
          <span>{plan.name}</span>
        </div>
        <div className="px-6 py-6">
          <p className="text-3xl font-bold text-slate-900">
            {plan.price}
            <span className="text-base font-medium text-slate-500"> / month</span>
          </p>
          <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">
            12-month commitment · non-cancellable
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            {plan.highlights.map((perk) => (
              <li key={perk} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#B844E8]"></span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => togglePlan(plan.name)}
            className="mt-6 flex w-full items-center justify-between rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-[#B844E8] transition-colors hover:border-[#B844E8]/30"
          >
            See full benefits
            <span className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}>▾</span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-40 mt-4" : "max-h-0"}`}
          >
            <ul className="space-y-2 text-sm text-slate-600">
              {plan.fullBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-300"></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90">
            Get Started
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <MembershipBanner />
      
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Spacer */}
        <div className="h-12"></div>
        
        {/* Choose a Plan Section */}
        <section className="mb-16 sm:mb-20 pt-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Choose a plan</p>
            <h1 className="mt-4 text-2xl sm:text-4xl font-bold text-slate-900">
              CHOOSE A PLAN
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">
              Tailored memberships for frequent Dubai travelers.
            </p>
          </div>

          {/* Mobile View */}
          <div className="mt-8 space-y-6 md:hidden">
            {plans.map((plan) => (
              <div key={plan.name}>
                {renderPlanCard(plan)}
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="mt-10 hidden md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {plans.map(renderPlanCard)}
          </div>
        </section>

        {/* Member vs Non-Member Discount Section */}
        <section className="mt-10 sm:mt-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div className="flex justify-center items-center px-4 sm:px-6 md:px-0 lg:pr-10">
              <Image
                src="/car_black.png"
                alt="Membership discount example car"
                width={900}
                height={500}
                className="mx-auto w-full max-w-lg h-auto object-contain scale-100 drop-shadow-2xl"
              />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xl">
              <div className="rounded-2xl border border-slate-200 p-4 sm:p-5">
                {activeRateTab === "member" ? (
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Member rate</p>
                    <p className="text-3xl font-bold text-[#B844E8]">AED 2,420</p>
                    <p className="text-sm text-slate-500">Based on Platinum plan savings</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Non-member rate</p>
                    <p className="text-3xl font-bold text-slate-900">AED 2,940</p>
                    <p className="text-sm text-slate-500">Standard weekly rental</p>
                  </div>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setActiveRateTab("member")}
                  className="flex-1 min-w-[130px] rounded-full bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] border border-[#6B4FE8] px-4 py-2.5 text-xs md:text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90"
                >
                  Member Rate
                </button>
                <button
                  type="button"
                  onClick={() => setActiveRateTab("non")}
                  className="flex-1 min-w-[130px] rounded-full bg-white border border-slate-200 px-4 py-2.5 text-xs md:text-sm font-semibold text-slate-700 transition-all hover:border-[#B844E8] hover:text-[#B844E8]"
                >
                  Non-Member Rate
                </button>
              </div>
              <div className="mt-6 space-y-3">
                {discountRows.map((row) => (
                  <div key={row.tier} className="flex items-center justify-between rounded-2xl border border-slate-100 px-4 py-3 text-sm">
                    <div className="flex items-center gap-3">
                      <span className="h-8 w-8 rounded-full bg-slate-50 text-center leading-8 font-semibold text-slate-600">
                        {row.tier.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-700">{row.tier}</p>
                        <p className="text-xs text-slate-400">Includes concierge support</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-slate-900">{row.rate}</p>
                      <p className="text-xs text-[#B844E8]">{row.savings}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Terms & Conditions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#0A1A2F]" style={{ fontFamily: 'Poppins, sans-serif' }}>TERMS & CONDITIONS</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
            <ul className="list-disc list-inside space-y-3">
              <li>Membership is granted via a non-transferable membership card.</li>
              <li>Gold and Platinum memberships are available exclusively for residents.</li>
              <li>Members must be at least 23 years old and hold a valid driver's license and UAE Residence visa.</li>
              <li>Members are financially responsible for any vehicle damages during their rental period.</li>
              <li>Membership includes access to vehicles, exclusive discounts, and priority booking.</li>
              <li>Initial membership term is one year, with annual renewal upon payment of the renewal fee.</li>
              <li>Membership fees are non-refundable, and additional charges may apply for damages or services.</li>
              <li>Members must comply with all traffic laws and regulations during vehicle use.</li>
              <li>The company can terminate the agreement for violations, non-payment, or failure to meet eligibility requirements.</li>
              <li>Members must provide at least one month's written notice to terminate or not renew their membership.</li>
              <li>The agreement is governed by the laws of Dubai and the U.A.E.</li>
              <li>The Agreements under offers (POF Members, Esaad, Fazaa), Adding an additional driver will incur charges of AED 250 + VAT per day for Luxury & Premium cars and AED 350 + VAT per day for Sports & Performance cars.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Composite Image Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {/* Background Layer - membership1 */}
        <div className="absolute inset-0">
          <Image
            src="/membership1.png"
            alt="Premium Car Membership Background"
            fill
            className="object-cover w-full h-full"
            style={{ objectPosition: 'center 20%' }}
            priority
          />
        </div>
        
        {/* Car Overlay Layer - membership2 */}
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="relative w-1/2 h-full">
            <Image
              src="/membership2.png"
              alt="Premium Car"
              fill
              className="object-contain object-right"
              style={{ 
                objectPosition: 'right center',
                maxWidth: '60%',
                maxHeight: '60%',
                margin: 'auto'
              }}
              priority
            />
          </div>
        </div>
        
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>
    </div>
  );
}
