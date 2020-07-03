# LaTeX
LaTeX es un sistema de composición de textos, orientado a la creación de documentos escritos que presenten una alta calidad tipográfica. Por sus características y posibilidades, es usado de forma especialmente intensa en la generación de artículos y libros científicos que incluyen, entre otros elementos, expresiones matemáticas.  
![](.img/1.png)  
## Instalación  
1. TexLive  
	1. Principales
		* texlive-base (136  MB aprox.)  
			```
			$ sudo apt install texlive-base
			```
		* texlive-latex-recommended (177  MB aprox.)  
			```
			$ sudo apt install texlive-latex-recommended
			```
		* texlive (240  MB aprox.)  
			```
			$ sudo apt install texlive
			```
		* texlive-latex-extra (404  MB aprox.)  
			```
			$ sudo apt install texlive-latex-extra
			```
		* texlive-full (4714 MB aprox.)  
			```
			$ sudo apt install texlive-full
			```
	2. Para objetivo específico segun profesión  
		* texlive-publishers
			```
			$ sudo apt install texlive-publishers
			```
		* texlive-science
			```
			$ sudo apt install texlive-science
			```
		* texlive-pstricks
			```
			$ sudo apt install texlive-pstricks 
			```
		* texlive-pictures
			```
			$ sudo apt install texlive-pictures
			```
## Archivos Auxiliares  
1. eps	: Archivo para incluir gráficos
	1. Convertir .eps a .pdf
		```
		$ epstopdf grafico.eps
		```
2. aux	: Gestiona las referencias cruzadas(\ref) y citas bibliograficas(\cite)
3. log	: Guarda errores, paquetes usados y su version.
4. synctex:Sincroniza codigo fuente con documento de salida en el IDE.
5. toc,lof,lot: Crear indice, lista de figuras, lista de tablas
6. out	: Lo genera hyperref, crea los enlaces que nos llevan de un lado a otro en el pdf.
7. bbl	: Es el archivo de bibliografia creado por BibTeX
8. listofsymbols: Crea un .sub y .sym para gestionar subindices y simbolos respectivamente
9. snm	: Ayuda en el proceso de insertar imagenes en el tipo article
10. nav	: Sirve para crear la barra de navegacion en la presentacion
## Comandos comunues  
1. Ver la versión
	```
	$ tex --version
	```
2. Compilar  
	1. latex
		```
		$ latex sample2e.tex
		```
	2. lualatex: reconoce mas codificación de caracteres
		```
		$ lualatex archivo.tex
		```
3. Previsualizar el archivo
	```
	$ xdvi sample2e.dvi	(Unix)
	$ dviout sample2e.dvi	(Windows)
	```
4. DVI a PNG
	```
	$ dvipng archivo.dvi
	```
5. Crear PostScript para imprimir o visualizar en pantalla
	```
	$ dvips sample2e.dvi -o sample2e.ps
	```
6. Create PDF en lugar de DVI (No se borra el archivo .dvi)
	```
	$ pdflatex sample2e.tex
	```
7. Convertir PDF a PNG
	```
	$ convert -density 300 equation.pdf -quality 95 equation.png
	```
8. Previsualizar PDF (Usar cualquiera. No son parte de latex)
	```
	$ gv sample2e.pdf
	$ xpdf sample2e.pdf
	$ evince sample2e.pdf
	```
9. Si tienes instalado el package xetex, tu puedes test acceso para la fuente del sistema
	```
	$ xetex opentype-info.tex
	```
## Hola mundo  
```
\documentclass[12pt,a4paper]{article}
\author{Chupetín Trujillo}
\title{Este es el titulo}
\date{2 de julio del 2020}
%Comentario
\begin{document}
\maketitle
 Este e el primer comentario en \LaTeX
\end{document}
```
![](.img/2.png)  
