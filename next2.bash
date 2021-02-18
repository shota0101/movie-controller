#!/bin/bash

cd "${HOME}/private/git/movie-controller"
mkdir -p ./movies/list/2
mkdir -p ./movies/current

files="./movies/list/2/*.mp4"
for filePath in ${files}; do
    echo "${filePath}"
    mv "${filePath}" ./movies/current/movie2.mp4
    break
done

