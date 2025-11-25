export default function SectionWrapper({ children, className }) {
  return (
    <section className={`w-full py-16 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
