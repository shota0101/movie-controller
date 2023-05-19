#!/bin/sh

findResult="${HOME}/program-temp/series-movie.txt"
next='next.txt'

function updateFindResult() {
    if [ "$(find $findResult -mmin -10 | wc -l)" -eq 0 ]; then
	echo '10分以上経過してるのでfindコマンドを再実行'
	find s -type d | sort > "${findResult}.temp"
	mv "${findResult}.temp" $findResult
	echo "$findResult を更新完了"
    fi
}

updateFindResult &

# TODO: ディレクトリ多すぎる問題
# emacsclient $findResult
less $findResult
directory=`cat $findResult | peco`

cd "$directory"

# nextファイルが存在しない場合は初期化
if [ ! -e $next ]; then
    for file in $(ls *.mp4); do
	echo $file > $next
	break
    done
fi

fileName=`ls * | sort | peco`

if [ $fileName == $next ]; then
    filePath="${directory}/`cat $next`"

    # 次のファイルを探す
    isCurrentFileFound='false'
    isNextFileExists='false'
    for file in $(ls *.mp4); do
	if [ $file == `cat $next` ]; then
	    isCurrentFileFound='true'
	    continue
	fi
	if [ $isCurrentFileFound == 'true' ]; then
	    # 次のファイル名を記録
	    echo "次のファイル : $file"
	    isNextFileExists='true'
	    echo $file > $next
	    break
	fi
    done
    
    # 最後のファイルの場合は最初に戻る
    if [ $isNextFileExists == 'false' ]; then
	echo '観了'
	touch movie-controller.check
	rm $next
    fi
else
    filePath="${directory}/$fileName"
fi

echo "file:///Volumes/GoogleDrive/My%20Drive/c/i.html?path=${filePath}" | pbcopy
echo "${filePath}"

