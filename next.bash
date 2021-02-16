#!/bin/bash

cd "${HOME}/private/git/movie-controller"

files="./movies/*.mp4"
for filePath in ${files}; do
    echo "${filePath}"
    mv "${filePath}" movie.mp4
    break
done

open -b com.JadenGeller.Helium

