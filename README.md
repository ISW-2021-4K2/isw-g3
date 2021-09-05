# isw-g3
## Estructura del repositorio
+ isw-g3
  + general
    + bibliografia
	+ material-para-parcial
	+ protocolos
  + practico
    + tp-numero-nombre
      + material-auxiliar
  + teorico
	+ presentaciones
	+ trabajos-conceptuales
      + tp-numero-nombre
	
## Listado de Items
|		Nombre del Ítem de Configuración		|					    Regla de Nombrado					   |          		    Ubicación Física					  |
|:---------------------------------------------:|:------------------------------------------------------------:|:--------------------------------------------------------:|
|				Trabajos prácticos				|				`ISW-G3-TP<numero>-<nombre>.pdf`			   |				   `./isw-g3/practico`					  |
|			   Trabajos conceptuales			|			`ISW-G3-TP<numero>-<nombre>.<extension>`		   |		`./isw-g3/teorico/trabajos-conceptuales`		  |
|			  Presentaciones teóricas			|				 `<año>-<numero>-<nombre>.pptx`				   |			`./isw-g3/teorico/presentaciones`			  |
|					  Libros					|				 `ISW-Bibliografia-<nombre>.pdf`			   |			 `./isw-g3/general/bibliografia`			  |
|		  Protocolo para rendir finales		    |`<año>_UTN_FRC_ING_SW_Protocolo_para_rendir_finales_en_forma_remota.pdf`|				`./isw-g3/general/protocolos`				|
|		 Protocolo para rendir parciales		|`<año>_UTN_FRC_ING_SW_Protocolo_para_rendir_parciales_en_forma_remota.pdf`|				`./isw-g3/general/protocolos`			  |
|				Modalidad académica				|			`UTN_FRC_Modalidad_Ing_SW_<año>.pdf`			   |					`./isw-g3/general`					  |
|			  Template para parcial			    |			 `ISW-template-<nombre>-<año>.docx`				   |		 `./isw-g3/general/material-para-parcial`		  |
|			 Link de clases grabadas			|					`ISW-clases-grabadas.txt`				   |		 `./isw-g3/general/material-para-parcial`		  |
| Herramientas para presentación de información	|		`Herramientas_para_presentación_de_Información.pdf`	   |		 `./isw-g3/general/material-para-parcial`		  |
|				Listado de libros				|		`Bibliografía_de_Ingeniería_de_Software_<año>.pdf`	   |			  `./isw-g3/general/bibliografia`			  |
|			Enunciados TP evaluables			|		 	`ISW_Enunciados_TP_evaluables_<año>.pdf`		   |					 `./isw-g3/practico`				  |
|			  Guia de TP resueltos				|	   `ISW_Guia_de_Trabajos_Practicos_Resueltos_<año>.pdf`    |					 `./isw-g3/practico`				  |
|		Lineamientos para TP conceptuales		|	    `ISW_Lineamientos_para_trabajos_teóricos_<año>.pdf`	   |		 `./isw-g3/teorico/trabajos-conceptuales`		  |
|				  Código fuente					|					  `<nombre>.<extension>`				   |`./isw-g3/practico/tp-<numero>-<nombre>/material-auxiliar`|
|  Diseño del repositorio, reglas de nombrado y definición de linea base|							`README.md`						   |						`./isw-g3`					  	  |

## Glosario
|         Sigla			|															  Significado															 |
|:---------------------:|:----------------------------------------------------------------------------------------------------------------------------------:|
| `<nombre>`  			| Nombre que identifica al ítem. Ej: “dinamica-manifiesto-agil”.																	 |
| `<numero>`			| Número que identifica al ítem. Ej: “01”. Formato numérico entero de dos cifras, en caso de ser una se completará con un `0` adelante.|
| `<nroParcial>`		| Número que identifica la unidad que representa al parcial. Ej: “1, 2”. Formato numérico entero de una cifra.						 |
| `<fecha>`				| Formato fecha dd/mm/aaaa.																											 |
| `<año>`				| Año que ubica en el tiempo al archivo. Ej “2021, 2020”.																			 |
| `<extension>`			| Nombre de la extensión del archivo definido como item. Ej: “.json, .py, .pptx, .pdf, .docx”.										 |

## Definición de Linea Base
Se definirá durante el día después de un parcial, en donde se incluirán todos los ítems que se encuentren en master. Esta se almacenará en la siguiente ruta https://github.com/ISW-2021-4K2/isw-g3/releases definida como `LineaBase<numero>-<fecha>`.