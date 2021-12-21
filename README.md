# 山葵組測試說明

## 各項要求說明

### 1. 用Vue Cli或Nuxt 完成以下功能
使用Vue-Cli版本4。

### 2. 以scss撰寫內容樣式
所有樣式表皆用SCSS寫在SFC檔裡。

### 3. 應用component功能
除了第5項要求使用的組件以外，header也是使用組件。

### 4. 應用computed功能
夜間主題模式的切換、傳入第5項組件的資料皆有使用到computed。

### 5. 製作 輸入類型 text, radio, select 、同一component切換prop來改變對應的輸入類型，並可套用v-model
組件名稱為customInput，分別將不同type套用在三個頁面上，並各自做出一個小功能。text、select有使用v-model來綁定輸入值，再將值直接拋到父層或用來處理其它資料。

### 6. 可切換頁面
共有三個頁面：首頁、pageA、pageB。使用vue router設定路由。

### 7. 設定頁面title, description
我之前都是寫vue2，藉由這個測試更新到vue3，但發現vue-meta這個套件的舊版本跟vue3不相容，可用於vue3的版本似乎還只有測試版，但也臨時找不到其它更便捷的解決方法。幾經嘗試後，只有成功設定好title標籤，description的部分則來不及處理。

### 8. 設定Global參數、讓頁面的顏色、主題會隨著更換
使用vuex來管理這個global變數，並透過切換這個變數來使某些元素加上/移除class，套用上不同主題的樣式表。

### 9. 串接一組列表資料api
三個頁面皆有串接同一筆api資料回來操作。使用jQuery的$.ajax方法進行串接。

### 10. 程式架構做到最大的沿用性、維護性，並於Readme說明你的想法
在開發中我會盡可能地將重複使用的程式片段獨立出來，方便統一維護或修改。對於所使用的資料則會注意其可視範圍，注意不被意外地修改到。在這次的測試中我大致上做出了以下幾點來實踐上述的想法：
1.將SCSS中重複使用的值設為變數，另外開一支檔案管理。(variable.scss)
2.將SCSS中各元素共用的樣式表另外分開寫(all.scss)，直接從main.js裡引用。
3.各頁面要重複使用的元素寫成組件，如header。
4.全域的變數交由vuex管理，避免污染或意外修改到。
5.與資料相依的元素使用盡可能使用v-for生成，如此一來只要資料結構不改變就能使用一樣的架構。

### 11. 使用Firebase Hosting，提供連結給我們進行瀏覽
https://wasateam-testdemo.web.app/#/

### 12. 提供Github程式碼
https://github.com/joy1110/wasateam_test_demo

