const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;

  res.on("finish", () => {
    const statusCode = res.statusCode;
    console.log(`[${timestamp}] ${method} ${url} -> Status: ${statusCode}`);
  });

  next();
};

module.exports = logger;
