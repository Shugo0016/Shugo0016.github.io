
// Matrix numbers falling script
// const canvas = document.getElementById('Matrix');
// const context = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const katakana = 'ア イ ウ エ オ カ キ ク ケ コ サ シ ス セ ソ ガ ギ グ ゲ ゴ パ ピ プ ペ ポ 川 月 木 心 火 左 北 今 名 美 見 外 成 空 明 静 海 雲 新 語 道 聞 強 飛 あ い う え お か き く け こ さ し す せ そ が ぎ ぐ げ ご ぱ ぴ ぷ ぺ ぽ';
// const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const num = '0123456789';

// const alphabet = katakana + alpha + num;

// const fontSize = 20;
// const columns = canvas.width/fontSize;

// const rainDrops = [];

// for (let x = 0; x < columns; x++) {
//     rainDrops[x] = 1;
// }

// const draw = () => {

//     context.fillStyle = 'rgba(0,0,0,0.05)';
//     context.fillRect(0, 0, canvas.width, canvas.height);


//     context.fillStyle = '#0F0';
//     context.font = fontSize + 'px monospace';

//     for (let i = 0; i < rainDrops.length; i++) {
//         const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
//         context.fillText(text, i*fontSize, rainDrops[i] * fontSize);

//         if(rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//             rainDrops[i] = 0;
//         }
//         rainDrops[i]++;
//     }
// };

// setInterval(draw,30);
// -------------------------------------------------------------------


// Hides content
function myEnd() {
    var x = document.getElementById("to_Compile");
    var y = document.getElementById("hidden");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
}

