/*************** 데이터 ***************/
/* ========= MBTI 궁합표 & 유틸 ========= */
const MBTI_COMPAT = {
  "ENFJ-ENFJ": 2,
  "ENFJ-ENFP": 2,
  "ENFJ-ENTJ": 2,
  "ENFJ-ENTP": 2,
  "ENFJ-ESFJ": 0,
  "ENFJ-ESFP": 0,
  "ENFJ-ESTJ": 0,
  "ENFJ-ESTP": 0,
  "ENFJ-INFJ": 2,
  "ENFJ-INFP": 3,
  "ENFJ-INTJ": 2,
  "ENFJ-INTP": 2,
  "ENFJ-ISFJ": 0,
  "ENFJ-ISFP": 3,
  "ENFJ-ISTJ": 0,
  "ENFJ-ISTP": 0,
  "ENFP-ENFP": 2,
  "ENFP-ENTJ": 2,
  "ENFP-ENTP": 2,
  "ENFP-ESFJ": 0,
  "ENFP-ESFP": 0,
  "ENFP-ESTJ": 0,
  "ENFP-ESTP": 0,
  "ENFP-INFJ": 3,
  "ENFP-INFP": 2,
  "ENFP-INTJ": 3,
  "ENFP-INTP": 2,
  "ENFP-ISFJ": 0,
  "ENFP-ISFP": 0,
  "ENFP-ISTJ": 0,
  "ENFP-ISTP": 0,
  "ENTJ-ENTJ": 2,
  "ENTJ-ENTP": 2,
  "ENTJ-ESFJ": 1,
  "ENTJ-ESFP": 1,
  "ENTJ-ESTJ": 1,
  "ENTJ-ESTP": 1,
  "ENTJ-INFJ": 2,
  "ENTJ-INFP": 3,
  "ENTJ-INTJ": 2,
  "ENTJ-INTP": 3,
  "ENTJ-ISFJ": 1,
  "ENTJ-ISFP": 1,
  "ENTJ-ISTJ": 1,
  "ENTJ-ISTP": 1,
  "ENTP-ENTP": 2,
  "ENTP-ESFJ": 1,
  "ENTP-ESFP": 1,
  "ENTP-ESTJ": 1,
  "ENTP-ESTP": 1,
  "ENTP-INFJ": 3,
  "ENTP-INFP": 2,
  "ENTP-INTJ": 3,
  "ENTP-INTP": 2,
  "ENTP-ISFJ": 1,
  "ENTP-ISFP": 1,
  "ENTP-ISTJ": 1,
  "ENTP-ISTP": 1,
  "ESFJ-ESFJ": 2,
  "ESFJ-ESFP": 1,
  "ESFJ-ESTJ": 2,
  "ESFJ-ESTP": 1,
  "ESFJ-INFJ": 0,
  "ESFJ-INFP": 0,
  "ESFJ-INTJ": 1,
  "ESFJ-INTP": 1,
  "ESFJ-ISFJ": 2,
  "ESFJ-ISFP": 3,
  "ESFJ-ISTJ": 2,
  "ESFJ-ISTP": 3,
  "ESFP-ESFP": 1,
  "ESFP-ESTJ": 1,
  "ESFP-ESTP": 1,
  "ESFP-INFJ": 0,
  "ESFP-INFP": 0,
  "ESFP-INTJ": 1,
  "ESFP-INTP": 1,
  "ESFP-ISFJ": 3,
  "ESFP-ISFP": 1,
  "ESFP-ISTJ": 3,
  "ESFP-ISTP": 1,
  "ESTJ-ESTJ": 2,
  "ESTJ-ESTP": 1,
  "ESTJ-INFJ": 0,
  "ESTJ-INFP": 0,
  "ESTJ-INTJ": 1,
  "ESTJ-INTP": 3,
  "ESTJ-ISFJ": 2,
  "ESTJ-ISFP": 3,
  "ESTJ-ISTJ": 2,
  "ESTJ-ISTP": 3,
  "ESTP-ESTP": 1,
  "ESTP-INFJ": 0,
  "ESTP-INFP": 0,
  "ESTP-INTJ": 1,
  "ESTP-INTP": 1,
  "ESTP-ISFJ": 3,
  "ESTP-ISFP": 1,
  "ESTP-ISTJ": 3,
  "ESTP-ISTP": 1,
  "INFJ-INFJ": 2,
  "INFJ-INFP": 2,
  "INFJ-INTJ": 2,
  "INFJ-INTP": 2,
  "INFJ-ISFJ": 0,
  "INFJ-ISFP": 0,
  "INFJ-ISTJ": 0,
  "INFJ-ISTP": 0,
  "INFP-INFP": 2,
  "INFP-INTJ": 2,
  "INFP-INTP": 2,
  "INFP-ISFJ": 0,
  "INFP-ISFP": 0,
  "INFP-ISTJ": 0,
  "INFP-ISTP": 0,
  "INTJ-INTJ": 2,
  "INTJ-INTP": 2,
  "INTJ-ISFJ": 1,
  "INTJ-ISFP": 1,
  "INTJ-ISTJ": 1,
  "INTJ-ISTP": 1,
  "INTP-INTP": 2,
  "INTP-ISFJ": 1,
  "INTP-ISFP": 1,
  "INTP-ISTJ": 1,
  "INTP-ISTP": 1,
  "ISFJ-ISFJ": 2,
  "ISFJ-ISFP": 1,
  "ISFJ-ISTJ": 2,
  "ISFJ-ISTP": 1,
  "ISFP-ISFP": 1,
  "ISFP-ISTJ": 1,
  "ISFP-ISTP": 1,
  "ISTJ-ISTJ": 2,
  "ISTJ-ISTP": 1,
  "ISTP-ISTP": 1,
};

