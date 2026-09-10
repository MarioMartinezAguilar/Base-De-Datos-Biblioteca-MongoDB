 :: echo off-> hace que la consola se vea limpia y solo muestre mis echos
@echo off
echo =============================================
echo   INICIANDO RESPALDO AUTOMATICO A LA NUBE
echo =============================================

echo [1/2] Generando respaldo comprimido con mongodump...
mongodump --db Biblioteca --gzip --archive="./respaldo_biblioteca.gz"

echo [2/2] Subiendo archivo comprimido a BackBlaze B2...
b2 file upload Biblioteca-Mongo "./respaldo_biblioteca.gz" "respaldo_automatizado.gz"

echo ==============================================
echo  RESPALDO COMPLETADO CON EXITO!
echo ==============================================
pause

:: pause deja la ventana de la terminal abierta y cerrarla con cualquier tecla