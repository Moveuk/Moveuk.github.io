// 페이지 로드 시 이전 상태 복원
document.addEventListener("DOMContentLoaded", (event) => {
  //소리 크기 디폴트 조절
  var audio = document.getElementById("bgm");
  audio.volume = 0.1;

  const buckets = document.querySelectorAll(".bucket");
  buckets.forEach((bucket, index) => {
    // 로컬 스토리지에서 상태 읽기
    const isDone = localStorage.getItem("bucket" + index) === "done";
    if (isDone) {
      bucket.classList.add("done");
    }
  });
});

// 버킷 리스트 클릭 이벤트
const buckets = document.querySelectorAll(".bucket");
buckets.forEach((bucket, index) => {
  bucket.addEventListener("click", function () {
    // 클래스 토글
    bucket.classList.toggle("done");

    // 로컬 스토리지에 상태 저장
    if (bucket.classList.contains("done")) {
      localStorage.setItem("bucket" + index, "done");
    } else {
      localStorage.setItem("bucket" + index, "");
    }
  });
});

// 버킷 리스트 등록 이벤트
const submit_button = document.querySelector(".submit");
submit_button.addEventListener("click", function () {
  const new_bucketlist = document.querySelector(".new_bucketlist").value;
  // 로컬 스토리지에 form 내용 저장
  if (new_bucketlist.length == 0) alert("새로운 글을 채워주세요");
  localStorage.setItem("bucket" + buckets.length() + 1, new_bucketlist);

  if (bucket.classList.contains("done")) {
    localStorage.setItem("bucket" + index, "done");
  } else {
    localStorage.setItem("bucket" + index, "");
  }
});