function mbtiKey(a, b) {
  if (!(a && b && a.length === 4 && b.length === 4)) return null;
  const [x, y] = [a, b].sort(); // 정렬 후 "A-B"
  return `${x}-${y}`;
}
function mbtiPartScore(userMBTI, profMBTI) {
  const k = mbtiKey(userMBTI, profMBTI);
  const raw = k && MBTI_COMPAT[k] != null ? MBTI_COMPAT[k] : 0; // 0~3
  return raw / 3; // 0.0 ~ 1.0 로 정규화
}

const questions = [
  {
    text: "당신의 MBTI는 무엇인가요?",
    answers: [
      { text: "ISTJ", type: "MBTI" },
      { text: "ISFJ", type: "MBTI" },
      { text: "INFJ", type: "MBTI" },
      { text: "INTJ", type: "MBTI" },
      { text: "ISTP", type: "MBTI" },
      { text: "ISFP", type: "MBTI" },
      { text: "INFP", type: "MBTI" },
      { text: "INTP", type: "MBTI" },
      { text: "ESTP", type: "MBTI" },
      { text: "ESFP", type: "MBTI" },
      { text: "ENFP", type: "MBTI" },
      { text: "ENTP", type: "MBTI" },
      { text: "ESTJ", type: "MBTI" },
      { text: "ESFJ", type: "MBTI" },
      { text: "ENFJ", type: "MBTI" },
      { text: "ENTJ", type: "MBTI" },
    ],
  },
  {
    text: "최애 언어는?",
    answers: [
      { text: "Python", type: "Python" },
      { text: "C", type: "C" },
      { text: "C++", type: "C++" },
      { text: "Java", type: "Java" },
    ],
  },
  {
    text: "좋아하는 음식은?",
    answers: [
      { text: "한식", type: "한식" },
      { text: "양식", type: "양식" },
      { text: "중식", type: "중식" },
      { text: "일식", type: "일식" },
    ],
  },
  {
    text: "선호하는 수업 시간은?",
    answers: [
      { text: "오전 수업만 하기", type: "오전" },
      { text: "오후 수업만 하기", type: "오후" },
    ],
  },
  {
    text: "선호하는 수업 형태는?",
    answers: [
      { text: "실습 위주", type: "실습" },
      { text: "이론 위주", type: "이론" },
    ],
  },
  {
    text: "더 선호하는 평가 방식은?",
    answers: [
      { text: "중간고사", type: "중간고사" },
      { text: "텀 프로젝트", type: "텀 프로젝트" },
    ],
  },
  {
    text: "더 나은 일정은?",
    answers: [
      { text: "우주공강", type: "우주공강" },
      { text: "4연강", type: "4연강" },
    ],
  },
  {
    text: "좋아하는 여행지는?",
    answers: [
      { text: "산", type: "산" },
      { text: "바다", type: "바다" },
    ],
  },
  {
    text: "선호하는 OS는?",
    answers: [
      { text: "Windows", type: "Windows" },
      { text: "Mac", type: "Mac" },
    ],
  },
  {
    text: "시험 유형 선호는?",
    answers: [
      { text: "응용형 문제 위주", type: "응용" },
      { text: "암기형 문제 위주", type: "암기" },
    ],
  },
];

/*************** 전역 상태 ***************/
let current = 0;
let answersLog = [];
let userMBTI = "";
let userName = "";

