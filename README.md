# WEB115 課程進度與難度階梯清單網頁

本專案仿照 **WEB115** 的簡約編排風格，建置了一個以「**List with Sublist（列表與子清單）**」為核心架構的課程網頁。依據技術難易度由淺入深排列，去除繁雜的視覺化負擔，以文字、程式碼標籤與實作指引為主要核心。

---

## 網頁設計特色

1. **依難易度遞進排列 (Difficulty-Ranked Progression)**：
   - **Level 01 | 入門手刻**：純 HTML + CSS 基礎（語意化骨架、盒模型、多場景跳轉）
   - **Level 02 | 框架排版**：Bootstrap 基礎（CDN、Container-Row-Col 12格線、響應式中斷點）
   - **Level 03 | 視差基礎**：Bootstrap 背景圖片與 `background-attachment: fixed`
   - **Level 04 | 定位機制**：捲動固定定位 `sticky-top`、父容器邊界與佔位防抖動
   - **Level 05 | 機制量化**：捲動物理量化（Scroll Lab：可捲動距離、進度條、物件位移、橫向捲動三層結構）
   - **Level 06 | 頁面控制**：Slide Effect 整頁滑動與長內容頁混合排版（CSS Scroll Snap / GSAP）
   - **Level 07 | 專題整合**：數位敘事綜合案例（臺灣選舉地圖、3D 空間導覽、100點數據重組、像素群像、阿拉丁多層景深視差）

2. **Web115 經典設計語言**：
   - 暖色紙張底色（`--paper: #f5f4ef`）、墨黑文字（`--ink: #242b29`）與磚紅重點色（`--accent: #bb462b`）。
   - 等寬字型標籤（Monospace tags）精確標註 CSS 關鍵字與對應範例檔案（如 `basic.html`, `bt.html`, `bt2.html`, `sticky-top-prompt.html` 等）。

3. **實用輕量互動功能**：
   - **學習進度追蹤 (Progress Tracker)**：每個子清單項目皆具備勾選框，狀態即時存入瀏覽器 `localStorage`，上方進度條自動計算完成百分比。
   - **展開 / 收合控制**：支援一鍵全部收合/展開各 Level，亦可單獨點擊各章節標題展開。
   - **即時過濾搜尋**：可快速以關鍵字過濾主題、語法標籤（例如輸入 `fixed`、`sticky`、`bootstrap` 即刻篩選）。

---

## 檔案說明

- `index.html`：單一自主完整網頁（含語意化 HTML、CSS 與輕量化 Vanilla JS），無外部重型相依套件，可在任何瀏覽器直接開啟使用。
