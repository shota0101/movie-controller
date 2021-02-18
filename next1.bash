#!/bin/bash

cd "${HOME}/private/git/movie-controller"
mkdir -p ./movies/list/1
mkdir -p ./movies/current

files="./movies/list/1/*.mp4"
for filePath in ${files}; do
    echo "${filePath}"
    mv "${filePath}" ./movies/current/movie1.mp4
    break
done

open -b com.JadenGeller.Helium