/*************** UI 로직 ***************/
function showQuestion() {
  const q = questions[current];
  const qEl = document.getElementById("question");
  const answersDiv = document.getElementById("answers");

  qEl.textContent = q.text;
  answersDiv.innerHTML = "";

  q.answers.forEach((a) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = a.text;

    // 접근성: Enter/Space로 선택
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btn.click();
      }
    });

    btn.onclick = () => {
      if (a.type === "MBTI") {
        userMBTI = a.text;
      } else {
        answersLog.push({ q: q.text, a: a.text, type: a.type });
      }
      nextQuestion();
    };

    answersDiv.appendChild(btn);
  });

  updateProgress();
}

function updateProgress() {
  const percent = (current / questions.length) * 100;
  document.querySelector(".progress-bar").style.width = `${percent}%`;
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

/*************** 유사도 로직 ***************/
/* ========= 4-파트 유사도(각 25%) ========= */
const includesSimple = (haystack, needle) =>
  String(haystack ?? "")
    .toLowerCase()
    .includes(String(needle ?? "").toLowerCase());

function partRatio(matchKeys, userPrefs = {}, profPrefs = {}) {
  const keys = [...new Set(matchKeys)];
  let cand = 0,
    hit = 0;

  for (const k of keys) {
    if (!(k in userPrefs) || !(k in profPrefs)) continue; // 둘 다 값 존재할 때만 비교
    const u = userPrefs[k];
    const p = profPrefs[k];
    cand++;

    if (Array.isArray(u)) {
      // 학생이 여러 값을 고른 경우: 하나라도 포함되면 매치
      if (u.some((v) => includesSimple(p, v))) hit++;
    } else {
      if (includesSimple(p, u)) hit++;
    }
  }
  return cand === 0 ? 0 : hit / cand; // 0.0 ~ 1.0
}

/*
  part1: MBTI
  part2: 학교생활(4,5,10,6,7) -> classTime, classType, exam, estimateType, schedule
  part3: 취향(3,8)           -> food, travel
  part4: 컴퓨터(2,9)         -> lang, os
*/
function calcSimilarity4Part(userMBTI, userPrefs, prof) {
  const p1 = mbtiPartScore(userMBTI, prof.mbti); // 0~1
  const p2 = partRatio(
    ["classTime", "classType", "exam", "estimateType", "schedule"],
    userPrefs,
    prof.prefs
  );
  const p3 = partRatio(["food", "travel"], userPrefs, prof.prefs);
  const p4 = partRatio(["lang", "os"], userPrefs, prof.prefs);

  // 각 25% 가중합 → 최종 %
  const percent = Math.round(
    100 * (0.25 * p1 + 0.25 * p2 + 0.25 * p3 + 0.25 * p4)
  );

  return {
    percent,
    breakdown: { p1, p2, p3, p4 }, // 원하면 상세 표시용으로 쓸 수 있음
  };
}

function findMostSimilarProfessor(userMBTI, userPrefs) {
  let best = null,
    bestMeta = null;

  professors.forEach((prof) => {
    const meta = calcSimilarity4Part(userMBTI, userPrefs, prof);
    const better =
      !bestMeta ||
      meta.percent > bestMeta.percent ||
      (meta.percent === bestMeta.percent &&
        mbtiPartScore(userMBTI, prof.mbti) >
          mbtiPartScore(userMBTI, best.mbti)) ||
      (meta.percent === bestMeta.percent &&
        prof.name.localeCompare(best.name, "ko") < 0);

    if (better) {
      best = prof;
      bestMeta = meta;
    }
  });

  return { prof: best, meta: bestMeta };
}

/*************** 결과 ***************/
function showResult() {
  // 화면 토글
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.querySelector(".progress-bar").style.width = "100%";

  // 사용자 취향 (질문 순서 전제)
  const userPrefs = {
    lang: answersLog[0]?.type || "",
    food: answersLog[1]?.type || "",
    classTime: answersLog[2]?.type || "",
    classType: answersLog[3]?.type || "",
    estimateType: answersLog[4]?.type || "",
    schedule: answersLog[5]?.type || "",
    travel: answersLog[6]?.type || "",
    os: answersLog[7]?.type || "",
    exam: answersLog[8]?.type || "",
  };

  // 최적 교수 매칭
  const { prof: matchProf, meta } = findMostSimilarProfessor(
    userMBTI,
    userPrefs
  );

  // ====== 교수별 카운트 누적 (localStorage: "profCounts") ======
  try {
    const raw = localStorage.getItem("profCounts");
    const counts = raw ? JSON.parse(raw) : {};
    counts[matchProf.name] = (counts[matchProf.name] || 0) + 1;
    localStorage.setItem("profCounts", JSON.stringify(counts));
  } catch (e) {
    console.warn("profCounts update failed:", e);
  }

  // ====== 마지막 결과 저장 (localStorage: "lastResult") ======
  try {
    localStorage.setItem(
      "lastResult",
      JSON.stringify({
        userName,
        userMBTI,
        userPrefs,
        pickedProfName: matchProf.name,
        pickedProfImage: matchProf.image,
        pickedPercent: meta.percent,
        savedAt: Date.now(),
      })
    );
  } catch (e) {
    console.warn("lastResult save failed:", e);
  }

  // 결과 렌더링
  const title = `
    <h3 class="result-title">
      <b class="name-highlight">${userName}</b>님과 가장 잘 맞는 교수님은<br>
      <b class="name-highlight">${matchProf.name} 교수님</b>입니다
    </h3>
  `;
  const metaHtml = `
    <p style="margin:8px 0 4px">유사도: <b>${meta.percent}%</b></p>
    <div class="sim-bar"><div class="sim-bar-fill" style="width:${meta.percent}%"></div></div>
  `;
  const img = `<img src="${matchProf.image}" alt="${matchProf.name}" class="center-img">`;
  const tmiBtn = `
    <div style="text-align:center; margin-top:12px;">
      <a class="btn-primary"
         href="profDetail.html?prof=${encodeURIComponent(matchProf.name)}">
        ${matchProf.name} 교수님 자세히보기
      </a>
    </div>
  `;

  document.getElementById("result").innerHTML = `
    <div class="result-card">
      ${title}
      ${metaHtml}
      ${img}
      ${tmiBtn}
    </div>
  `;

  // 진행바 섹션 숨기기(선택)
  const progressEl = document.querySelector(".progress");
  if (progressEl) progressEl.style.display = "none";
}

/*************** 시작 화면 로직 ***************/
function resetQuizState() {
  current = 0;
  answersLog = [];
  userMBTI = "";

  const bar = document.querySelector(".progress-bar");
  if (bar) bar.style.width = "0%";

  // 퀴즈 섹션 기본 표시
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").style.display = "none";
}

function startQuiz() {
  const nameInput = document.getElementById("userName");
  const errEl = document.getElementById("nameError");
  const rawName = (nameInput?.value || "").trim();

  // ★ 이름이 '다운로드'면: 카운트 txt로 저장하고 첫 화면으로 복귀
  if (rawName === "다운로드") {
    downloadProfCountsTxt(); // 아래 헬퍼 함수
    nameInput.value = ""; // 입력창 초기화
    returnToStart(); // 첫 화면으로 복귀 (아래 헬퍼)
    return;
  }

  // 평소 로직
  userName = rawName;

  // 이름 검증
  if (!userName) {
    if (errEl) errEl.style.display = "block";
    nameInput?.focus();
    return;
  } else {
    if (errEl) errEl.style.display = "none";
  }

  // 시작 카드 숨기고, 퀴즈 카드 보이기
  const start = document.getElementById("start");
  const stage = document.getElementById("stage");
  if (start) start.style.display = "none";
  if (stage) stage.style.display = "block";

  resetQuizState();
  showQuestion();
}

function downloadProfCountsTxt() {
  let counts = {};
  try {
    counts = JSON.parse(localStorage.getItem("profCounts") || "{}");
  } catch (e) {
    console.warn("profCounts parse failed:", e);
  }

  const text = JSON.stringify(counts, null, 2);
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  const ts = new Date().toISOString().slice(0, 19).replace(/[T:]/g, "-");
  a.href = url;
  a.download = `profCounts_${ts}.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function returnToStart() {
  // 내부 상태 초기화
  resetQuizState();

  // 화면 토글: 시작 카드만 보이게
  const start = document.getElementById("start");
  const stage = document.getElementById("stage");
  if (start) start.style.display = "block";
  if (stage) stage.style.display = "none";

  // 진행바/결과 영역 안전하게 숨김
  const progressEl = document.querySelector(".progress");
  if (progressEl) progressEl.style.display = ""; // 기본값 복구
  const result = document.getElementById("result");
  if (result) result.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("startBtn");
  const nameInput = document.getElementById("userName");
  if (btn) btn.addEventListener("click", startQuiz);
  if (nameInput) {
    nameInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        startQuiz();
      }
    });
  }
});
