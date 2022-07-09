# short-linker
Basic URL Shortener App

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/be04af8e5e9a4fd0ac4b6ab826ca610f)](https://www.codacy.com/gh/RichardUG/short-linker/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=RichardUG/short-linker&amp;utm_campaign=Badge_Grade)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/RichardUG/short-linker/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/RichardUG/short-linker/tree/main)


# Introducción a metodologías “DevSecOps y SRE” para el diseño y operación de sistemas modernos. 
	  								

## Contenido: 🗂️ 

* [Introducción](#Introducción)
* [Requisitos de instalación](#Requisitos)
* [Tener en cuenta](#Consideraciones)
* [Arquitectura del proyecto](#Arquitectura)
* [Metodología de trabajo](#metodología)
* [Redirección](#redirección)
* [Colaboración](https://github.com/develalopez/short-linker/blob/main/instructivos/Colaboracion.md)


<a name="Introducción"></a>
## Introducción: ℹ️ 
Este proyecto explica x cosas 

<a name="Requisitos"></a>
## Requisitos de instalación: 📘

El código necesita que:

	1. Paso 1.
	2. Paso 2.
	3. Paso 3.

<a name="Consideraciones"></a>
## Tener en cuenta ❗

<a name="Arquitectura"></a>
## Arquitectura del proyecto 🛠 

<a name="metodología"></a>
## Metodología de trabajo 

### Solicitar acceso

Para colaborar en este proyecto, [envía un correo a Daniel Vela](mailto:de.vela.lopez@gmail.com) con tu nombre de usuario de GitHub solicitando acceso como colaborador en el repositorio. Puede que creemos una organización en el futuro.

### Firma de commits

Para que los Pull Request sean aprobados, es necesario firmar todos los commits usando una llave GPG. A continuación se detallarán los pasos a seguir par generar una nueva llave GPG y usarla para firmar los commits:

#### Generando una nueva llave GPG

Ejecuta alguno de los dos siguientes comandos de GPG, en función de la versión de la herramienta que tengas instalada:

```bash
# Si la versión es mayor o igual a 2.1.17

$ gpg --full-generate-key
```

``` bash
# Si la versión es menor a 2.1.17

$ gpg --default-new-key --algo rsa4096 --gen-key
```

Al momento de configurar la llave usando el primer comando, debes tener en cuenta que debe crearse usando RSA y debe tener un tamaño de 4096 bits. Esta configuración no es necesaria en caso de usar el segundo comando.

Al momento de insertar el correo electrónico, este debe concordar con el correo electrónico de tu cuenta de GitHub.

Recuerda definir una contraseña segura.

#### Usando la nueva llave para firmar commits

Se deben hacer dos cosas para que los commits queden firmados y correctamente validados en el repositorio: añadir la llave GPG a la cuenta de GitHub y configurarla para que firme los commits en el ambiente de desarrollo. Para hacer estas dos cosas, sigue los siguientes pasos:

1. Usa el comando `gpg --list-secret-keys --key-id-format long` para obtener la información requerida sobre la llave privada:

```bash
$ gpg --list-secret-keys --key-id-format long
/Users/hubot/.gnupg/secring.gpg
------------------------------------
sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
uid                          Hubot 
ssb   4096R/42B317FD4BA89E7A 2016-03-10
```

En este caso la información que nos interesa es `3AA5C34371567BD2`. Anótala en un lugar de fácil acceso temporalmente.

2. Añade la configuración para que `git` use la nueva llave a la hora de firmar commits, además de la información base:

```bash
$ git config --global user.name "Tu Nombre"
$ got config --global user.email tucorreo@ejemplo.com
$ git config --global user.signingkey 3AA5C34371567BD2
```

3. Exporta la llave GPG en forma de texto y cópiala:

```bash
$ gpg --armor --export 3AA5C34371567BD2
# Prints the GPG key ID, in ASCII armor format
```

Debes copiar el texto resultante, empezando con `-----BEGIN PGP PUBLIC KEY BLOCK-----` y terminando con `-----END PGP PUBLIC KEY BLOCK-----`

4. Sigue [este instructivo](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account) para agregar la llave que copiaste a tu cuenta de GitHub.

#### Firmando los commits

Para firmar un commit usando la nueva llave GPG, usa la bandera `-S`, así:

```bash
$ git commit -S -m "Commit example"
```


<a name="redirección"></a>
## Redirección 


### Autores  👨‍🦱 👨‍🦱 👨‍🦱 👨‍🦱 👨‍🦱 🙍‍♀️
  acá comentar los autores
