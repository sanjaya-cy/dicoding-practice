function greeting(greet, name = "Bapak/Ibu") {
    console.log("Selamat " + greet + ", " + name + "!")
}

greeting(greet = "Pagi", name = "Satrio");
greeting("Malam")