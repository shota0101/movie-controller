#!/bin/sh

ls *.mov > temp.txt
ls *.mp4 >> temp.txt
fileName=`cat temp.txt | peco`
echo "file:///Users/lin/Documents/movie-controller.html?path=${fileName}"
echo "file:///Users/lin/Documents/movie-controller/movie-controller.html?path=${fileName}" | pbcopy
rm temp.txt

