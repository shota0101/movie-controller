#!/bin/bash

files="./movies/*.mp4"
for filePath in ${files}; do
    mv "${filePath}" movie.mp4
    break
done

open -b com.JadenGeller.Helium

