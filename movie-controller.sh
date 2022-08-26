#!/bin/sh

fileName=`ls *.mp4 | peco`
echo "file:///Users/lin/Documents/movie-controller.html?path=${fileName}"
echo "file:///Users/lin/Documents/movie-controller/movie-controller.html?path=${fileName}" | pbcopy

