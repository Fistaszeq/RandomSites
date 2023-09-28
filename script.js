var box = document.getElementById("box");

var x = 1;
function generujLosowaLiczbe() {
    
    if (x == 1) 
    {   // Tworzenie klas
    box.innerHTML = "<h1 class='title'>Tworzenie zmiennych w c++.</h1><p class='text'>&nbsp;W programowaniu zmienne to takie 'pudełka', w których możesz trzymać różne informacje. Możesz myśleć o nich jak o pojemnikach na dane. Te dane mogą być liczbami, tekstem, prawdą lub fałszem, albo czymkolwiek, czego potrzebujesz w swoim programie. W C++ mamy różne typy zmiennych, które mówią nam, jakiego rodzaju dane mogą być przechowywane w danym 'pudełku'. Oto kilka przykładów typów zmiennych w C++:<br><br><strong>int</strong>: To typ zmiennych używany do przechowywania liczb całkowitych. Na przykład:</p><center><img class='image' src='codecppp.png' alt='Some code'></center><p class='text'><strong>double</strong>: Ten typ jest używany do przechowywania liczb zmiennoprzecinkowych, czyli tych z kropką dziesiętną. Na przykład:</p><center><img class='image' src='doublecode.png' alt='Some code'></center><p class='text'><strong>string</strong>: To typ służy do przechowywania tekstów. Przykład:</p><center><img class='image' src='codeJan.png' alt='Some code'></center>   <p class='text'><strong>bool</strong>: Ten typ ma tylko dwie możliwe wartości: prawda (true) lub fałsz (false). To świetne do przechowywania informacji logicznych. Na przykład:</p><center><img class='image' src='boolcode.png' alt='Some code'></center>  <p class='text'><strong>char</strong>: Ten typ służy do przechowywania pojedynczych znaków. Na przykład:</p><center><img class='image' src='acode.png' alt='Some code'></center>  <p class='text'>Teraz, kiedy masz te 'pudełka' o różnych kształtach, możesz w nich trzymać różne rodzaje danych w zależności od potrzeb twojego programu. Dlatego zmienne są tak ważne w programowaniu - pozwalają nam przechowywać, manipulować i używać danych w naszych programach.</p>";
    }
    else if (x == 2) 
    {   //Tworzenie zmiennych
    box.innerHTML = " <h1 class='title'>Tworzenie klas w c++.</h1><p class='text'> Okej, no więc w C++ tworzenie klas to taki sposób, żebyś mógł stworzyć swoje własne typy danych, czyli takie, jak int, double czy string, ale dostosowane do twoich potrzeb. Klasy pomagają w porządkowaniu kodu i umożliwiają tworzenie obiektów, które zachowują się jak te znanego typu. Wiesz, klasa to taki plan, projekt albo szablon, który mówi, jak ma wyglądać obiekt danej klasy. Wewnątrz klasy możesz określić, jakie dane (nazywane 'pola') i jakie funkcje (nazywane 'metodami') ma mieć twój obiekt. Na przykład, jeśli chciałbyś stworzyć klasę reprezentującą samochód, to byś wewnątrz klasy dodał takie rzeczy jak kolor, markę, rok produkcji jako pola. Potem możesz dodać metody, które pozwolą ci ustawiać te wartości lub je wypisywać. Teraz, kiedy masz już zdefiniowaną klasę, możesz tworzyć obiekty na jej podstawie. To jest jak tworzenie konkretnego samochodu na podstawie projektu. Tworzenie obiektu wygląda mniej więcej tak:    </p><center><img class='image' src='code.png' alt='Some code'></center> <p class='text'> Teraz masz swój własny samochód w kodzie, który jest reprezentowany przez obiekt klasy Samochod. Możesz używać metod, żeby zmieniać jego właściwości albo coś z nim robić. Klasy to super narzędzie w C++, które pomaga w organizowaniu kodu i pozwala tworzyć obiekty, które odzwierciedlają rzeczywiste obiekty z rzeczywistego świata.</p>";
    }
    else if (x == 3)
    {   //Tworzenie tablic
        box.innerHTML = "<div id='box'><h1 class='title'>Tworzenie tablic C++.</h1><p class='text'>Okej, teraz porozmawiamy o tablicach w programowaniu, także użyję przykładów w C++.Tablica to taki sposób na przechowywanie wielu danych tego samego typu w jednym miejscu. Możesz myśleć o niej jak o pudełku z numerowanymi przegródkami, gdzie każda przegródka zawiera jedną daną.<h2>W C++ deklaracja tablicy wygląda tak:</h2><br></p><center><img class='image' src='tablica1.png' alt='Some code'></center><p class='text'><strong>'typ_danych'</strong> to typ danych, które będą przechowywane w tablicy, na przykład int, double, string<strong>'nazwa_tablicy'</strong> to nazwa, którą nadajesz tablicy.<strong>'rozmiar'</strong> to liczba, która określa ile elementów może pomieścić tablica.Oto kilka przykładów:</p><h2>Tablica liczb całkowitych:</h2><center><img class='image' src='tablicaint.png' alt='Some code'></center><p class='text'>Teraz możesz przechowywać pięć liczb całkowitych w tablicy liczby<h2>Tablica zmiennoprzecinkowa:</h2></p> <center> <img class='image' src='tablicaflo.png' alt='Some code'> </center><p class='text'> W tym przypadku możesz przechować dziesięć liczb zmiennoprzecinkowy w tablicy wyniki. <h2>Tablica tekstów (łańcuchów znaków):</h2> </p> <center> <img class='image' src='tablicastr.png' alt='Some code'></center><p class='text'>Teraz masz miejsce na trzy różne imiona w tablicy 'imiona'. Aby dodać dane do tablicy, możesz odwołać się do konkretnej przegródki w ten sposób:</p><center><img class='image' src='tablica2.png' alt='Some code'></center><p class='text'>Pamiętaj, że indeksy w tablicach zaczynają się od zera, więc pierwsza przegródka ma indeks 0, druga 1, i tak dalej. Tablice są przydatne do przechowywania wielu danych tego samego typu i pozwalają na łatwe operacje na tych danych, na przykład sortowanie, wyszukiwanie i wiele innych.</p></div> ";
    }
    else
    {
        x = 1;
    }
    x = x + 1;
}
/* pomysł
przycisk zmienia swój tekst na to już wiem - > to też już wiem - > to także już wiem -> nie zanudzaj mnie plz

*/