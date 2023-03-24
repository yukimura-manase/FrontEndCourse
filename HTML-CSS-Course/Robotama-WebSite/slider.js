
// 1. スライドショー画像の配列を作成する
const list = [
    'img/robotama.jpg',
    'img/robotama-2.jpg',
    'img/robotama-kawaii.jpg',
    'img/roborobo.jpg',
    'img/ロボ玉.jpg'
];


// 画像
const img = document.getElementById('photo');  

// 左矢印・右矢印
const [leftArrow, rightArrow] = document.getElementsByClassName('arrow');



// 画像のNo
let imgN = 0;

const p = document.createElement('p');
p.style.color = 'lightgray';

const div = document.getElementById('main');

console.log('img.nextElementSibling', img.nextElementSibling);

// imgタグの兄弟要素の前に pタグを配置する
div.insertBefore(p, img.nextElementSibling);

// Node.insertBefore(newNode, referenceNode);
// insertBefore() は Node インターフェイスのメソッドで、参照先ノードの前にこの親ノードの子としてノードを挿入します。

// 画像をSet & 画像の順番を表示する pタグのSet
function setImage() {
  img.src = list[imgN];
  p.textContent = `${imgN + 1} / ${list.length}`;
}

document.addEventListener('DOMContentLoaded', () => {
  setImage();
});

leftArrow.addEventListener('click', () => {
  imgN -= 1;
  if (imgN < 0) {
    imgN = 0;
  }
  setImage();
});

rightArrow.addEventListener('click', () => {
  imgN += 1;
  if (imgN >= list.length) {
    imgN = list.length - 1;
  }
  setImage();
});

// 自動再生/停止ボタン
const button = document.createElement('button');
button.textContent = '自動再生する';
div.appendChild(button);

let autoplay = false;
button.addEventListener('click', () => {

  if (autoplay == false) {
    button.textContent = '停止する';
    autoplay = setInterval(() => {
      imgN += 1;
      if (imgN >= list.length) {
        imgN = 0;
      }
      setImage();
    }, 500);
  } else {
    clearInterval(autoplay);
    autoplay = false;
    button.textContent = '自動再生する';
  }
});



