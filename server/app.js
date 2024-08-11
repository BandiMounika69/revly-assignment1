// performanceController.js

exports.analyzeWebsite = (req, res) => {
  // Assuming you have calculated some metrics like pageLoadTime
  const metrics = {
      pageLoadTime: 2000,  // Example value in milliseconds
      // Other performance metrics...
  };

  res.status(200).json(metrics);
};
