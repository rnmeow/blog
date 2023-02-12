---
title: 使用 GitHub Actions 構建 Hexo blog
datetime: 2022-05-10 20:00:00
description: 由 GitHub 所推出的免費 CI/CD 工具 —— GitHub Actions 上線一段時間了，之前一直想學，卻總是騰不出時間。正好 Blog 需要一個好的構建環境（之前用的 Cloudflare Pages 內建，太慢了），於是就自己寫了個 Workflow 用來構建（網路上的輪子用著不舒服，還是自己寫好），總算是把這個坑給填了。
tags: [Development]
---

## 前言

由 GitHub 所推出的免費 CI/CD 工具 —— GitHub Actions 上線一段時間了，之前一直想學，卻總是騰不出時間。  
正好網誌需要一個好的構建環境（之前用的 Cloudflare Pages 內建，太慢了），於是就自己寫了個 Workflow 用來構建（網路上的輪子用著不舒服，還是自己寫好），總算是把這個坑給填了。

過程盡量會詳細點，不懂的部份歡迎留言區詢問 Owo

## 準備

1. 一個有 SSH 環境的 Linux 系統（可以是 WSL）
2. 一個有 Hexo 網誌原始碼的 GitHub 儲存庫
3. **非常基礎**的 [GitHub.com](https://github.com) 操作知識

## 過程

### 設定構建用 SSH 金鑰

在 Linux 下執行指令： `ssh-keygen -f blog-deploy-key -C "DEPLOY ONLY"`，像這樣：  
![Generate SSH Key](https://s2.loli.net/2022/05/10/deFSojmYpTl2u6n.png)  
執行 `cat ./blog-deploy-key.pub`，複製輸出的 SSH 公鑰：  
![Copy Public Key](https://s2.loli.net/2022/05/10/SroJRWtxcO1dfi7.png)

進入存放網誌原始碼的 _GitHub Repo -> Settings -> Deploy Keys_：  
![Deploy Keys' Tab](https://s2.loli.net/2022/05/10/uZeksaVvzEtN6d5.png)  
點 _Add Deploy Key_ 按鈕之後貼上剛剛複製的公鑰，兩點注意：

- _Title_ 填 `GH Actions Deploy Key` 即可
- **_Allow Write Access_ 選項記得打勾！**

填起來大概長這樣：
![Upload Public Key](https://s2.loli.net/2022/05/10/utwQIWZHM8AaNyG.png)  
點 _Add Key_ 完成：  
![Added Key](https://s2.loli.net/2022/05/10/PH5xkMhKGFf72IC.png)

到剛剛產生 SSH 金鑰的 Linux 系統上執行 `cat blog-deploy-key`，複製：  
![Copy Secret Key](https://s2.loli.net/2022/05/10/fih9QuYsgW6lZFM.png)

進入 _Settings -> Secrets -> Actions_：
![Secrets' Tab](https://s2.loli.net/2022/05/10/9nQJLuAtiMOkeDp.png)  
點 _New Repo Secret_ 按鈕之後貼上剛剛複製的私鑰，Name 輸入 `DEPLOY_SEC_KEY`：  
![Add Secret](https://s2.loli.net/2022/05/10/Lm6NZpRXO5Gwda9.png)  
點 _Add Secret_ 完成：  
![Added Secret](https://s2.loli.net/2022/05/10/px4ktSrsnzO2VmR.png)

### 設定 GitHub Actions

複製我寫好的 Workflow 原始碼：

- [GitHub Gist](https://gist.github.com/kuohuanhuan/f8481fc98c560975a4557f9bc78509c1)

進入 _Actions_ 分頁：  
![Actions' Tab](https://s2.loli.net/2022/05/10/PgUDtn1CJehoArG.png)  
點選 _Set-up A Workflow Yourself_ 按鈕，執行以下四步：

1. 貼上原始碼
2. 點 _Start Commit_ 按鈕
3. 貼上 _Commit Message_: `feat(ci/cd): use gh actions to deploy blog`
4. 點 _Commit New File_ 完成 Commit

![Paste Secret Key](https://s2.loli.net/2022/05/10/SWQZky2fKIBaeps.png)

回到 _Actions_ 分頁，點擊正在執行的（或者最新的那個）Workflow：  
![Actions' Tab Uploaded](https://s2.loli.net/2022/05/10/SD1EFXKhcfpie5V.png)  
點 _deploy-blog_：  
![Deploy Blog](https://s2.loli.net/2022/05/10/P6wzTACoSeut5Uc.png)  
出線上圖中的全部打勾就成功了！

### 使用

回到儲存庫的 _static_ 分支：  
![Static Branch](https://s2.loli.net/2022/05/10/vKeqyRDn5xYiEth.png)  
設定 GitHub / Cloudflare Pages 直接使用根目錄的檔案即可。

## 結語

這次 DIY GitHub Actions Workflow 算挺成功的，之後會再鑽研得深入點（技能樹 +1 總是好的）

上面的 Workflow 原始碼如果使用上有任何問題，請留言或私訊通知，感謝～！
