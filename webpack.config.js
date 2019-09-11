var path = require("path");

module.exports = {
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	entry: "./src/main",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
	},
	module: {
		rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
	},
	devServer: {
		host: "0.0.0.0",
		contentBase:[path.join(__dirname, "src")],
		stats: {
			assets: false,
			hash: false,
			chunks: false,
			errors: true,
			errorDetails: true,
		},
		overlay: true,
	},
};
