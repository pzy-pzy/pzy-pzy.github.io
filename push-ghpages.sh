#npm run build

cd docs/.vuepress/dist

echo 'panzey.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/pzy-pzy/pzy-pzy.github.io.git master:gh-pages

rm -rf .git

cd -