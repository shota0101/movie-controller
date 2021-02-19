#!/bin/bash

cd "${HOME}/private/git/movie-controller"
mkdir -p ./audio/list/1
mkdir -p ./audio/current

files="./audio/list/1/*.mp3"
for filePath in ${files}; do
    echo "${filePath}"
    mv "${filePath}" ./audio/current/audio1.mp3
    break
done

