!!! COPIE AS SEGUINTES LINHAS DE COMANDO, COLE E EXECUTE NO TERMINAL !!!

mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
npm -g install expo-cli --global
export PATH=$PATH:~/.npm-global/bin


!!! CASO FECHE O TERMINAL, AO REABRIR-LO RODE A SEGUINTE LINHA DE COMANDO !!!

export PATH=$PATH:~/.npm-global/bin


npm install native-base ---save
npm install @expo/vector-icons --save

npm install -save react-navigation
