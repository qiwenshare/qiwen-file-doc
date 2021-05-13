# 切换到网盘前端目录下
cd ~/workspace/qiwen-file
# 清空文件（若不存在会创建该文件）
: > log.md
# 写入
echo " " > log.md
# 写入日志文件
print_log()
{
  # 获取年份
  nowYear=$(date +%Y)
  # 获取月份
  nowMonth=$(date +%m)
  # 起始年份
  year=2019
  # 年份循环
  while [ ${year} -le ${nowYear} ];
  do
    # 月份循环
    for month in 1 2 3 4 5 6 7 8 9 10 11 12
    do
      # 判断年月 是否大于 当前年月
      if [ ${nowYear} -eq ${year} -a ${month} -gt ${nowMonth} ];
      then
        break
      fi
      # 获取当月天数
      get_days_in_month ${year} ${month}
    done
    # 写入年份
    sed -i "1i ## ${year} 年\n" log.md
    let year=year+1
  done
}
# 获取当月天数
get_days_in_month()
{
  year=${1}
  month=${2}
  day=0
  case ${month} in
    # 1 3 5 7 8 10 12 月份的天数
    1|3|5|7|8|10|12) 
      day=31
      ;;
    # 4 6 9 11 月份的天数
    4|6|9|11) 
      day=30
      ;;
    # 2 月份的天数
    2)
      if [ `expr ${year} % 4` -eq 0 ];
      then
        if [ `expr ${year} % 400` -eq 0 ];
        then
          day=29;
        elif [ `expr ${year} % 100` -eq 0 ];
        then
          day=28;
        else
          day=29
        fi
      else
       day=28
      fi
      ;;
  esac
  add_delete_log ${year} ${month} ${day}
}
# 追加日志到 backend.md 文件中 并删除日志文件
add_delete_log()
{
  year=${1}
  month=${2}
  day=${3}
  # 追加日志
  git log --after="${year}-${month}-01" --before="${year}-${month}-${day}" --pretty=format:'- %s（[%h](https://gitee.com/qiwen-cloud/qiwen-file/commit/%H)）%n' --no-merges > ${year}-${month}.md
  # 判断文件是否为空
  if [ -s ${year}-${month}.md ]
  then
    # 追加日志到 log.md 中
    cat ${year}-${month}.md >> log.md
    # 写入月份
    sed -i "1i ### ${year}-${month}\n" log.md
  fi
  # 删除日志文件
  rm ${year}-${month}.md
}
# 生成日志
print_log
# 添加标题
sed -i "1i # 前端更新日志\n" log.md
# 复制日志
cp log.md ~/workspace/qiwen-file-doc/docs/log/backend.md
# 删除日志文件
rm log.md
# 切回到 qiwen-file-doc 路径
cd ~/workspace/qiwen-file-doc