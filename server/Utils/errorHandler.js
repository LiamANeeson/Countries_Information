function errorHandler(err, res) {
    console.error(err);
    res.status(500).json({ message: err.message });
}

module.exports = errorHandler;