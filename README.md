MovieKa — Movie Review Platform

MovieKa is a modern, user-friendly platform that allows users to read and submit movie reviews, view ratings,
and watch trailers. Built as a final web development project, it focuses on dynamic interaction, modularity, and usability.
    Features
User registration and login system
Leave and view movie reviews with ratings (stored in `localStorage`)
Modal window with embedded movie trailers
Average movie rating calculation and display
Admin panel for managing user review
Integration with external YouTube API (for trailers)
Responsive layout using Bootstrap
Input validation (e.g., email check on registration)


Основные компоненты:
	1.	Заголовок сайта и подзаголовок:
	MovieKa — название проекта.
	Подзаголовок
	2.	Навигационное меню (navbar):
	 	Кнопки перехода:
	Home,Top Rated,Trending,Reviews, Login/Register
		Адаптивно оформлено с помощью Bootstrap.
	3.	Секция фильмов (.movie-card):
	Карточки фильмов отображаются в виде блоков с:
Обложкой фильма (картинка)
	Названием и годом выпуска
  Видео-ссылкой в data-video ( YouTube)
	При клике на обложку фильма:
	Открывается модальное окно, в котором встраивается трейлер фильма.
	4.	Модальное окно (#movieModal):
		Bootstrap Modal
		Включает заголовок видео (<iframe>)
	5.	Стилизация:
  style.css и Bootstrap
	6.	JS-функциональность (home.js):
    1) открытия трейлеров при клике на изображение фильма
	  2)Отображает трейлер в модальном окне
	  3)Автоматически останавливает видео при закрытии окна
	7.	Футер:
	 2025 MovieKa. Kadessova    <footer>  </footer>

  <header>
Отображает заголовок сайта и слоган MovieKa
<nav>
Навигационное меню со ссылками на страницы сайта
<ul>, <li>, <a>
Структурируют пункты меню навигации
<section class="about">
Вводный блок для страницы Top Rated
<main>
Основной контент страницы с карточками фильмов
<article class="movie-card">
Карточка одного фильма (обложка + описание)
<img>
Отображает постер фильма, содержит data-video для модального окна
<h3>, <p>, <strong>
Отображают текстовую информацию о фильме
<div class="modal fade">
Bootstrap-модальное окно для показа видео
 Подключенные скрипты
•Bootstrap.bundle.js — для модального окна.
•toprated.js — содержит JS-обработчик для открытия модального окна и воспроизведения видео.

Modal Video Preview
•Реализован Bootstrap Modal:
•Открывается при нажатии на изображение фильма.
•Воспроизводит трейлер через <video> с src из data-video.
