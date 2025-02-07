---
title: Bluesky——去中心化社群的終極型態
datetime: 2025-02-03 23:25:00
description: "喬遷誌喜。自從伊隆·馬斯克（Elon Musk）收購 Twitter，改名 X 後，社群的風氣一天比一天要糟。暫且不提強硬地抹煞「Twitter」商標；不消停的仇恨言論、選擇性的內容審核、靠北搶錢的 Twitter Blue（現 X Premium），無一不讓人有滾去新社群媒體的想法。"
tags: [Bluesky, Twitter, Social Media]
---

喬遷誌喜。

自從伊隆．馬斯克（Elon Musk）收購 Twitter，改名 X 後，社群的風氣一天比一天要糟。暫且不提強硬地抹煞「Twitter」商標；不消停的仇恨言論、**選擇性**的內容審核、靠北搶錢的 Twitter Blue（現 X Premium），無一不讓人有*滾*去新社群媒體的想法。

## Threads

[Threads](https://threads.net) 應該是目前最夯的 X 替代品。然而，其依附於 Facebook（*元*為 Meta）、與 Instagram 帳號互通（雖然可以設定隱藏圖示，但治標不治本）。且，Threads 側重於「大家都在看什麼」，而非「使用者想要什麼」——以「台灣使用者」，而非個人為單位——在推荐內容。

Threads 的負責人 Adam Mosseri 倒是 po 了 [一篇串文](https://www.fixthreads.net/@mosseri/post/C3IjTzGvk6_)，預計改革 Threads 的演算法。可惜，我們並不總是能信任 Meta 產品尊重隱私權的程度；最近，Meta Platforms, Inc. 這家 [一年靠廣告賺了 1,600 億美元](https://www.statista.com/statistics/271258/facebooks-advertising-revenue-worldwide/) 的公司，也 [著手在 Threads 添加廣告](https://www.socialmediatoday.com/news/meta-launches-test-threads-ads/738317/) 了。雖然，我並不會因此離開 Threads——就我而言，Threads 應該作為一個用於「跟上話題」的*新聞來源*，而非社群媒體。

對了，Threads 團隊曾在 2024 年 1 月 11 日的 [一個採訪](http://plasticbag.org/archives/2024/01/how-threads-will-integrate-with-the-fediverse/)（未加密 HTTP 警告）中提出一個時間軸，揭示 ActivityPub 協議支援、整合聯邦宇宙的大致時程——最接近完全體的時間點安排在「2024 年末」。然而，真正被發布的功能，仍僅止於第一項：讓聯邦宇宙使用者可以追蹤 Threads 使用者。今夕是何年？比南鐵地下化還慢。

## Mastodon、聯邦宇宙

提到「逃離 X，重拾通訊自由」，第一印象便是基於聯邦宇宙的 [Mastodon](https://joinmastodon.org/)。我選擇在 [g0v 零時政府的站台](https://g0v.social) 上註冊了 [一個帳號](https://g0v.social/@rm)。然而，Mastodon 的介面…… 個人無法接受，無論 Web 或現存的行動端皆然。

當然，建基於聯邦宇宙的平台遠不止 Mastodon。[Misskey](https://misskey-hub.net/tw/) 或許是一個不錯的主意——由日本人開發，美感應該是好得多——等一下，似乎有點太多了：花俏。

自行從頭撰寫一個最小、堪用的 ActivityPub 實現，或許可以是個想法。但，我手頭上太多專案要做了。真要這麼搞，五年後有機會吧？


其次，在 Mastodon 近乎「不算」的演算法（正好和 Threads 呈現兩個極端）下，拓展人際圈、發掘熱門話題，幾乎是*不可能的任務*。若想自行尋求解決方案，很抱歉：Mastodon——或者更精確點說，整個聯邦宇宙——尚未提供簡易、原生支援的自訂演算法介面（Interface）。

## 向前一步，探訪 Bluesky

如果…… 拋棄 ActivityPub 呢？或許，現在正是時候來看看 [Bluesky](https://bsky.app/) 和 [AT Protocol](https://atproto.com/)，這對十分合我胃口，卻「低調」一些的存在。這麼說吧，有別於 Meta 大張旗鼓、咄咄逼人的臉色，Bluesky 顯得溫和許多。

AT Protocol 的設計哲學要更注重去中心化和自主控制；因此，採用了一種更「模組化」的架構，讓開發者和使用者有機會自訂社群體驗。這意味著，在更多樣化的社群型態之後，我們還將有權*直面黑暗*，碰觸那曾經是個黑盒子的…… 

演算法。

就以最直觀的部分來看，與 ActivityPub 相比，AT Protocol 為「自訂演算法」提供了一拖拉庫（tho͘-lá-khuh；トラック）的微調選項。使用者（或開發者）可以根據自己的需求和偏好，完全自主地控制推荐清單（稱為「動態源」；Feed）。而且，Bluesky 官方 [選用 TypeScript 作為設定動態源的預設語言](https://github.com/bluesky-social/feed-generator)！Web 開發者<del>（如我）</del>可以近乎無壓力地「自建房」。

更重要的是，對我來說，「去中心化」應該像衛生棉——有感卻無感。我們需要的是資料控制權握在手中的安全感，而非各伺服器間壁壘分明的不便。使用者將自己的資料儲存在個人資料伺服器（PDS）上，進而保留完整的掌控權；Bluesky 平台本身，則藉由中繼節點（Relay Node）來收集、統一廣播各接入該節點伺服器的資料，實現去中心化的社交網路——當然，這個中繼節點，同樣可以自建。與形似 P2P 的 ActivityPub 一比，高下立判。

因此，抱著對未來的期望，我幾乎在讀完文件當下就決定租台伺服器自建 PDS 了。畢竟，若所有使用者都湧向「旗艦伺服器」，則去中心化將形同虛設。經過幾輪比價、淘汰掉一些靈車之後，我看中了 [VKVM](https://www.vkvm.info/aff/RFLZXQCU)（超連結內含我的 AFF）——似乎是一家發跡於香港的雲端計算服務公司。（當然，我死都不會把社群伺服器架在香港。）最終，我訂購的是一台 2C / 2G / 20G，位於日本東京的 VPS；每月 35 人民幣，還算中規中矩。

安裝過程並不複雜，Google 一下，資料滿山滿谷，這裡不再贅述。誠然，理論上，資料控制權依然不在我手上，而是雲端主機的供應商。但，Ubuntu 22.04 LTS 是我親自裝的，我看得到自己的資料存在哪裡、被如何利用。

![螢幕擷取畫面 2025-02-03 230828.png](https://assets.rnmeow.com/img/2025/02/螢幕擷取畫面%202025-02-03%20230828-11115be111a9d404.png "寫這篇文章的當下，我的 Bluesky 個人頁面截圖")

既然截圖都貼出來了，順便提一下 Bluesky 的 [Handle 機制](https://bsky.social/about/blog/4-28-2023-domain-handle-tutorial) 吧。這可能我見過最明智的做法。中心化的社群，ID 分配給誰，由平台說得算——不存在先佔先贏這回事；對大部分平台來說，為了某名人而犧牲無辜使用者，「天經地義」。但，網域屬於誰，是一翻兩瞪眼的事。將「網路上的 ID」（Handle）以網域為核心構建，只能說是再適切不過了。

## 結語

十年河東，十年河西。有沒有可能，個人網誌的風潮又將因去中心化而吹起呢？這世上從來沒有最好，只有最適合使用者的服務。但，我的確十分推薦資訊科技相關人士進駐 Bluesky．高自由度、熟悉的介面、豐富的內容…… 實難讓人有拒絕它的理由。

無論如何，隨時歡迎造訪（和追蹤）[我的 Bluesky](https://bsky.app/profile/rnmeow.com)．願我們某日能——或今日就——在藍天相見。

  
