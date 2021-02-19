#!/bin/bash

cd "${HOME}/private/git/movie-controller"
mkdir -p ./movies/list/3
mkdir -p ./movies/current

files="./movies/list/3/*.mp4"
for filePath in ${files}; do
    echo "${filePath}"
    mv "${filePath}" ./movies/current/movie3.mp4
    break
done

