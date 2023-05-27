var consecutiveCount = 0;
var totalCount = 0;

function playGame(userChoice) {
  var choices = ['グー', 'チョキ', 'パー'];
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  var resultTitle = document.getElementById('resultTitle');
  var resultImage = document.getElementById('resultImage');
  var resultContainer = document.getElementById('resultContainer');
  var consecutiveCountElement = document.getElementById('consecutiveCount');
  var totalCountElement = document.getElementById('totalCount');

  if (userChoice === computerChoice) {
    resultTitle.innerHTML = 'まあまあ！ <br> もう一回！';
    resultImage.src = './img/seikai/seikai-3.jpeg';
  } else if (
    (userChoice === 'グー' && computerChoice === 'チョキ') ||
    (userChoice === 'チョキ' && computerChoice === 'パー') ||
    (userChoice === 'パー' && computerChoice === 'グー')
  ) {
    consecutiveCount++;
    totalCount++;
    resultTitle.innerHTML = '当たり！<br>次の日に進もう！';
    resultImage.src = './img/seikai/seikai-1.jpeg';
  } else {
    consecutiveCount = 0;
    resultTitle.innerHTML = 'はずれ！<br>残念、最初から…';
    resultImage.src = './img/hazure/hazure-2.jpeg';
  }

  consecutiveCountElement.textContent = consecutiveCount;
  totalCountElement.textContent = totalCount;

  if (consecutiveCount === 1) {
    document.getElementById('achievementLink1').innerHTML = '<a href="./img/renzoku/renzoku-1.jpeg" target="_blank">ご褒美</a>';
  } else if (consecutiveCount === 2) {
    document.getElementById('achievementLink2').innerHTML = '<a href="./img/renzoku/renzoku-2.jpeg" target="_blank">ご褒美</a>';
  } else if (consecutiveCount === 5) {
    document.getElementById('achievementLink3').innerHTML = '<a href="./img/renzoku/renzoku-3.jpeg" target="_blank">ご褒美</a>';
  } else if (consecutiveCount === 10) {
    document.getElementById('achievementLink4').innerHTML = '<a href="./img/renzoku/renzoku-4.jpeg" target="_blank">ご褒美</a>';
  }

  if (totalCount === 1) {
    document.getElementById('achievementLink5').innerHTML = '<a href="./img/goukei/goukei-1.jpeg" target="_blank">ご褒美</a>';
  } else if (totalCount === 5) {
    document.getElementById('achievementLink6').innerHTML = '<a href="./img/goukei/goukei-2.jpeg" target="_blank">ご褒美</a>';
  } else if (totalCount === 10) {
    document.getElementById('achievementLink7').innerHTML = '<a href="./img/goukei/goukei-3.jpeg" target="_blank">ご褒美</a>';
  } else if (totalCount === 20) {
    document.getElementById('achievementLink8').innerHTML = '<a href="./img/goukei/goukei-4.jpeg" target="_blank">ご褒美</a>';
  }

  resultContainer.style.display = 'block';
}

function closeResult() {
  var resultContainer = document.getElementById('resultContainer');
  resultContainer.style.display = 'none';
}
