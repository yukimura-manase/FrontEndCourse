
// < スライドショーの実装 >

// [ スライドショーの仕様・設計 ]

    // 1. 一定間隔で、スライドショーが自動で切り替わる

    // 2. スライドボタンを押すことで手動でも切り替えられるようにする

    // 3. スライドショーの残り時間を視覚的にわかるように表示する


// スライドショーを作成する手順は次のようになります。

    // ページを読み込んだときに最初の画像を表示する
    // 右ボタンを押すと画像を 1 つ進める
    // 左ボタンを押すと画像を 1 つ戻す
    // 用意した画像の範囲を越えないようにする => スライドショーを循環させられるようにする
    // 現在のファイル番号を画像の下に追加する



// 1. スライドショー画像の配列を作成する
const SliderList = [
    'img/robotama-puru.jpg',
    'img/robotama-2.jpg',
    'img/RobotamaBattle.png',
    'img/gunmar.jpg'
];

// 2. 画像
const img = document.getElementById('photo');


// 画像配列のIndex: 現在のファイル番号
let imgIdx = 0;



// 3. 左矢印・右矢印
const [ leftArrow, rightArrow ] = document.getElementsByClassName('arrow');

const p = document.createElement('p');  // p要素を生成
p.style.color = 'lightgray';  // p要素の文字色を設定

console.log('p', p);

const div = document.getElementById('slidebox'); // 親要素を取得
div.insertBefore(p, img.nextElementSibling);  // img要素の下にp要素を追加

console.log('div', div);

// ページ読み込み時に実行される
document.addEventListener('DOMContentLoaded', () => {

    img.src = SliderList[imgIdx];  // 1枚目（配列listの先頭）を設定

    p.textContent = `${imgIdx + 1} / ${SliderList.length}`;
});


// 右矢印をClickした時のイベント
rightArrow.addEventListener('click', () => {

    imgIdx++;

    // スライド配列の長さ(最大値)を超えたら、Reset(初期化)する
    if (SliderList.length <= imgIdx) {
        imgIdx = 0;
    }

    // console.log('imgIdx', imgIdx);
    img.src = SliderList[imgIdx];
    // console.log('img.src', img.src);

    p.textContent = `${imgIdx + 1} / ${SliderList.length}`;
});

// 左矢印をClickした時のイベント
leftArrow.addEventListener('click', () => {
    imgIdx--;

    // imgIdxが、0より小さくなったら、スライド配列の最後のimgを表示する
    if (imgIdx < 0) {
        imgIdx = SliderList.length - 1;
    }

    // console.log('imgIdx', imgIdx);
    img.src = SliderList[imgIdx];
    // console.log('img.src', img.src);

    p.textContent = `${imgIdx + 1} / ${SliderList.length}`;
});






// 参考・引用

// スライドショー
// https://zenn.dev/ojk/books/intro-to-javascript/viewer/js-slideshow



