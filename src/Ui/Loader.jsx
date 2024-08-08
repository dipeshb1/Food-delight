function Loader() {
  return (
    <div
      data-testid="loader-container"
      className="fixed inset-0 top-16 z-10 flex items-center justify-center bg-slate-200/50 backdrop-blur-sm"
    >
      <div data-testid="loader-element" className="loader"></div>
    </div>
  );
}

export default Loader;
