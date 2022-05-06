npm run build

git add -A
git commit -m 'deploy'

git push -f https://github.com/pzy-pzy/pzy-pzy.github.io.git master

source push-ghpages.sh