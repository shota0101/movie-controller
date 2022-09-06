#!/bin/sh

ls *.mov > temp.txt 2> /dev/null
ls *.mp4 >> temp.txt 2> /dev/null
fileName=`cat temp.txt | peco`
echo "${fileName}"
echo "file:///Users/lin/Documents/movie-controller/movie-controller.html?path=${fileName}" | pbcopy
rm temp.txt

