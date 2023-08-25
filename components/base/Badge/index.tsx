const Badge = ({ label, children }) => {
  return (
    <div className="flex items-start">
      {children}
      <div className="-ml-2 -mt-4 flex h-6 w-6 min-w-min items-center justify-center rounded-full border-2 border-white bg-[#fa3400] px-1 py-0.5 text-xs font-semibold text-white">
        {label}
      </div>
    </div>
  );
};

export default Badge;
