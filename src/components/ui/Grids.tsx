export function GridBackgroundDemo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-grid-border-theme/50 relative flex items-center justify-center">
      {children}
      <div className="absolute pointer-events-none inset-0 bg-white [mask-image:linear-gradient(to_right,white,transparent_25%,transparent_90%,white),linear-gradient(to_bottom,white,transparent_75%,transparent_25%,white)]"></div>
    </div>
  );
}
