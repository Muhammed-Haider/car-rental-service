export default function BusinessHours() {
  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg ring-1 ring-slate-100">
      <h3 
        className="text-2xl font-bold text-slate-800 mb-6"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Business Hours
      </h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center pb-2 border-b border-slate-100">
          <p className="text-base text-slate-700" style={{ fontFamily: "Inter, sans-serif" }}>Monday - Friday</p>
          <p className="text-base font-semibold text-slate-800" style={{ fontFamily: "Poppins, sans-serif" }}>9:00 AM - 7:00 PM</p>
        </div>
        <div className="flex justify-between items-center pb-2 border-b border-slate-100">
          <p className="text-base text-slate-700" style={{ fontFamily: "Inter, sans-serif" }}>Saturday</p>
          <p className="text-base font-semibold text-slate-800" style={{ fontFamily: "Poppins, sans-serif" }}>10:00 AM - 5:00 PM</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-slate-700" style={{ fontFamily: "Inter, sans-serif" }}>Sunday</p>
          <p className="text-base font-semibold text-slate-800" style={{ fontFamily: "Poppins, sans-serif" }}>Closed</p>
        </div>
      </div>
    </div>
  );
}
