# kuohuanhuan / blog @ GitHub

![GitHub stars](https://img.shields.io/github/stars/kuohuanhuan/blog?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/kuohuanhuan/blog?style=for-the-badge)

這是 khh.log 的 GitHub 儲存庫。（[網站](https://nekohuan.cyou) 構建的一環。）

其它部份：

- 前端：https://github.com/kuohuanhuan/home-frontend
- 後端：https://github.com/kuohuanhuan/home-backend
- RSS 訂閱伺服器：https://github.com/kuohuanhuan/blog-rss

## 添加友情連結

你需要準備：

1. 一個 GitHub 帳號。
2. 一個可編輯 JSON 格式檔案的編輯器（i.e. [Notepad++](https://notepad-plus-plus.org), [VS Code](https://code.visualstudio.com/), [Brackets](https://brackets.io) ……）。
3. 自己的網站資料。

### 在開始之前

請先確認自己的網站符合下列規範：

- 支援 HTTPS，且憑證沒有過期。
- 網站名稱和簡介沒有過長。
- 網站 Avatar：
  + 長寬**不超過** 512px。
  + 託管服務（圖床、Git 儲存庫、網站目錄、雲端硬碟等）可靠（SLA > 60%）。
  + 檔案大小 < 120KiByte。
  + 可正常辨識，不模糊或呈現格狀。（8-bit / Minecraft / pixel 等風格不在此限。）
  + 靜態圖片，MP4 / MKV 等影片格式禁止。動態 GIF / WebP 等請在 PR 中註明。 
- 網站備有「友情連結」頁面 / 區塊。若沒有，可置於頁首或頁尾。
- **網站內容全年齡段適宜。**

### 操作

1. 添加本站資訊到「友情連結」列表中：

- 名稱：`Huan's Log` 或 `$ cat khh.log`
- 連結：https://nekohuan.cyou
- 簡介：`A student residing in Taiwan who codes.` 或*其它你認為適合描述我 / [本站](https://nekohuan.cyou) 的句子*。
- Avatar（選擇困難症發作。）：
  + WebP (128x128, ~17.7KB): https://nekohuan.cyou/avatar.webp *（推薦，但[不被較舊版 Safari 支援](https://caniuse.com/webp) 。）*
  + JPG (128x128, ~20.1KB): https://nekohuan.cyou/avatar.jpg
  + PNG (144x144, ~12.8KB): https://nekohuan.cyou/apple-touch-icon.png *（注意：經有損壓縮。）*
  + PNG ([Upload.cc](https://upload.cc) 圖床): https://upload.cc/i1/2023/01/30/WP5BQS.png _（注意：[**可能**對中國大陸 IP 並不友好](https://twitter.com/Uploadcc/status/1463519367325356032) 。）_
  + HEIC (128x128, ~1.99KB): https://nekohuan.cyou/avatar.heic *（注意：[目前尚未有瀏覽器支援](https://caniuse.com/heif) ，戰未來。）*

2. 在 GitHub 上 Fork 此儲存庫。

3. 修改 `links.json` 並 commit，格式如下：（注意：請勿更動任何無關檔案。）

```json
  {
    "name": "網站名稱",
    "link": "網址",
    "avatar": "圖片",
    "descr": "簡介"
  },
```

_（注意：請確保 JSON 格式**正確**。建議使用 [JSONLint](https://jsonlint.com) 進行確認。）_

4. 發起 Pull Request 並等待 Merge。

*（注意：本站前端使用 [jsDelivr](https://www.jsdelivr.com) 取得 JSON 資料，Merge 後可能會有約 24hrs 的快取。）*

## 如果友情連結被撤下

可能是因為您的網站……

1. 違反了上述規範。
2. 無法瀏覽。
3. 撤下了本站的連結。（包括設定 CSS 樣式為 `display: none;` 或 `visibility: hidden;` 等行為。）

如果要回覆連結，請確認您的網站已回復到正常狀態，並重新發起 Pull Request。

*如果可以，請附上您的連結被撤下的 commit。（例如：[383986b](https://github.com/kuohuanhuan/blog/commit/383986beb39c3a01ffaaa2d3399e3ccbede85d3d) ）*
