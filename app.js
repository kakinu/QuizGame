const quiz=[
  {
    question:'ゲーム市場もっとも売れたゲーム機は？',
    answers:[
      'スーファミ',
      'プレイステーション２',
      '任天堂スイッチ',
      '任天堂DS',
    ],
    correct:'任天堂DS',
  },{
    question:'循環小数は？',
    answers:[
      '12',
      '1.2',
      '二分の一',
      '1.222....',
    ],
    correct:'1.222....',
  },{
    question:'margin-left,margin-rightをautoにしても反映されない時の対処法は？',
    answers:[
      'Widthの限界値を広げる',
      '泣く',
      '消す',
      'やり直し',
    ],
    correct:'Widthの限界値を広げる',
  },
];

const quizLength=quiz.length;
let quizIndex=0;
let score=0;

const $button=document.getElementsByTagName('button');
const buttonLength=$button.length;


// クイズの問題
const setupQuiz=()=>{
  document.getElementById('js-question').textContent=quiz[quizIndex].question;
  let buttonIndex=0;
  let buttonLength=$button.length

 while(buttonIndex<buttonLength){
  $button[buttonIndex].textContent=quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
 }
}
setupQuiz();



const clickHandler=(e)=>{
  if(quiz[quizIndex].correct===e.target.textContent){
    window.alert('正解！！');
    score++;
  }else{
    window.alert('残念！！不正解！');
  }

  quizIndex++;
  if(quizIndex<quizLength){
    setupQuiz();
  }else{
    window.alert('終了！！お疲れ様でした！貴方のスコアは'+score+'/'+quizLength+'です！！')
  }
};
// ボタンクリックした時正誤判定

let handlerIndex=0;

while(handlerIndex<buttonLength){
  $button[handlerIndex].addEventListener('click',(e)=>{
    clickHandler(e);
  });
  handlerIndex++;
}

$button.addEventListener('click',()=>{
  $button.style.borderRadius = '50%';
});
