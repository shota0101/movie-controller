#!/bin/sh

findResult="${HOME}/program-temp/single-movie.txt"

filePath=`cat $findResult | peco`

if [ "$(find $findResult -mmin -10 | wc -l)" -eq 0 ]; then
    echo '10分以上経過してるのでfindコマンドを再実行'
    find m -type f -name "*.mp4" | sort > $findResult &
fi

echo "${filePath}"
echo "file:///Volumes/GoogleDrive/My%20Drive/c/i.html?path=${filePath}" | pbcopy

