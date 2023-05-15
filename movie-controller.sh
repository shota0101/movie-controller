#!/bin/sh

filePath=`find m -type f -name "*.mp4" | peco`
echo "${filePath}"
echo "file:///Volumes/GoogleDrive/My%20Drive/c/i.html?path=${filePath}" | pbcopy

