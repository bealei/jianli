/* ===== 渲染逻辑：读取 data.js 里的 data 渲染页面，一般不用改 ===== */

/* 渲染头部标题、副标题 */
document.getElementById("hero").innerHTML = `
  <h1>${data.header.title}</h1>
  <p>${data.header.subTitle}</p>
`;

/* 渲染页脚版权 */
document.getElementById("footer").innerHTML = data.footer.text;

const tl = document.getElementById("tl");
let flip = 0;
data.groups.forEach((section) => {
  const tag = document.createElement("div");
  tag.className = "group-tag";
  tag.innerHTML = `<span>${section.group}</span>`;
  tl.appendChild(tag);

  if (!section.items.length) {
    const el = document.createElement("div");
    el.className = "item left";
    el.innerHTML = `
      <span class="dot"></span>
      <div class="card placeholder">待补充</div>`;
    tl.appendChild(el);
    return;
  }

  section.items.forEach((it) => {
    const side = it.side || (flip % 2 === 0 ? "left" : "right");
    flip++;
    const el = document.createElement("div");
    el.className = "item " + side;
    const desc = it.desc ? `<div class="title">${it.desc}</div>` : "";
    const tagHtml = it.tag ? `<span class="tag">${it.tag}</span>` : "";
    el.innerHTML = `
      <span class="dot"></span>
      <div class="card">
        <div class="time">${it.time}</div>
        <div class="title">${it.title}</div>
        ${desc}
        ${tagHtml}
      </div>`;
    tl.appendChild(el);
  });
});

/* 滚动进入视口：条目从下方滑入，分组标签淡入 */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 },
);
document.querySelectorAll(".item, .group-tag").forEach((el) => io.observe(el));

/* 顶部滚动进度条 */
const progress = document.getElementById("progress");
function onScroll() {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ===== 鼠标五彩拖尾粒子 ===== */
const trailColors = [
  "#f6b6d0",
  "#c9b6f6",
  "#a9c8f6",
  "#a9e8d8",
  "#f6d8a9",
  "#b6e6a9",
];
let lastX = 0,
  lastY = 0;
window.addEventListener("mousemove", (e) => {
  const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
  if (dist < 4) return;
  lastX = e.clientX;
  lastY = e.clientY;
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement("div");
    dot.className = "trail-dot";
    const size = 4 + Math.random() * 7;
    dot.style.width = dot.style.height = size + "px";
    const color = trailColors[Math.floor(Math.random() * trailColors.length)];
    dot.style.background = color;
    dot.style.color = color;
    dot.style.left = e.clientX - size / 2 + "px";
    dot.style.top = e.clientY - size / 2 + "px";
    dot.style.setProperty("--dx", Math.random() * 40 - 20 + "px");
    dot.style.setProperty("--dy", Math.random() * 40 - 30 + "px");
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 800);
  }
});
