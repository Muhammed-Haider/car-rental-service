"use client";

import { cars } from '../../../lib/cardata';
import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaCalendarAlt, FaGlobe } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';

export default function CarDetailPage({ params }) {
  const resolvedParams = use(params);
  const car = cars.find((c) => c.id.toString() === resolvedParams.id);
  const [activeTab, setActiveTab] = useState('specifications');
  const [selectedDates, setSelectedDates] = useState({ start: '', end: '' });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [openQuestion, setOpenQuestion] = useState(null);
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  // Sample reviews data - in a real app, this would come from an API
  const allReviews = [
    {
      id: 1,
      name: 'John D.',
      rating: 5,
      date: '2 days ago',
      text: `Amazing experience renting the ${car.name}! The car was in perfect condition and the service was exceptional. Will definitely rent again.`,
      avatar: 'JD'
    },
    {
      id: 2,
      name: 'Ahmed S.',
      rating: 5,
      date: '1 week ago',
      text: `The ${car.name} was everything I hoped for and more. The team was professional and made the whole process smooth. Highly recommended!`,
      avatar: 'AS'
    },
    // Add more sample reviews
    ...Array(22).fill().map((_, i) => ({
      id: i + 3,
      name: ['Sarah M.', 'Michael T.', 'Emma R.', 'David K.', 'Olivia P.', 'James W.', 'Sophia L.', 'William B.', 'Ava M.', 'Noah J.',
             'Isabella C.', 'Liam P.', 'Mia H.', 'Benjamin F.', 'Charlotte R.', 'Elijah M.', 'Amelia S.', 'Lucas W.', 'Harper L.', 'Mason B.',
             'Evelyn R.', 'Ethan C.'][i % 22],
      rating: [5, 4, 5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5][i % 22],
      date: `${i + 2} weeks ago`,
      text: `Great experience with the ${car.name}. ${[
        'The car was in excellent condition and performed amazingly well on the road.',
        'Customer service was top-notch, very professional and helpful throughout the rental period.',
        'The entire process was seamless from start to finish. Will definitely rent again!',
        'The car exceeded my expectations in terms of both performance and comfort.',
        'Very satisfied with the rental experience. The team was very accommodating.',
        'The car was clean, well-maintained, and a joy to drive.',
        'Excellent service and a fantastic car. Made my trip memorable!',
        'Highly recommend this rental service. The car was perfect in every way.',
        'The booking process was easy and the car was ready when I arrived.',
        'Great value for money. The car was exactly as described.',
        'Impeccable service and a stunning car. Will be coming back for sure!',
        'The team went above and beyond to make sure I had a great experience.',
        'Perfect car for a weekend getaway. Handled beautifully on the highway.',
        'Very professional service and the car was in pristine condition.',
        'I was impressed by the attention to detail and customer service.',
        'The car was a head-turner and performed exceptionally well.',
        'Smooth rental process and excellent communication throughout.',
        'The car was even better in person. Very happy with my choice.',
        'Friendly staff and a flawless rental experience.',
        'The perfect car for a luxury experience in the city.',
        'Exceptional service from start to finish. Highly recommended!',
        'The car was clean, comfortable, and a dream to drive.'
      ][i % 22]}`,
      avatar: ['SM', 'MT', 'ER', 'DK', 'OP', 'JW', 'SL', 'WB', 'AM', 'NJ', 'IC', 'LP', 'MH', 'BF', 'CR', 'EM', 'AS', 'LW', 'HL', 'MB', 'ER', 'EC'][i % 22]
    }))
  ];
  
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  if (!car) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0A1A2F] text-white">
        <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
        <p className="text-lg mb-8">Sorry, we couldn't find the car you're looking for.</p>
        <Link href="/" className="px-6 py-3 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-purple-500/25">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">{car.name}</span>
            <span>/</span>
            <span className="bg-gradient-to-r from-[#8B3FBF] to-[#B844E8] bg-clip-text text-transparent">Rent {car.name} in Dubai</span>
          </nav>
        </div>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
            Rent <span className="bg-gradient-to-r from-[#8B3FBF] to-[#B844E8] bg-clip-text text-transparent">{car.name}</span> in Dubai
          </h1>
        </div>

        {/* Two Column Layout - Extra wide image, compact form */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8">
          {/* Left Column - Image and Specifications */}
          <div className="space-y-6">
            {/* Image Gallery - Extra Wide */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#2a2a2a]">
              <div className="relative w-full pt-[75%]">
                <Image
                  src={car.image}
                  alt={car.name}
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 w-full h-full"
                  priority
                />
              </div>
              {/* Gallery Navigation Arrows */}
              <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Car Specifications with Compare Button */}
            <div className="relative">
              <div className="bg-[#1A1A1A] rounded-xl p-4 mt-6 border border-gray-800/50">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-2">
                    <div className="text-2xl font-bold text-white">4.7s</div>
                    <div className="text-xs text-gray-400">0-100 km/h</div>
                  </div>
                  <div className="p-2 border-x border-gray-800/50">
                    <div className="text-2xl font-bold text-white">250</div>
                    <div className="text-xs text-gray-400">Top Speed (km/h)</div>
                  </div>
                  <div className="p-2">
                    <div className="text-2xl font-bold text-white">4</div>
                    <div className="text-xs text-gray-400">Seats</div>
                  </div>
                </div>
              </div>
              <Link 
                href="/compare" 
                className="absolute -top-3 right-4 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] hover:opacity-90 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-lg hover:shadow-[#9D5FFF]/30 transition-all"
              >
                Compare Cars
              </Link>
            </div>

            {/* Tabbed Section */}
            <div className="bg-[#1A1A1A] rounded-2xl border border-gray-800/50">
              {/* Tab Navigation */}
              <div className="flex border-b border-gray-800/50">
                <button
                  onClick={() => setActiveTab('specifications')}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'specifications'
                      ? 'text-[#00d4aa] border-b-2 border-[#00d4aa]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setActiveTab('conditions')}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'conditions'
                      ? 'text-[#00d4aa] border-b-2 border-[#00d4aa]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Rental Conditions
                </button>
                <button
                  onClick={() => setActiveTab('terms')}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'terms'
                      ? 'text-[#00d4aa] border-b-2 border-[#00d4aa]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Terms of Rental
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6 text-gray-300">
                {activeTab === 'specifications' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex justify-between py-2 border-b border-gray-800">
                        <span className="text-gray-400">Horsepower</span>
                        <span className="text-white font-medium">{car.specs.horsepower} hp</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-800">
                        <span className="text-gray-400">Engine</span>
                        <span className="text-white font-medium">{car.specs.engine}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-800">
                        <span className="text-gray-400">Type</span>
                        <span className="text-white font-medium">SUV</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-800">
                        <span className="text-gray-400">Drive</span>
                        <span className="text-white font-medium">All-Wheel Drive</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-800">
                        <span className="text-gray-400">Quantity of Seats</span>
                        <span className="text-white font-medium">{car.specs.seats}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-800">
                        <span className="text-gray-400">0-100 km/h</span>
                        <span className="text-white font-medium">{car.specs.acceleration}s</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-800">
                        <span className="text-gray-400">Wheel radius</span>
                        <span className="text-white font-medium">21"</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-800">
                        <span className="text-gray-400">Color</span>
                        <span className="text-white font-medium">Black</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-800">
                        <span className="text-gray-400">Interior color</span>
                        <span className="text-white font-medium">Black</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-800">
                        <span className="text-gray-400">Max speed</span>
                        <span className="text-white font-medium">305 km/h</span>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'conditions' && (
                  <div className="space-y-4">
                    <p className="text-gray-300">Minimum age: 25 years old</p>
                    <p className="text-gray-300">Valid driving license required</p>
                    <p className="text-gray-300">Security deposit: AED 5,000</p>
                    <p className="text-gray-300">Insurance included</p>
                  </div>
                )}
                {activeTab === 'terms' && (
                  <div className="space-y-4">
                    <p className="text-gray-300">Daily mileage limit: 250 km</p>
                    <p className="text-gray-300">Additional km: AED 10/km</p>
                    <p className="text-gray-300">Salik (toll) charges included</p>
                    <p className="text-gray-300">VAT included in all prices</p>
                  </div>
                )}
              </div>
            </div>

            {/* Compare Cars Button */}
            <Link href="/compare" className="block w-full">
              <button className="w-full py-3 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] text-white font-medium rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-[#9D5FFF]/30">
                Compare Cars
              </button>
            </Link>

            {/* Description Section */}
            <div className="mt-8 bg-[#1A1A1A] rounded-2xl p-6 border border-gray-800/50">
              <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
              <div className="prose prose-invert max-w-none">
                <div className="whitespace-pre-line text-gray-300">
                  Dubai is known for its over-the-top luxury experiences, and driving a {car.name} takes that to the next level. This Italian, eye-catching vehicle combines cutting-edge technology with the flair of a classic sports car to create an unmatched drive.

Why rent {car.name} in Dubai?
Renting a {car.name} takes you to a new level of luxury. Cruising along palm tree-lined boulevards or showing off the muscular curves of the vehicle at luxury hotels lets you soak up the ambiance of the dynamic city. The powerful torque and throaty engine will turn heads wherever you ride.

Specifications of {car.name}
- Engine: {car.specs.engine}
- Horsepower: {car.specs.horsepower} HP
- 0-100 km/h: {car.specs.acceleration}s
- Seating: {car.specs.seats} Seats
- Top Speed: 300+ km/h

Features of {car.name}
- Premium leather interior with luxury finishes
- Advanced infotainment system with touchscreen
- Climate control and premium sound system
- Advanced safety features
- Sport-tuned suspension

Hire {car.name} With Trinity Rental in Dubai
Trinity Rental provides the once-in-a-lifetime opportunity to experience the {car.name} in Dubai. With prices starting at {car.price.toLocaleString()} AED per day, you can make your luxury supercar dreams come true without buying one. Whether zipping along Jumeirah Beach or exploring the awe-inspiring desert, this model delivers an incredible experience.
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 bg-[#1A1A1A] rounded-2xl p-6 border border-gray-800/50">
              <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
              <div className="space-y-2">
                {[
                  {
                    question: `What is the minimum rental period for the ${car.name}?`,
                    answer: `The minimum rental period is 1 day for the ${car.name}.`
                  },
                  {
                    question: 'What is included in the rental price?',
                    answer: 'Our rental price includes comprehensive insurance, 24/7 roadside assistance, and unlimited mileage. Additional services like delivery and collection can be arranged at an extra cost.'
                  },
                  {
                    question: `What are the requirements to rent the ${car.name}?`,
                    answer: `To rent the ${car.name}, you must be at least 25 years old, hold a valid driver's license for at least 2 years, and provide a valid credit card in the main driver's name.`
                  },
                  {
                    question: 'Is there a security deposit required?',
                    answer: 'Yes, a security deposit is required and will be blocked on your credit card during the rental period. The amount varies depending on the vehicle and rental duration.'
                  },
                  {
                    question: `Can I take the ${car.name} outside of Dubai?`,
                    answer: 'Yes, you can take the vehicle to other Emirates. However, please inform us in advance as additional insurance coverage may be required.'
                  },
                  {
                    question: 'What is your cancellation policy?',
                    answer: 'You can cancel your booking free of charge up to 48 hours before the rental start time. For cancellations made less than 48 hours before, a cancellation fee of one day\'s rental will apply.'
                  }
                ].map((item, index) => (
                  <div key={index} className="border-b border-gray-800/50">
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                    >
                      <h4 className="text-lg font-semibold text-white pr-4">{item.question}</h4>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                          openQuestion === index ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openQuestion === index ? 'max-h-40 pb-4' : 'max-h-0'
                      }`}
                    >
                      <p className="text-gray-400">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-8 bg-[#1A1A1A] rounded-2xl p-6 border border-gray-800/50">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-white font-medium">5.0</span>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-gray-400">{allReviews.length} reviews</span>
                </div>
              </div>

              <div className="space-y-6">
                {/* Show first 2 reviews */}
                {allReviews.slice(0, 2).map((review) => (
                  <div key={review.id} className="border-b border-gray-800/50 pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] flex items-center justify-center text-white font-bold">
                          {review.avatar}
                        </div>
                        <div className="ml-3">
                          <h4 className="text-white font-medium">{review.name}</h4>
                          <div className="flex items-center">
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="ml-2 text-xs text-gray-400">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-400 text-sm">
                        <FaCalendarAlt className="inline mr-1" /> {review.date}
                      </div>
                    </div>
                    <p className="text-gray-300 mt-2">{review.text}</p>
                  </div>
                ))}

                {/* View All Reviews Button */}
                <button 
                  onClick={() => setShowAllReviews(true)}
                  className="w-full py-3 border border-[#6B4FE8] text-[#6B4FE8] font-medium rounded-lg hover:bg-[#6B4FE8] hover:bg-opacity-10 transition-colors"
                >
                  View All {allReviews.length} Reviews
                </button>
              </div>
            </div>

            {/* All Reviews Modal */}
            {showAllReviews && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 overflow-y-auto">
                <div className="bg-[#1A1A1A] rounded-2xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-6 sticky top-0 bg-[#1A1A1A] pt-4 pb-2">
                    <h3 className="text-2xl font-bold text-white">All Reviews</h3>
                    <button 
                      onClick={() => setShowAllReviews(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {allReviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-800/50 pb-6">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] flex items-center justify-center text-white font-bold">
                              {review.avatar}
                            </div>
                            <div className="ml-3">
                              <h4 className="text-white font-medium">{review.name}</h4>
                              <div className="flex items-center">
                                <div className="flex">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                                <span className="ml-2 text-xs text-gray-400">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-gray-400 text-sm">
                            <FaCalendarAlt className="inline mr-1" /> {review.date}
                          </div>
                        </div>
                        <p className="text-gray-300 mt-2">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Rental Form (Compact) */}
          <div className="space-y-3">
            {/* Your Phone Section */}
            <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-3">
              <label className="block text-xs font-medium text-gray-400 mb-1">Your Phone</label>
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-[#2a2a2a] rounded-lg px-2 py-1.5 text-xs">
                  <FaGlobe className="text-[#00d4aa] mr-1 text-xs" />
                  <select className="bg-transparent text-white outline-none text-xs w-14">
                    <option>+971</option>
                  </select>
                </div>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Phone number"
                  className="flex-1 bg-[#2a2a2a] text-white text-xs px-2 py-1.5 rounded-lg outline-none focus:ring-1 focus:ring-[#00d4aa]"
                />
              </div>
            </div>

            {/* Rental Dates */}
            <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-3">
              <label className="block text-xs font-medium text-gray-400 mb-1">Rental Dates</label>
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <input
                    type="date"
                    value={selectedDates.start}
                    onChange={(e) => setSelectedDates({...selectedDates, start: e.target.value})}
                    className="w-full bg-[#2a2a2a] text-white text-xs px-2 py-1.5 pr-6 rounded-lg outline-none focus:ring-1 focus:ring-[#00d4aa]"
                  />
                  <FaCalendarAlt className="absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400 text-[10px]" />
                </div>
                <div className="relative">
                  <input
                    type="date"
                    value={selectedDates.end}
                    onChange={(e) => setSelectedDates({...selectedDates, end: e.target.value})}
                    className="w-full bg-[#2a2a2a] text-white text-xs px-2 py-1.5 pr-6 rounded-lg outline-none focus:ring-1 focus:ring-[#00d4aa]"
                  />
                  <FaCalendarAlt className="absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400 text-[10px]" />
                </div>
              </div>
            </div>

            {/* Rent Button */}
            <button className="w-full py-2 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] text-white font-medium text-sm rounded-lg hover:opacity-90 transition-all duration-300">
              Rent
            </button>

            {/* Pricing Section */}
            <div className="bg-[#1A1A1A] rounded-xl p-4 border border-gray-800/50">
              <h3 className="text-base font-semibold text-white mb-3">Rent Price</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">1-3 days</span>
                  <span className="text-white font-medium">{car.price.toLocaleString()} AED/day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">4-7 days</span>
                  <span className="text-white font-medium">{Math.round(car.price * 0.9).toLocaleString()} AED/day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">8-29 days</span>
                  <span className="text-white font-medium">{Math.round(car.price * 0.8).toLocaleString()} AED/day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">30+ days</span>
                  <span className="text-white font-medium">{Math.round(car.price * 0.7).toLocaleString()} AED/day</span>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 mt-2">VAT included</p>
            </div>

            {/* Contact Icons */}
            <div className="flex justify-center gap-4 py-2">
              <a
                href="tel:+971554079239"
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#1A1A1A] border border-gray-800/50 px-2 py-1.5 rounded-lg hover:border-[#9D5FFF] transition-colors text-xs hover:bg-[#1f1f1f]"
                aria-label="Call us"
              >
                <FaPhone className="text-white text-lg" />
              </a>
              <a
                href="https://wa.me/971554079239"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] px-2 py-1.5 rounded-lg hover:bg-[#128C7E] transition-colors text-xs hover:shadow-lg hover:shadow-[#25D366]/20"
                aria-label="Message us on WhatsApp"
              >
                <FaWhatsapp className="text-white text-xl" />
              </a>
            </div>

            {/* Included Features */}
            <div className="bg-[#1A1A1A] rounded-xl border border-gray-800/50 p-4">
              <h3 className="text-base font-semibold text-white mb-3">Included</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center space-x-2">
                  <MdCheckCircle className="text-[#00d4aa] flex-shrink-0 text-sm" />
                  <span className="text-gray-300">No deposit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MdCheckCircle className="text-[#00d4aa] flex-shrink-0 text-sm" />
                  <span className="text-gray-300">Cash, cards, crypto</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MdCheckCircle className="text-[#00d4aa] flex-shrink-0 text-sm" />
                  <span className="text-gray-300">Free fuel</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MdCheckCircle className="text-[#00d4aa] flex-shrink-0 text-sm" />
                  <span className="text-gray-300">Free delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MdCheckCircle className="text-[#00d4aa] flex-shrink-0 text-sm" />
                  <span className="text-gray-300">250km/day</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MdCheckCircle className="text-[#00d4aa] flex-shrink-0 text-sm" />
                  <span className="text-gray-300">Tolls included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
