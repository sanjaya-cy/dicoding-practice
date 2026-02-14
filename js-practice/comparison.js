const score = 70;

if (score > 85){
    console.log("Nilai kamu A!")
}else if (score > 80) {
    console.log("Nilai kamu B!")
}else if (score > 70) {
    console.log("Nilai kamu C!")
}else {
    console.log("Nilai kamu D!")
}


// or and
let total_belanja = 150000;
let member = "Bronze";

if (total_belanja > 100000 && member == "Silver") {
    console.log("Selamat Anda mendapatkan diskon 10%");
} else {
    console.log("Mohon maaf, Anda belum bisa mendapatkan diskon");
}