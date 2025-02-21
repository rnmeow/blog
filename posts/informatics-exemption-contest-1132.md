---
title: 記 113 學年度第一學期資訊彈性評量
datetime: 2025-02-21 18:00:00
description: "第一次認真打競程居然是在免修考。"
tags: [台南一中, 競程, 資訊課]
---

第一次認真打競程居然是在免修考。

## 遞表

說實話，我直到第二堂資訊課才知道彈性評量（俗稱免修考）這東西。

> 「如果你以前學過程式語言，可以去考彈性評量。過了就不用來上課了。」
> ──張老師惠國

想著課程內容大概也只是一些 *比較進階的 Hello World* 而已，沒有上的必要，當天出校門就跑去影印店印了份申請表。損失新台幣兩圓。

瞥了一眼申請表，似乎需要三個簽名：家長、班導師，和資訊科任老師 **初審**。這下可好，如何向資訊老師證明我確有能力<del>（其實沒有）</del>通過複試，而非沒事浪費行政資源的弱智？不出意料，經過一番琢磨…… 我依然湊不出哪怕一句像樣的標準答案。

「啊，反正，臨機應變我挺『在行』。」總之，某日資訊課間，這個弱智直接腦袋空空地去找資訊老師了——他（指資訊老師）一聲不吭，拿起原子筆就落下一個簽名。哈，心有靈犀。

這是我的「初審」。

## 快樂 <del>AC</del> WA 時間

標準：**80** / 100 分，相當於五題中 AC 四題的積分（400 / 500）。部份給分的題目亦採計得分。

聲明：眾所周知，我是個網管仔。我 **從未** 系統性地學過競賽程式設計或演算法。因此，下述程式碼全是非常醜的實現，請勿模仿。

### pA：[for] 電梯

<span style="color: green;">Accepted</span>

考 for 迴圈。大意：

- 計算電梯整天的用電量——每上升一樓耗 3 度電，每下降一樓耗 2 度電。
- 第一行讀入當日電梯總移動次數 *n*。
- 後續 *n* 個數字分別代表該次移動後，電梯所停靠的樓層。

實現：

```cpp
#include "iostream"

using namespace std;

int main(void) {
	int num;
    cin >> num;

    int lastFl = 1, totalKwh = 0;

	for (int i = 0; i < num; i++) {
		int targFl;
        cin >> targFl;

		int diff = lastFl - targFl;
	
		if (diff > 0) {
			totalKwh += 2 * diff;
		} else if (diff < 0) {
			totalKwh -= 3 * diff; // diff is negative
		} else {
            continue;
        }

		lastFl = targFl;
	}

	cout << totalKwh << '\n';

	return 0;
}

```

…… 題目不換新一下嗎？根本去年的 pC，只把「時間」改成了「用電度數」（詳見 [資訊社電神社長 Blameazu 的 HackMD](https://hackmd.io/@blameazu/CODENOTE/%2F%40blameazu%2Fpasscontest)）。

### pB：[APCS-1 模擬] 遊戲選角

<span style="color: green;">Accepted</span>

APCS 模擬，我看不出考點。大意：

- 第一行讀入 *n* 為角色總數。
- 讀入每個角色的攻擊力和防禦力，記為 *a<sub>n</sub>* 和 *d<sub>n</sub>*。
- 角色能力值為上述兩能力的平方和，即 *(a<sub>n</sub><sup>2</sup> + d<sub>n</sub><sup>2</sup>)*。
- 輸出能力值第二名者的分項能力。

實現：

```cpp
#include "iostream"
#include "cmath"

using namespace std;

int main(void) {
	ios_base::sync_with_stdio(0);
	cin.tie(NULL);

	int charNum;
	cin >> charNum;

	int theBestVal = 0, theSecondVal = 0;
	int theBestForces[2] = {0, 0}, theSecondForces[2] = {0, 0};

	for (int i = 0; i < charNum; i++) {
		int attForce, defForce; // attack / defense
		cin >> attForce >> defForce;

		int curVal = pow(attForce, 2) + pow(defForce, 2);

		if (curVal > theBestVal) {
			theSecondVal = theBestVal;
			theSecondForces[0] = theBestForces[0];
			theSecondForces[1] = theBestForces[1];

			theBestVal = curVal;
			theBestForces[0] = attForce;
			theBestForces[1] = defForce;
		} else if (curVal > theSecondVal) {
			theSecondVal = curVal;
			theSecondForces[0] = attForce;
			theSecondForces[1] = defForce;
		}
	}

	cout << theSecondForces[0] << ' ' << theSecondForces[1] << '\n';

	return 0;
}

```

很醜，我知道。但，能 AC 的就是好 code。

### pC：[nested for] 質數個數

<span style="color: green;">Accepted</span>

考巢狀（雙重）迴圈。大意：

- 第一行讀入 *n* 為數字總數。
- 讀入 *n* 個數字。
- 輸出其中的質數有幾個。

實現：

```cpp
#include "iostream"

using namespace std;

int main(void) {
	int nums;
	cin >> nums;

	int primeTtl = 0;

	for (int i = 0; i < nums; i++) {
		int num;
		cin >> num;

		int /* bool */ isPrime = 1;

		if (num == 1) {
			continue;
		}

		for (int j = 2 /* the smallest prime */; j < num; j++) {
			if (num % j == 0) {
				isPrime = 0;

				break;
			}
		}

		if (isPrime) {
			primeTtl++;
		}
	}

	cout << primeTtl << "\n";

	return 0;
}

```

差點忘記 1 不是質數。命真大。

### pD： [2019AM-E] 神奇遙控器

<span style="color: green;">Accepted</span>

又跟去年一樣了。還正好都是 pD。<del>（正在後悔為什麼沒早點讀到責備阿祖的 HackMD，根本不會那麼辛苦。）</del>大意：

- 有一支電視遙控器。
- 讀入 *a* 為目前的頻道、*b* 為目標頻道。
- 若目前頻道為奇數，則轉台時 *- 1*，若為偶數則 *÷ 2*。
- 輸出抵達目標頻道所需的最低操作次數。

實現：

```cpp
#include "iostream"

using namespace std;

int main(void) {
	int curChan, targChan;
	cin >> curChan >> targChan;

	int times = 0;
	
	while (curChan != targChan) {
		if (curChan & 0b1) /* odd */ {
			curChan--;
		} else if (curChan != 0) /* even */ {
			curChan /= 2;
		} else {
			break;
		}

		times++;
	}

	cout << times << '\n';

	return 0;
}

```

<del>剛好 [狗博士](https://asia-hokak.github.io/) 週三才用位元運算水了一堂社課，否則我可寫不出 `curChan & 0b1` 這種東西。</del>

### pE：[while] 戰備存糧

<span style="color: red;">Wrong Answer</span>

<p style="font-size: 12rem;">我不會。</p>

### 結算

- AC 題數：4 / 5
- 分數：400 / 500

```javascript
console.log(4 * 100 >= 400)

// output:
// true
```

**通過。**[記分板在這](http://skyoj.tnfsh.tn.edu.tw/sky/index.php/contest/scoreboard/656)——除了兩位混進來的學長，破台的全員科班。是我永遠達不到的高度呢。

![記分板截圖](https://assets.rnmeow.com/img/2025/02/Screenshot_20250220-135003-c59e7330d0b01477.png)

PS. 這樣算是斜咖還是諧咖？

## 後續

據 [官網公告](https://www.tnfsh.tn.edu.tw/latestevent/Details.aspx?Parser=9,3,19,,,,15635)，後續事宜會在 3/17 通知。

靜候佳音。

