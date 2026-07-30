# 智慧金融推薦助理｜Frontend UI Prototype

遠東商銀數據分析團隊的前端 mock UI。此版本不串接後端，所有產品與推薦文字均為示意資料。

## 現有功能

- 客戶需求情境：美元定存、日本旅遊、資金規劃
- 自然語言輸入的 mock 推薦結果
- 金融服務推薦卡與風險／示意提醒
- 手機與桌面 RWD 版面

## 與 A、B 組的未來串接

當 API contract 完成後，將 `script.js` 內表單送出事件改為呼叫 `POST /api/chat`，並以 API 回傳的產品、說明、連結與免責資訊取代目前 `scenarios` mock data。

建議 contract 最少包含：

```json
{ "message": "近期要去日本旅遊", "sessionId": "optional" }
```

回傳：

```json
{ "answer": "...", "recommendations": [{ "title": "...", "category": "...", "description": "...", "url": "..." }], "disclaimer": "..." }
```

## 預覽與部署

直接開啟 `index.html` 預覽。部署 GitHub Pages：GitHub repository 的 **Settings → Pages**，選擇 `main` branch 與 `/(root)`。
