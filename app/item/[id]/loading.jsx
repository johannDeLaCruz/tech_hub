const LoadingPage = () => {
    const spinningAnimation = {
      animation: "spin 1.5s ease-in-out infinite",
    };    
    return (
      <div className="h-screen flex flex-col justify-center items-center">       
        <h1 className="text-center font-heading text-h1" style={spinningAnimation}>
          <span>T</span>
          <span className="text-primary-500">H</span>
        </h1>
        <h3 className="font-heading text-heading text-center py-6">
         Loading Page...
        </h3>
      </div>
    );
  };
  
  export default LoadingPage;