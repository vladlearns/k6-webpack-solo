# k6-webpack-solo

This repository contains a simple setup for using k6 with Webpack for running load tests on your application.

## Requirements

Node.js 14.18.0 or higher

k6

## Installation

Clone the repository:

```sh
git clone https://github.com/vladlearns/k6-webpack-solo.git
```

Install the dependencies:

```sh
npm install
```

Bundle:

```sh
npm run bundle
```

## Usage

To run all the test files in the bundle using webpack, use the following command:

```sh
npm run exec:all
```

This will run all the test files in the bundle using webpack.

You can also pass options to the k6 command by adding them after npm run exec:all, for example, to run the test for 60 seconds and with a max virtual users of 100, use the following command:

```sh
npm run exec:all -- -d 60s -u 100
```

It will run all the test files in the bundle using webpack and will use the passed options with k6 command.

To run a specific test file, use the following command:

```sh
npm run exec:single [path_to_test_file]
```

For example, to run the history.js file located in the scripts folder, use the following command:

```sh
npm run exec:single scripts/history.js
```

This will run the replacer.js file, which will create a history-solo.js file, and run the k6 test using the modified file.

## Contributing

If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.
