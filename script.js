var box = document.getElementById("box");

var x = 1;
function generujLosowaLiczbe() {
    // var x =  Math.floor(Math.random() * (10));



    x = x + 1;
    if (x%2 == 1) {
        box.innerHTML = "Kolejna Strona";
    }
    else if (x%2 == 0) {
        box.innerHTML = " <h1 class='title'>Tworzenie klas w c++.</h1><p class='text'> Okej, no więc w C++ tworzenie klas to taki sposób, żebyś mógł stworzyć swoje własne typy danych, czyli takie, jak int, double czy string, ale dostosowane do twoich potrzeb. Klasy pomagają w porządkowaniu kodu i umożliwiają tworzenie obiektów, które zachowują się jak te znanego typu. Wiesz, klasa to taki plan, projekt albo szablon, który mówi, jak ma wyglądać obiekt danej klasy. Wewnątrz klasy możesz określić, jakie dane (nazywane 'pola') i jakie funkcje (nazywane 'metodami') ma mieć twój obiekt. Na przykład, jeśli chciałbyś stworzyć klasę reprezentującą samochód, to byś wewnątrz klasy dodał takie rzeczy jak kolor, markę, rok produkcji jako pola. Potem możesz dodać metody, które pozwolą ci ustawiać te wartości lub je wypisywać. Teraz, kiedy masz już zdefiniowaną klasę, możesz tworzyć obiekty na jej podstawie. To jest jak tworzenie konkretnego samochodu na podstawie projektu. Tworzenie obiektu wygląda mniej więcej tak:    </p><center><img class='image' src='code.png' alt='Some code'></center> <p class='text'> Teraz masz swój własny samochód w kodzie, który jest reprezentowany przez obiekt klasy Samochod. Możesz używać metod, żeby zmieniać jego właściwości albo coś z nim robić. Klasy to super narzędzie w C++, które pomaga w organizowaniu kodu i pozwala tworzyć obiekty, które odzwierciedlają rzeczywiste obiekty z rzeczywistego świata.</p>";
    }

}

