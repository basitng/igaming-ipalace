const SkeletonLoader = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden p-4">
      <div className="animate-pulse">
        <div className="bg-gray-300 h-48 w-full"></div>
        <div className="h-4 bg-gray-300 w-3/4 my-2"></div>
        <div className="h-3 bg-gray-300 w-1/2 my-1"></div>
        <div className="h-3 bg-gray-300 w-4/5 my-1"></div>
        <div className="h-3 bg-gray-300 w-3/5 my-1"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
