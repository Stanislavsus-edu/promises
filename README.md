# Promises

[![Build status](https://ci.appveyor.com/api/projects/status/gcby607i2sjhwvmi?svg=true)](https://ci.appveyor.com/project/Stanislavsus-edu/promises)

**Легенда**

JavaScript живёт в асинхронном мире и большинство операций в нём так же выполняются асинхронно. Вы реализовали возможность экспорта сохранённого прогресса игры в виде JSON. Теперь нужно реализовать загрузку из файла.

**Описание**

Для вас реализованы функции-заглушки, которая эмулируют чтение файла и преобразование прочитанного в json. Ваша задача - реализовать класс ```GameSavingLoader``` с методом ```load```, который загружает данные (с помощью функции ```read```), парсит их (с помощью функции ```json()```) и создаёт объект типа ```GameSaving```.
