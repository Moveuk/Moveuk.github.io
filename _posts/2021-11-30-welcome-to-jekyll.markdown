---

layout: single
title:  "Welcome to Jekyll!"
date:   2021-11-30 23:05:35 +0900
categories: jekyll blog

---

루비의 UTF-8 오류로 인해서 몇일동안 씨름하다 로컬에서 blog 개발환경 구성에 성공하였다.



github를 통해 blog 만드는 글들은 많으니 본인이 겪었던 issue에 대해서 기록하고 넘어가려고 한다.



최신 버전을 받아서(본인의 경우에는 3.0.3-1 x64 버전) 설치를 완료하고 블로그 path에서 cmd 창을 열어 `bundle install` 실행시 에러가 발생하였다.

 ruby 폴더 내부의 파일 하나 중 chop_basename(내기억에 의하면) 에서 인코딩 이슈가 생겨서 실행하지 못했는 데 구글링을 해도 비슷한 환경에서의 이슈가 발견되지 않아 혹시나 싶어 ruby 버전을 낮춰보았다.

 

인코딩 이슈에 대한 글들은 많았으나 대부분 아래처럼 cmd 창의 인코딩 방식을 바꾸는 방식으로 해결하였으나 이것만으로는 `bundle install` 에서의 이슈가 해결되지 않았다.

```
cmd창에서

chcp 65001     // UTF-8로 인코딩 해주는 것(chcp 949는 ANSI/OEM -한국어인듯 싶다 )

```



RubyInstaller 다운로드 공식 홈페이지에서도 어떤 버전을 받을지 모르겠다면 추천해주는 버전이 있는데 아마도 이런 위험성 때문이 아닐까 싶다..



![](D:\IT\workspace\Moveuk.github.io\assets\img\2021-12-01 ruby_issue.png)



 이 후 절차에서 인코딩 문제가 다시 발생하였는데 이는 window 의 사용자명이 한글로 인하여 Temp 폴더를 잡지 못하는 문제 같았다.(조만간 윈도우 사용자를 로컬로 써야할 듯 싶다.)



이는 위의 `chcp 65001`로 cmd 창에서 해결하였다.
