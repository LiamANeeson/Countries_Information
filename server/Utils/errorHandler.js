function errorHandler(err, res) {
    res.status(500).json({ message: err.message });
}

module.exports = errorHandler;