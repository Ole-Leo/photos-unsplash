## Приложение для поиска фото

С помощью поисковой строки вводится запрос (на англ.) и после нажатия на Enter генерируются фото с ресурса Unsplash (до 30 фото).
При клике на любую из картинок она устанавливается фоном на странице приложения.

![image](https://user-images.githubusercontent.com/95646471/217894877-e15af357-db81-4d3d-9aad-40c1389a29e8.png)

### Технологии

React, Typescript, CSS

В приложении использовался пакет для создания альбома фотографий [React Photo Album](https://www.npmjs.com/package/react-photo-album)

### Установка и запуск приложения

Для установки приложения необходисо клонировать репозиторий

```
https://github.com/Ole-Leo/photos-unsplash.git
```

Установить зависимости

```
npm i
```

Запустить проект

```
npm start
```

Для корректной работы приложения необходимо иметь API-key сервиса [Unsplash](https://unsplash.com/). Получить свой ключ можно [здесь](https://unsplash.com/developers)
Полученный API-key необходимо записать в поле 'REACT_APP_UNSPLASH_API_KEY=' в файле env.example и переименовать данный файл в .env
