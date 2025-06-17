const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-sky-100/90 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-4 border-sky-600 border-t-sky-300 rounded-full animate-spin"></div>
        
        <p className="text-sky-800 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;