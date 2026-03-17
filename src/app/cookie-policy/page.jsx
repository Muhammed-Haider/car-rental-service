export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#0D0D0D] text-white">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Cookie Policy
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-[#B844E8] to-transparent rounded-full" />
          </div>
          <p className="text-slate-400 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Last updated: December 21, 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 md:space-y-12 text-slate-300 leading-relaxed text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies help us understand how you use our website and improve your browsing experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              2. How We Use Cookies
            </h2>
            <p className="mb-4">WTB DXB uses cookies for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To enable certain functions of our website</li>
              <li>To provide analytics and track website usage</li>
              <li>To store your preferences and settings</li>
              <li>To enhance security and prevent fraud</li>
              <li>To personalize your experience</li>
              <li>To deliver relevant advertising</li>
              <li>To remember your login information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              3. Types of Cookies We Use
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-6 mb-3 md:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              3.1 Essential Cookies
            </h3>
            <p className="mb-4">
              These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1">
              <p><strong>Examples:</strong></p>
              <ul className="list-disc list-inside ml-4">
                <li>Session cookies for authentication</li>
                <li>Security cookies for fraud prevention</li>
                <li>Load balancing cookies</li>
              </ul>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-6 mb-3 md:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              3.2 Performance Cookies
            </h3>
            <p className="mb-4">
              These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us improve how our website works.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1">
              <p><strong>Examples:</strong></p>
              <ul className="list-disc list-inside ml-4">
                <li>Google Analytics cookies</li>
                <li>Page load time tracking</li>
                <li>Error reporting cookies</li>
              </ul>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-6 mb-3 md:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              3.3 Functional Cookies
            </h3>
            <p className="mb-4">
              These cookies enable enhanced functionality and personalization, such as remembering your preferences and choices.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1">
              <p><strong>Examples:</strong></p>
              <ul className="list-disc list-inside ml-4">
                <li>Language preferences</li>
                <li>Recently viewed vehicles</li>
                <li>Search filters and preferences</li>
                <li>Chat widget cookies</li>
              </ul>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-6 mb-3 md:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              3.4 Targeting/Advertising Cookies
            </h3>
            <p className="mb-4">
              These cookies are used to deliver advertisements more relevant to you and your interests. They also limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1">
              <p><strong>Examples:</strong></p>
              <ul className="list-disc list-inside ml-4">
                <li>Google Ads cookies</li>
                <li>Facebook Pixel</li>
                <li>Retargeting cookies</li>
                <li>Social media cookies</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              4. Third-Party Cookies
            </h2>
            <p className="mb-4">
              We use various third-party services that may set cookies on your device. These include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
              <li><strong>Google Ads:</strong> For advertising and remarketing</li>
              <li><strong>Facebook:</strong> For social media integration and advertising</li>
              <li><strong>Instagram:</strong> For social media integration</li>
              <li><strong>YouTube:</strong> For embedded video content</li>
              <li><strong>Payment Processors:</strong> For secure payment processing</li>
            </ul>
            <p className="mt-4">
              These third parties have their own privacy policies, and we have no control over their cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              5. Cookie Duration
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-6 mb-3 md:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              5.1 Session Cookies
            </h3>
            <p className="mb-4">
              These are temporary cookies that expire when you close your browser. They are used to maintain your session as you navigate through our website.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-6 mb-3 md:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              5.2 Persistent Cookies
            </h3>
            <p className="mb-4">
              These cookies remain on your device for a set period or until you delete them. They help us recognize you as a returning visitor and remember your preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              6. How to Control Cookies
            </h2>
            <p className="mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your browser settings.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-6 mb-3 md:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Browser Settings
            </h3>
            <p className="mb-4">Most browsers allow you to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>See what cookies you have and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies from being set</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-6 mb-3 md:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Browser-Specific Instructions
            </h3>
            <div className="space-y-3">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p><strong>Microsoft Edge:</strong> Settings → Privacy, search, and services → Cookies</p>
              </div>
            </div>

            <p className="mt-6 text-yellow-400">
              <strong>Important:</strong> Blocking cookies may affect your ability to use certain features of our website. Some functions may not work properly if you disable cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              7. Do Not Track Signals
            </h2>
            <p>
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want your online activities tracked. Currently, there is no industry standard for how to respond to DNT signals, so our website does not respond to DNT requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              8. Mobile Devices
            </h2>
            <p className="mb-4">
              Mobile devices also use cookies and similar tracking technologies. You can manage cookies on mobile devices through your device settings:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>iOS:</strong> Settings → Safari → Privacy & Security</li>
              <li><strong>Android:</strong> Settings → Privacy → Advanced → Site Settings → Cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              9. Changes to This Cookie Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. The updated version will be indicated by an updated "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              10. More Information
            </h2>
            <p className="mb-4">
              For more information about how we process your personal data, please see our <a href="/privacy-policy" className="text-[#B844E8] hover:underline">Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              11. Contact Us
            </h2>
            <p className="mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
              <p><strong>WTB DXB</strong></p>
              <p>Email: <a href="mailto:privacy@wtbdxb.ae" className="text-[#B844E8] hover:underline">privacy@wtbdxb.ae</a></p>
              <p>Phone: <a href="tel:+971554079239" className="text-[#B844E8] hover:underline">+971 55 407 9239</a></p>
              <p>Address: Dubai, United Arab Emirates</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
