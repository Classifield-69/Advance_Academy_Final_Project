// Зареждане на книги при зареждане на сайта
document.addEventListener('DOMContentLoaded', function() {
  loadBooks();
});

// Бутон "btn-try", функция при натискането му да ни изпраща директно към "Случайните книги"
function goToRandomBooks() {
  document.getElementById('product').scrollIntoView({ behavior: 'smooth' });
}

// Форма проверка
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  if (validateForm()) {
    alert('Формата е изпратена успешно!');
    this.reset();
  }
});