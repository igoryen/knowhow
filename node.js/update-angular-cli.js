rm -rf node_modules dist tmp
npm uninstall -g angular-cli
npm cache clean
npm install -g angular-cli@latest
ng init // update project's configuration files