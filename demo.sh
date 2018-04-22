if [ -d $1 ]; then
  echo 'error: dir exits'
  exit 1
else 
  mkdir $1
  cd $1
  mkdir css js
  touch index.html css/style.css js/main.js
  echo 'success'
  echo "<!DOCTYPE>" >> index.html
  echo "<title>Hello</title>" >> index.html
  echo "<h1>Hi</hi>" >> index.html
  echo "h1{color: red;}" >> css/style.css
  echo "var string = "Hello World"" >> js/main.js
  echo "alert(string)" >> js/main.js
  exit 0
fi
