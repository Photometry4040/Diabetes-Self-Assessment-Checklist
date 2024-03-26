document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('calculate-button').addEventListener('click', function () {
    var totalScore = calculateScore();
  
    // 결과 표시
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "당뇨병 위험도 점수: " + totalScore;
  
    // 점수에 따른 메시지 표시
   // 결과 및 안내 문구 표시
var resultElement = document.getElementById('result');
resultElement.innerHTML = "<strong>당뇨병 위험도 점수: " + totalScore + "</strong>";

var adviceHTML = "<div class='advice-section'>";
if (totalScore < 5) {
  adviceHTML += "<p>당뇨병 위험이 낮습니다. 건강한 생활 습관을 유지하세요.</p>";
} else if (totalScore < 8) {
  adviceHTML += "<p>당뇨병 위험군에 속합니다. 정기적인 혈당 검사를 권장합니다.</p>";
} else if (totalScore < 10) {
  adviceHTML += "<p>당뇨병 발생 위험이 2배 높습니다. 공복 혈당 또는 식후혈당 검사를 통해 당뇨병 발병 여부를 체크해야 합니다.</p>";
} else {
  adviceHTML += "<p>당뇨병 발생 위험이 3배 이상 높습니다. 즉시 의료 기관을 방문하여 전문가의 상담을 받으세요.</p>";
}
adviceHTML += "<div class='advice-info'><p>- 점수가 높을수록 당뇨병 발병 위험군에 해당합니다.</p><p>- 총점이 5점 이상일 경우 당뇨병 위험군에 속합니다.</p><p>- 총점 8~9점은 5~7점보다 당뇨병 발생 위험이 2배, 10점 이상은 3배 이상 높아집니다.</p><p>- 5점 이상에 해당하면 반드시 공복 혈당 또는 식후혈당 같은 혈당검사를 통해 당뇨병 발병 여부를 체크해야 합니다.</p></div>";
adviceHTML += "</div>";

resultElement.innerHTML += adviceHTML;
  });
});

function calculateScore() {
  // HTML 요소 가져오기 및 초기화...
  var ageScore = parseInt(document.getElementById("age").value);
  var familyHistoryScore = document.querySelector('input[name="family_history"]:checked').value;
  var bloodPressureScore = document.querySelector('input[name="blood_pressure"]:checked').value;
  var waistCircumferenceScore = calculateWaistScore();
  var smokingScore = document.querySelector('input[name="smoking"]:checked').value;
  var alcoholScore = parseInt(document.getElementById("alcohol").value);
  
  // 총점 계산
  var totalScore = ageScore + parseInt(familyHistoryScore) + parseInt(bloodPressureScore) + waistCircumferenceScore + parseInt(smokingScore) + alcoholScore;
  return totalScore;
}

function calculateWaistScore() {
  var waistValue = parseInt(document.getElementById("waist_circumference").value);
  if(waistValue < 4) return 0; // 남성 84cm 미만, 여성 77cm 미만
  if(waistValue < 6) return 2; // 남성 84~90cm 미만
  if(waistValue < 8) return 3; // 남성 90cm 이상, 여성 77~84cm 미만
  return 3; // 여성 84cm 이상
}