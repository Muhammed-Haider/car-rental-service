export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#0D0D0D] text-white">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Terms of Service
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-[#B844E8] to-transparent rounded-full" />
          </div>
          <p className="text-slate-400 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Last updated: December 21, 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-slate-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using WTB DXB's services, you accept and agree to be bound by these Terms of Service. These terms apply to all visitors, users, and others who access or use our luxury car rental services. If you disagree with any part of the terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              2. Eligibility Requirements
            </h2>
            <p className="mb-4">To rent a vehicle from WTB DXB, you must:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Be at least 23 years of age</li>
              <li>Hold a valid driver's license recognized in the UAE</li>
              <li>For Gold and Platinum memberships: Hold a valid UAE Residence visa</li>
              <li>Provide valid identification documents</li>
              <li>Possess a valid credit/debit card for security deposit</li>
              <li>Meet our insurance requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              3. Booking and Reservations
            </h2>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              3.1 Reservation Process
            </h3>
            <p className="mb-4">
              All reservations must be made through our website, mobile app, or authorized channels. A valid payment method is required to confirm your booking.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              3.2 Confirmation
            </h3>
            <p className="mb-4">
              Your booking is confirmed only when you receive a confirmation email from us. We reserve the right to refuse any reservation at our discretion.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              3.3 Modification and Cancellation
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Silver members: One complimentary booking change per month</li>
              <li>Gold members: Two complimentary booking changes per month</li>
              <li>Cancellations made 48 hours before pickup: Full refund</li>
              <li>Cancellations made 24-48 hours before: 50% refund</li>
              <li>Cancellations less than 24 hours: No refund</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              4. Rental Terms
            </h2>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              4.1 Vehicle Condition
            </h3>
            <p className="mb-4">
              All vehicles are provided in excellent condition. You must inspect the vehicle before accepting it and report any pre-existing damage immediately.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              4.2 Use of Vehicle
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Vehicles must be operated in accordance with UAE traffic laws</li>
              <li>Only authorized drivers may operate the vehicle</li>
              <li>Vehicles may not be used for racing, towing, or off-road driving</li>
              <li>Smoking is prohibited in all vehicles</li>
              <li>Vehicles may not be taken outside UAE without prior written consent</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              4.3 Additional Drivers
            </h3>
            <p>
              Adding additional drivers incurs charges of AED 250 + VAT per day for Luxury & Premium cars and AED 350 + VAT per day for Sports & Performance cars. All additional drivers must meet eligibility requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              5. Payment Terms
            </h2>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              5.1 Rental Fees
            </h3>
            <p className="mb-4">
              Rental fees are quoted in UAE Dirhams (AED) and include basic insurance. VAT is additional as per UAE regulations.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              5.2 Security Deposit
            </h3>
            <p className="mb-4">
              A refundable security deposit is required for all rentals. The amount varies based on vehicle class and will be authorized on your credit card. The deposit is released 7-14 business days after vehicle return, subject to no damages or violations.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              5.3 Additional Charges
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fuel charges (if vehicle not returned with full tank)</li>
              <li>Late return fees</li>
              <li>Traffic violations and fines</li>
              <li>Cleaning fees for excessive dirt or odors</li>
              <li>Salik/toll charges</li>
              <li>Airport delivery/pickup fees</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              6. Insurance and Liability
            </h2>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              6.1 Basic Insurance
            </h3>
            <p className="mb-4">
              All rentals include basic third-party liability insurance as required by UAE law.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              6.2 Damage Responsibility
            </h3>
            <p className="mb-4">
              You are financially responsible for any damage to the vehicle during the rental period, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Collision damage</li>
              <li>Theft or vandalism</li>
              <li>Interior damage</li>
              <li>Mechanical damage due to misuse</li>
              <li>Tire and rim damage</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              6.3 Gold Members
            </h3>
            <p>
              Gold members receive complimentary premium insurance on one booking per month.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              7. Membership Programs
            </h2>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              7.1 Membership Terms
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Memberships require a 12-month commitment</li>
              <li>Membership fees are non-refundable</li>
              <li>Memberships are non-transferable</li>
              <li>Benefits are subject to availability</li>
              <li>We reserve the right to modify membership benefits with 30 days notice</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              7.2 Termination
            </h3>
            <p>
              We may terminate membership for violations, non-payment, or failure to meet eligibility requirements. Members must provide at least one month's written notice to terminate or not renew membership.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              8. Traffic Violations and Fines
            </h2>
            <p className="mb-4">
              You are responsible for all traffic violations, parking fines, and Salik charges incurred during your rental period. An administrative fee of AED 100 + VAT will be charged for processing each violation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              9. Prohibited Uses
            </h2>
            <p className="mb-4">You may not use our vehicles for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Illegal activities or purposes</li>
              <li>Racing, rallying, or competitive driving</li>
              <li>Commercial transportation or delivery services</li>
              <li>Driving instruction or lessons</li>
              <li>Sub-rental to third parties</li>
              <li>Transport of hazardous materials</li>
              <li>While under the influence of alcohol or drugs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              10. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, WTB DXB shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount you paid for the rental.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              11. Force Majeure
            </h2>
            <p>
              We are not responsible for failure to perform our obligations due to circumstances beyond our reasonable control, including natural disasters, government actions, or public health emergencies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              12. Governing Law
            </h2>
            <p>
              These Terms of Service are governed by the laws of Dubai and the United Arab Emirates. Any disputes shall be resolved in the courts of Dubai.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              13. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of material changes via email or website notice. Continued use of our services constitutes acceptance of modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              14. Contact Information
            </h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
              <p><strong>WTB DXB</strong></p>
              <p>Email: <a href="mailto:info@wtbdxb.ae" className="text-[#B844E8] hover:underline">info@wtbdxb.ae</a></p>
              <p>Phone: <a href="tel:+971554079239" className="text-[#B844E8] hover:underline">+971 55 407 9239</a></p>
              <p>Address: Dubai, United Arab Emirates</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
