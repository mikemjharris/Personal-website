#!/bin/bash

echo 'Getting blog files '
ls ./blog -1 | grep report | sed -E 's/.*/<li><a href=".|||blog|||&">&<|||a><|||li>/' | tr --delete '\n'  > /tmp/blog.txt

sed -n "/BLOG HISTORY START/{p;:a;N;/BLOG HISTORY END/!ba;s/.*\n/$(cat /tmp/blog.txt)\n/};p" ./index.html > /tmp/index.html

cat /tmp/index.html | sed -E 's/\|\|\|/\//g'  > ./index.html 

echo 'Getting website files '
ls ./website -1 | grep report | sed -E 's/.*/<li><a href=".|||website|||&">&<|||a><|||li>/' | tr --delete '\n'  > /tmp/website.txt

sed -n "/WEBSITE HISTORY START/{p;:a;N;/WEBSITE HISTORY END/!ba;s/.*\n/$(cat /tmp/website.txt)\n/};p" ./index.html > /tmp/index.html

cat /tmp/index.html | sed -E 's/\|\|\|/\//g'  > ./index.html 

echo 'Finished'
