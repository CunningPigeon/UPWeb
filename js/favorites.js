function AddToBookmark(a)
{
   var title = window.document.title; // запоминаем заголовок активной страницы/вкладки
   var url = window.document.location; // адрес тоже запоминаем
 
   if (window.sidebar) {  // такой объект есть только в Gecko
      window.sidebar.addPanel(title, url, ""); // используем его метод добавления закладки
   }
   else if (typeof(opera)=="object") {  // есть объект opera?
      a.rel="sidebar"; // добавлем закладку, смотрите вызов функции ниже
      a.title=title;
      a.url=url;
      return true;
   }
   else if(document.all) {  // ну значит это Internet Explorer
      window.external.AddFavorite(url, title); // используем соответсвующий метод
   }
   else {
      alert("Для добавления страницы в Избранное нажмите Ctrl+D"); // для всех остальных браузеров, в т.ч. Chrome
   }
 
   return false;
}