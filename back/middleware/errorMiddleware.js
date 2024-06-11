const notFound = (req, res, next) => {
	const error = new Error(`Not found - ${req.originalUrl}`);
	res.status(404);
	next(error);
};

const errorHandler = (err, req, res) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	const message = res.statusCode === 500 ? "Coudn't retrieve data" : "OK";

	res.status(statusCode).json({
		message,
		stack: process.env.NODE_ENV === "production" ? null : err.stack,
	});
};

export { notFound, errorHandler };
