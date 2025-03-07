const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`lg:w-fit w-full flex  justify-center items-center px-7 py-3 rounded-2xl border border-border-theme text-xl font-medium shadow transition-colors duration-300 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
