
const Loader = ({ loading }) => {
  if (!loading) return null;
  
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-sky-900 transition-opacity duration-500 ease-in-out ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="flex flex-col items-center space-y-4">
        
        <div className="relative md:w-20 w-16 md:h-20 h-16">
          <div className="absolute inset-0 border-4 border-yellow-400 rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-2 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        <div className="md:mt-8 mt-4 md:w-48 w-32 h-2 bg-sky-700 rounded-full overflow-hidden">
          <div className={`h-full bg-yellow-400 rounded-full transition-all duration-1000 ease-out ${loading ? 'w-full' : 'w-0'}`}></div>
        </div>
        
        <div className="flex flex-col items-center space-y-1">
          <p className="text-yellow-400 font-medium text-lg animate-pulse">Loading</p>
          <p className="text-sky-100 text-sm">Please wait...</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;