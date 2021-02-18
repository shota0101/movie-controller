#!/bin/bash

cd "${HOME}/private/git/movie-controller"
mkdir -p ./audio/list

files="./audio/list/*.mp3"
for filePath in ${files}; do
    echo "${filePath}"
    mv "${filePath}" ./audio/current.mp3
    break
done

