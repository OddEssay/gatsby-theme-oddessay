#/bin/bash

echo "🔮 Sync files from theme where we want local duplicates"

echo "👀 Copying to working directory $INIT_CWD"

echo "🛠 Copy tailwind.config.js"
cp tailwind.config.js $INIT_CWD/tailwind.config.js

echo "🛠 Copy LICENSE"
cp LICENSE $INIT_CWD/LICENSE

echo "🛠 Copy .prettierrc"
cp .prettierrc $INIT_CWD/.prettierrc

echo "🛠 Copy tsconfig.json"
cp tsconfig.json $INIT_CWD/tsconfig.json

echo "🛠 Copy tslint.json"
cp tslint.json $INIT_CWD/tslint.json