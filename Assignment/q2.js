// Response time middleware
const responseTimeMiddleware = (req, res, next) => {
  const start = process.hrtime.bigint();  // High-res start time [web:24]

  res.on('finish', () => {
    const end = process.hrtime.bigint();
    const durationMs = Number(end - start) / 1_000_000;  // Convert to ms
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url} - Response time: ${durationMs.toFixed(2)}ms`);
  });

  next();
};
