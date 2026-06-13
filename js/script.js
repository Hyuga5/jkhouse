const cur = document.getElementById("cur"),
  cur2 = document.getElementById("cur2");
let mx = 0,
  my = 0,
  cx = 0,
  cy = 0;
document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx + "px";
  cur.style.top = my + "px";
});
(function loop() {
  cx += (mx - cx) * 0.18;
  cy += (my - cy) * 0.18;
  cur2.style.left = cx + "px";
  cur2.style.top = cy + "px";
  requestAnimationFrame(loop);
})();
document
  .querySelectorAll(
    "a,button,.pipe-row,.test-card,.why-item,.about-card,.products-table tr",
  )
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cur.style.transform = "translate(-50%,-50%) scale(2)";
      cur.style.background = "#1a5c2e";
      cur2.style.transform = "translate(-50%,-50%) scale(1.4)";
    });
    el.addEventListener("mouseleave", () => {
      cur.style.transform = "translate(-50%,-50%) scale(1)";
      cur.style.background = "#c0392b";
      cur2.style.transform = "translate(-50%,-50%) scale(1)";
    });
  });
document
  .getElementById("ham")
  .addEventListener("click", () =>
    document.getElementById("navbar").classList.toggle("open"),
  );
document
  .querySelectorAll('a[href^="#"]')
  .forEach((a) =>
    a.addEventListener("click", () =>
      document.getElementById("navbar").classList.remove("open"),
    ),
  );
function cSubmit() {
  const n = document.getElementById("fn").value.trim();
  const e = document.getElementById("fe").value.trim();
  const m = document.getElementById("fm").value.trim();
  if (!n || !e || !m) {
    alert("Please fill in all fields.");
    return;
  }
  const s = document.getElementById("csuccess");
  s.style.display = "block";
  document.getElementById("fn").value = "";
  document.getElementById("fe").value = "";
  document.getElementById("fm").value = "";
  setTimeout(() => (s.style.display = "none"), 6000);
}
const obs = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.style.opacity = "1";
    }),
  { threshold: 0.1 },
);
document
  .querySelectorAll(".why-item,.test-card,.about-card,.pipe-row,.prod-td-name")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transition = "opacity .5s ease";
    obs.observe(el);
  });
