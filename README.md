# soccer_mgt_app

## Install Node.js, npm and Ionic
Before proceeding, make sure the latest version of Node.js (https://nodejs.org/en/), npm (https://www.npmjs.com/) and Ionic (npm install -g ionic) are installed on your machine.

Please see "https://ionicframework.com/docs/installation/cli" for more detailed information on environment setup.

## Cloning the Repository
From your command line terminal, navigate to directory where you want to clone this project. Run the command "git clone https://github.com/cs506-soccer-mgt-app/soccer_mgt_app.git". Then, "cd" into the project directory. Run "npm install" to install the project dependencies.

## Building the Application
In the project directory, run "ionic serve", which will launch a browser and load the application locally.

## Running the Tests
#### Unit Tests
In the project directory, run "npm test", which will launch a browser and automatically run the unit tests.

#### E2E Tests
In the project directory, run "npm run e2e", which will launch a browser and automatically run end-to-end tests.
#### NOTE!!!!
We have encountered an issue with certain computers failing the tests for no reason while they pass on others. Our best guess after looking into the failures for a while is that the cpu on certain machines isn't giving enough time to the tests causing them to fail after a timeout. This only seems to happen with window machines. Our advice would be to only have the tests running without any other processes on your machine. To see the tests passing on one of our macs, you can check out README_E2ETest_SCREENSHOT.png in the project directory
