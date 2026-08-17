// STAFF ON MOVE — i18n dictionary
// Each key maps to { zh: '...', en: '...' }
// data-i18n="key"       -> sets textContent
// data-i18n-html="key"  -> sets innerHTML (for entries containing <em>/<br>)

const I18N_DICT = {
  "nav.about":      { zh: "關於",   en: "About" },
  "nav.activities": { zh: "活動",   en: "Activities" },
  "nav.other":      { zh: "其他",   en: "More" },

  "hero.sub": {
    zh: "ABC-MART TAIWAN　|　店員運動企劃",
    en: "ABC-MART TAIWAN　|　A Staff Fitness Initiative"
  },

  "event.eyebrow":   { zh: "接下來的活動", en: "What's Next" },
  "event.time":      { zh: "週三　7:30–9:30", en: "Wed　7:30–9:30 AM" },
  "event.desc": {
    zh: "ABC-MART 與 OffTrack Crew 首次跨界合作，由 OTC 專業教練團規劃結合肌力訓練與跑步的 Hybrid Training，誠摯邀請夥伴們共同參與，實地體驗專業體能訓練。不需要任何訓練基礎，適合所有想嘗試不同運動型態的夥伴。",
    en: "ABC-MART's first crossover with OffTrack Crew — a Hybrid Training session blending strength work and running, coached by OTC's professional trainers. No experience needed, open to anyone curious about trying a new kind of workout."
  },
  "event.loc":       { zh: "📍 台北　|　OffTrack Crew 專業教練團帶領", en: "📍 Taipei　|　Led by OffTrack Crew's coaching team" },
  "event.countdown": { zh: "距離活動開始還有", en: "Starts in" },
  "event.days":      { zh: "天", en: "d" },
  "event.hours":     { zh: "時", en: "h" },
  "event.mins":      { zh: "分", en: "m" },
  "event.secs":      { zh: "秒", en: "s" },
  "event.cta":       { zh: "前往報名", en: "Register Now" },

  "origin.eyebrow": { zh: "企劃緣起", en: "Origin" },
  "origin.lead": {
    zh: "STAFF ON MOVE 是由跨部門與門市夥伴共同發起的企劃，希望透過 ABC-MART 夥伴們的親身體驗，把鞋款機能自然融入趣味生活與戶外情境，用「真實使用者」的角度說故事，而不是傳統的商品廣告。",
    en: "STAFF ON MOVE is an initiative started by staff across departments and stores. The idea: let ABC-MART's own people put the shoes through real life and the outdoors, and tell that story as genuine users — not another product ad."
  },
  "origin.p1title": { zh: "夥伴主導", en: "Staff-Led" },
  "origin.p1desc":  { zh: "由店鋪與總部夥伴自發參與、自主企劃內容方向", en: "Store and HQ staff volunteer their time and shape the content themselves" },
  "origin.p2title": { zh: "生活情境", en: "Everyday Moments" },
  "origin.p2desc":  { zh: "夜跑、早餐、爬山——鞋款機能融入真實日常", en: "Night runs, breakfast, hiking — shoe performance woven into real daily life" },
  "origin.p3title": { zh: "零預算嘗試", en: "Zero Budget" },
  "origin.p3desc":  { zh: "前三集皆未動用額外行銷費用，純內容驅動", en: "All three episodes ran on zero extra marketing spend — content-driven, full stop" },

  "strategy.eyebrow": { zh: "企劃價值總結", en: "Project Value" },
  "strategy.lead": {
    zh: "前三集皆由夥伴自發企劃執行，未動用額外行銷資源，純內容驅動成長。",
    en: "All three episodes were planned and run entirely by volunteering staff — no extra marketing budget, growth driven purely by content."
  },
  "strategy.t1title": { zh: "話題導向<br>拉近距離", en: "Topic-Led<br>Closing the Gap" },
  "strategy.t1desc": {
    zh: "以「跑步」生活情境切入，用趣味話題製造討論度與擴散力，讓夥伴與品牌自然連結。",
    en: "Starting from the everyday act of running, playful topics sparked conversation and reach — connecting staff and brand naturally."
  },
  "strategy.t2title": { zh: "產品導向<br>形象提升", en: "Product-Led<br>Building Image" },
  "strategy.t2desc": {
    zh: "轉為 PALLADIUM × ABC-MART SMU 獨家商品置入，將流量話題轉化為品牌與商品形象。",
    en: "Shifted to featuring the PALLADIUM × ABC-MART SMU exclusive, turning attention into brand and product image."
  },
  "strategy.t3title": { zh: "擴大經營<br>提升誘因", en: "Scaling Up<br>Better Incentives" },
  "strategy.t3desc": {
    zh: "規劃跑團經營、球類企劃，並設計店鋪夥伴參與誘因，讓企劃從總部擴大到全體門市。",
    en: "Planning a running club, ball-sport events, and real incentives for store staff — growing this from an HQ project into a company-wide one."
  },
  "strategy.f1": { zh: "三集累計瀏覽次數", en: "Total views across 3 episodes" },
  "strategy.f2": { zh: "額外行銷預算", en: "Extra marketing budget" },
  "strategy.f3": { zh: "已完成企劃檔數", en: "Episodes completed" },

  "activities.eyebrow": { zh: "企劃活動", en: "Activities" },
  "activities.title":   { zh: "Activities Archive", en: "Activities Archive" },
  "activities.overview": { zh: "總覽", en: "Overview" },

  "cards.v1": { zh: "夜跑台大臘腸狗路線，用 GPS 軌跡跑出趣味圖形", en: "A night run tracing a dachshund shape through NTU on GPS" },
  "cards.v2": { zh: "極限手搖奶油跑，邊跑邊把鮮奶油搖成抹醬", en: "Running while hand-churning cream into butter — for real" },
  "cards.v3title": { zh: "步入山林・夏季野行", en: "Into the Woods — Summer Trail" },
  "cards.v3": { zh: "ABC-MART × PALLADIUM，實地登山體驗防水機能鞋款", en: "ABC-MART × PALLADIUM — putting waterproof shoes to the trail test" },
  "cards.view": { zh: "查看詳情 →", en: "View Details →" },

  "overview.eyebrow": { zh: "三集成效總覽", en: "Performance Overview" },
  "chart.v1": { zh: "夜跑臘腸狗", en: "Night Run" },
  "chart.v2": { zh: "奶油跑", en: "Butter Run" },
  "chart.v3": { zh: "劍潭山野行", en: "Trail Hike" },

  "table.metric":  { zh: "指標", en: "Metric" },
  "table.reach":   { zh: "觸及帳號", en: "Accounts Reached" },
  "table.engage":  { zh: "互動總數", en: "Total Engagements" },
  "table.likes":   { zh: "讚數", en: "Likes" },
  "table.shares":  { zh: "分享次數", en: "Shares" },
  "table.engaged": { zh: "互動帳號數", en: "Engaged Accounts" },
  "table.follows": { zh: "新增追蹤", en: "New Follows" },

  "highlights.title": { zh: "亮點觀察", en: "Key Takeaways" },
  "highlights.h1": { zh: "三集累計瀏覽次數近 2.7 萬次，觸及帳號數超過 1.1 萬", en: "Nearly 27,000 combined views across all three episodes, reaching over 11,000 accounts" },
  "highlights.h2": { zh: "VOL.01 互動表現最佳（201 次互動、170 個互動帳號），粉絲參與度高", en: "VOL.01 had the strongest engagement (201 interactions, 170 accounts) — high follower participation" },
  "highlights.h3": { zh: "VOL.02 擴散力最強（瀏覽 1.3 萬），成功吸引非粉絲族群關注", en: "VOL.02 spread the furthest (13,000 views), pulling in attention beyond existing followers" },
  "highlights.h4": { zh: "三集留言數普遍偏低，是未來可優化的互動深度方向", en: "Comment counts stayed low across all three — room to grow deeper engagement next time" },

  "gallery.hint": { zh: "← 左右滑動、拖曳或滾動看更多花絮 →", en: "← Swipe, drag, or scroll for more →" },

  "stat.distance":   { zh: "距離", en: "Distance" },
  "stat.pace":       { zh: "配速", en: "Pace" },
  "stat.time":       { zh: "時間", en: "Time" },
  "stat.views":      { zh: "瀏覽次數", en: "Views" },
  "stat.likes":      { zh: "讚", en: "Likes" },
  "stat.shares":     { zh: "分享", en: "Shares" },
  "stat.saves":      { zh: "儲存", en: "Saves" },
  "stat.comments":   { zh: "留言", en: "Comments" },
  "stat.newfollow":  { zh: "新增追蹤", en: "New follows" },
  "stat.meetpoint":  { zh: "集合地點", en: "Meeting Point" },
  "stat.goal":       { zh: "今日目標", en: "Today's Goal" },
  "stat.prep":       { zh: "事前準備", en: "Prep" },

  "unit.km":  { zh: "公里", en: "km" },
  "unit.min": { zh: "分", en: "m" },
  "unit.sec": { zh: "秒", en: "s" },

  "btn.original":   { zh: "查看原始貼文", en: "View Original Post" },
  "btn.eventpage":  { zh: "查看活動頁", en: "View Event Page" },

  "vol1.meta1": { zh: "夜跑台大臘腸狗路線", en: "Night run — NTU dachshund route" },
  "vol1.meta2": { zh: "台大校園", en: "NTU Campus" },
  "vol1.story": {
    zh: "今天下班不回家，來跟 ABC-MART 的夥伴們，收集近期很多人分享的臘腸狗路線！下班不回家，夥伴們一起挑戰網路上超夯的「台大臘腸狗 GPS 路線」，邊跑邊對地圖，原本以為很簡單，結果為了讓這隻臘腸狗長得像一點，大家跑得超費心。不過跟大家一起解鎖新路線的感覺真的很讚，聊著天吹著晚風，連腳步都變輕快了。",
    en: "No going home after work tonight — the ABC-MART crew is out collecting that GPS-art route everyone's been sharing lately: the NTU dachshund. We figured it'd be easy, but keeping the dachshund shape recognizable took way more map-checking mid-run than expected. Still, unlocking a new route together felt great — chatting, catching the evening breeze, even our pace felt lighter."
  },

  "vol2.meta1": { zh: "極限手搖奶油跑", en: "Extreme hand-churned butter run" },
  "vol2.meta2": { zh: "集合：圓山花博公園", en: "Meet at: Yuanshan Expo Park" },
  "vol2.meetval": { zh: "圓山花博公園", en: "Yuanshan Expo Park" },
  "vol2.prepval": { zh: "夾鏈袋＋鮮奶油＋鹽巴", en: "Ziplock bag + cream + salt" },
  "vol2.story": {
    zh: "把握好天氣的早晨，跟店員們約在圓山花博公園，一起來跑 BUTTER RUN。事前準備很簡單：在夾鏈袋倒入鮮奶油、加上少許鹽巴、密封後放到背心或背包裡，帶著吐司出發。夏季跑步就是跟太陽的比賽，趁越來越熱之前跑完。跑完打開袋子，奶油真的成形了！抹上吐司，配著早晨的風，就這樣把早餐吃完了。",
    en: "Caught a good-weather morning and met the store crew at Yuanshan Expo Park for the BUTTER RUN. Prep was simple: cream and a pinch of salt in a ziplock bag, sealed and tucked into a vest or backpack, toast in hand — then go. Summer running is a race against the sun, so we tried to finish before it got too hot. Opened the bag afterward and — it actually turned into butter! Spread it on toast, ate breakfast in the morning breeze."
  },

  "vol3.title": { zh: "步入山林<br>夏季野行", en: "Into the Woods<br>Summer Trail" },
  "vol3.meta1": { zh: "劍潭山親山步道", en: "Jiantan Mountain Trail" },
  "vol3.note":  { zh: "🎬 本集為 Instagram Reels 影片形式", en: "🎬 This episode is an Instagram Reels video" },
  "vol3.story": {
    zh: "走向戶外！穿上 PALLADIUM OFFBOUND AMPHIBIAN WP+ 走入山林，透過實際登山體驗完美呈現鞋款的防水機能與舒適度，展現團隊走向大自然的探索精神。本集內容策略首度由「話題導向」進階為「產品導向」，是企劃走向品牌／商品置入的關鍵一步。",
    en: "Time to head outdoors — laced up in the PALLADIUM OFFBOUND AMPHIBIAN WP+ and hit the trail. A real hike put the shoe's waterproofing and comfort to the test, capturing the team's spirit of exploring nature. This episode marks the shift from topic-led to product-led content — a key step toward brand and product integration."
  },

  "feedback.eyebrow": { zh: "意見回饋", en: "Feedback" },
  "feedback.lead": {
    zh: "如果有特別或是有趣的路線，或是對下一檔企劃有任何想法，都歡迎跟我們說！",
    en: "Got an interesting route to share, or ideas for the next episode? We'd love to hear from you!"
  },
  "feedback.cta": { zh: "寄信給我們", en: "Email Us" },

  "footer.left":  { zh: "ABC-MART Taiwan　|　內部通訊分享", en: "ABC-MART Taiwan　|　Internal communication" },
  "footer.right": { zh: "VOL.01 — VOL.03　內容回顧與成果分享", en: "VOL.01 — VOL.03　Recap & Results" }
};
