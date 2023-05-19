#!/bin/sh

findResult="${HOME}/program-temp/single-movie.txt"

function updateFindResult() {
    if [ "$(find $findResult -mmin -10 | wc -l)" -eq 0 ]; then
	echo '10分以上経過してるのでfindコマンドを再実行'
	find s -type d | sort > "${findResult}.temp"
	mv "${findResult}.temp" $findResult
	echo "$findResult を更新完了"
    fi
}

updateFindResult &

filePath=`cat $findResult | peco`

echo "${filePath}"
echo "file:///Volumes/GoogleDrive/My%20Drive/c/i.html?path=${filePath}" | pbcopy

