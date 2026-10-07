# Modern React & Tailwind CSS Responsive Header Suite

A complete collection of **19 pixel-perfect, responsive headers** built in **React** and **Tailwind CSS**. All headers share centralized data from `src/data/headerData.js` and feature off-canvas **Side Slider drawers** on mobile devices.

---

## 📁 Project Architecture

```text
header/
├── src/
│   ├── data/
│   │   └── headerData.js             # 🌟 Centralized shared data for ALL headers
│   ├── components/
│   │   ├── common/
│   │   │   ├── MobileSideDrawer.jsx  # Reusable smooth slide-in mobile drawer
│   │   │   └── SoRunLogo.jsx         # Custom SVG coiled logo
│   │   └── headers/
│   │       ├── Header_EstateLand.jsx     # 🏡 Estate Land sky blue real estate header
│   │       ├── Header_FundBux.jsx        # 🤝 FundBux dual-tier charity foundation header
│   │       ├── Header_FinanDox.jsx       # 💼 FinanDox corporate navy & orange ribbon
│   │       ├── Header_Auralytica.jsx     # 🤖 Auralytica enterprise AI symmetrical header
│   │       ├── Header_DataPress.jsx      # 📊 DataPress blue angled ribbon & boxed quote
│   │       ├── Header_Shoes.jsx          # 👟 SHOES sneaker brand with pill active tab
│   │       ├── Header_Nexum.jsx          # ⚡ NEXUM™ dark slate agency with arrow pill
│   │       ├── Header_Healance.jsx       # 🌿 Healance frosted wellness cross emblem
│   │       ├── Header_Mathim.jsx         # 📐 MATHIM with angled ribbon "Join Today!"
│   │       ├── Header_EasyWeek.jsx       # 🐙 EasyWeek octopus floating pill
│   │       ├── Header_TeamSync.jsx       # 🛡️ TeamSync centered logo & auth actions
│   │       ├── Header_Nurap.jsx          # ✨ NURAP luxury minimal serif editorial
│   │       ├── Header_UntitledUI.jsx     # ⚡ Untitled UI starburst fintech pill
│   │       ├── Header_BlekWorld.jsx      # 🟣 Blek World curved scoop transition
│   │       ├── Header1_PillDark.jsx      # 🏁 SoRun floating black capsule
│   │       ├── Header2_SlidingPill.jsx   # 💧 Liquid sliding indicator
│   │       ├── Header3_GlowBorder.jsx    # 🌈 Cyberpunk ambient glow
│   │       ├── Header4_MinimalLight.jsx  # ⚪ Minimal white capsule
│   │       ├── Header5_DynamicIsland.jsx # 🏝️ Dynamic island expandable
│   │       └── index.js                  # Barrel exporter
│   ├── App.jsx                       # Responsive studio with Desktop, Tablet & Mobile toggles
│   ├── index.css                     # Tailwind CSS entry point
│   └── main.jsx                      # React mount
└── package.json
```

---

## 📱 Mobile Responsiveness & Side Slider

Every single header is equipped with an off-canvas **Side Slider drawer** (`MobileSideDrawer.jsx`):
- **Smooth Animation**: Glides in from the right edge with a backdrop blur overlay.
- **No Mobile Squishing**: All desktop menus collapse gracefully into a compact header bar with an easy-to-tap hamburger trigger.
- **Full Touch Navigation**: Accessible tap targets with full navigation links, badges, and action buttons.
- **Interaction**: Closes on tapping the backdrop, clicking `X`, or pressing `Esc`.

---

## 📂 Shared Data in One Folder (`src/data/headerData.js`)

All brand names, logos, menu links, and action buttons are maintained in `src/data/headerData.js`. Updating any item in this file updates the corresponding header instantly.

---

## 🛠️ Running Locally

```bash
npm run dev
```
Preview at `http://localhost:5173/` with interactive Desktop, Tablet, and Mobile viewports.