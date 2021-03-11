#!/bin/bash

cd "${HOME}/private/git/movie-controller"
mkdir -p ./movies/list/mov1
mkdir -p ./movies/current

files="./movies/list/mov1/*.mov"
for filePath in ${files}; do
    echo "${filePath}"
    mv "${filePath}" ./movies/current/movie1.mov
    break
done

