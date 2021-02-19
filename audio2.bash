#!/bin/bash

cd "${HOME}/private/git/movie-controller"
mkdir -p ./audio/list/2
mkdir -p ./audio/current

files="./audio/list/2/*.mp3"
for filePath in ${files}; do
    echo "${filePath}"
    mv "${filePath}" ./audio/current/audio2.mp3
    break
done

