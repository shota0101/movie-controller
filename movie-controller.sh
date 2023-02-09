#!/bin/sh

temp=${HOME}/temp-movie-controller.txt
ls *.mov > $temp 2> /dev/null
ls *.mp4 >> $temp 2> /dev/null
fileName=`cat $temp | peco`
echo "${fileName}"
# echo "file:///Users/lin/Documents/movie-controller/movie-controller.html?path=${fileName}" | pbcopy
echo "file:///Volumes/GoogleDrive/My%20Drive/air/movie-controller/movie-controller.html?path=${fileName}" | pbcopy
rm $temp

