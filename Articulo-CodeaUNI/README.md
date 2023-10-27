# CREAR UN ARTÍCULO EN LATEX Y PUBLICARLO EN CODEAUNI

Para mayor comodidad a la hora de crear un artículo para la plataforma de [CODEa UNI](https://www.codeauni.com/) he preferido usar [LaTeX](https://www.latex-project.org/) y [Vim](https://www.vim.org/).

<!--[![](.img/1.png)](https://www.codeauni.com/inicio/)-->

## ARCHIVOS NECESARIOS

```sh
 __ codeauni.tex
|__ convertirFormato.js
|__ img
|   |__ 1.png
|__ template.html
```

## FORMATO DEL ARTÍCULO EN LATEX (codeauni.tex)

1. Títulos

    ```tex
    \section{TÍTULO}
    ```

    ![](.img/2.png)

2. Subtítulos

    ```tex
    \subsection{SUBTÍTULO}
    ```

    ![](.img/3.png)

3. Subsubtítulos

    ```tex
    \subsubsection{SUBSUBTÍTULO}
    ```

    ![](.img/37.png)

4. Texto

    ```tex
    El texto lo escribes simplemente así.

    Así escribes otro párrafo.
    ```

    ![](.img/38.png)

5. Imágenes

    ```tex
    \begin{figure}[h]
        \centering
        \includegraphics[width=0.7\textwidth]{img/1.png}
        \caption{descripcion}
    \end{figure}
    ```

    ![](.img/4.png)

6. Código

    ```tex
    \begin{lstlisting}[style=PythonStyle]
    #codigo python
    for i in range(1, 10):
        print(f"Hola Mundo {i}")
    \end{lstlisting}
    ```

    ![](.img/5.png)

7. Tabla

    ```tex
    \begin{table}[htbp]
        \begin{center}
            \caption{Geox 8}
            \begin{tabular}{|c|c|}
                \hline
                \textbf{Autonomía} & \textbf{Velocidad}\\
                \hline
                25 minutos & 100 Km/h\\
                \hline
            \end{tabular}
        \end{center}
    \end{table}
    ```

    ![](.img/6.png)

8. Video

    ```tex
    \begin{center}
        \href{https://www.youtube.com/watch?v=Px4GHgnrj1A}{DescripcionVideo}
    \end{center}
    ```

    ![](.img/7.png)

9. Conclusiones

    ```tex
    \section*{CONCLUSIONES}
    \begin{enumerate}
        \item conclusión uno.
        \item conclusión dos.
    \end{enumerate}
    ```

    ![](.img/8.png)

10. Referencias

    ```tex
    \section*{REFERENCIAS}
    \begin{enumerate}
        \item \href{www.google.com}{google}
        \item \href{www.facebook.com}{facebook}
    \end{enumerate}
    ```

    ![](.img/9.png)

## CONVERTIR LATEX A FORMATO HTML DE LA PLATAFORMA CODEa UNI

1. Convertimos el código LaTeX a código html.

    ```sh
    $ pandoc -s codeauni.tex --number-sections --template=template.html -o codigo.html
    ```

2. Se obtiene el archivo `codigo.html`, necesitamos abrirlo con un navegador.

    ```sh
    $ google-chrome codigo.html
    ```

    ![](.img/10.png)

3. Automáticamente se va a descargar `paginaModificada.html`, el contenido de este archivo html es lo que queremos y el cual vamos a copiar en la plataforma de CODEa UNI.  
Lo abrimos con un navegador si queremos ver el resultado final.

    ```sh
    $ google-chrome paginaModificada.html
    ```

## PUBLICAR ARTÍCULO EN LA PLATAFORMA DE CODEa UNI

1. En la plataforma de Codea UNI ingresar a tu cuenta de usuario.

    ![](.img/12.png)

2. Vamos a administrar publicaciones

    ![](.img/13.png)

3. Creamos una publicación

    ![](.img/14.png)

4. Clic para habilitar la fuente html

    ![](.img/16.png)

5. Pegamos el contenido del archivo  `paginaModificada.html`.

    ![](.img/17.png)

6. Volvemos a dar clic en `Fuente HTML` para ver el resultado.

    ![](.img/21.png)

7. Doble clic en la imagen

    ![](.img/22.png)

8. Aparece el nombre de la imagen, tenerlo presente porque ese es el nombre de la imagen que subiremos a la plataforma.

    ![](.img/23.png)

9. Clic en cargar y seleccionamos la imagen

    ![](.img/24.png)
    ![](.img/25.png)

10. Clic en **Enviar al Servidor**

    ![](.img/30.png)

11. En anchura y altura seleccionamos 70%

    ![](.img/31.png)

12. Ahora se puede observar la imagen cargada

    ![](.img/32.png)

13. Colocar un título

    ![](.img/33.png)

14. Completamos los demás campos y clic en guardar

    ![](.img/34.png)
    ![](.img/35.png)

15. Si queremos ya podemos publicarlo

    ![](.img/36.png)
