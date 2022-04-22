@echo off

SET SOME_VAR=c:\cygwin\path
DEL /S %SOME_VAR% || echo "file not found"
COPY  c:\some\file \to\another\file
IF %SOME_VAR% == "" (
  echo "SOME_VAR is empty"
) ELSE (
  echo "SOME_VAR not empty"
)
CALL :my_function
CALL :my_function "some param"

EXIT /B %ERRORLEVEL%

:my_function
echo "hello from my_function: %~1"
EXIT /B 0