install Node.js

npm install -g typescript@1.9.0-dev.20160409 // 1
npm install -g angular-cli@1.0.0-beta.11-webpack.8 // 2

install Homebrew // 3
brew install watchman // 4

/*
1. install TypeScript
2. install angular-cli, a utility. 
    It allows you to create and manage projects from the command line.
    So you can use the `ng` command.
3. Homebrew
4. This command is needed on OSX.
    If on Windows, no need to install this: angular cli will use the native Node.js watcher.
    Watchman. A tool. 
    It helps angular-cli when it needs to monitor files on your filesystem for changes.
*/