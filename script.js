// Helpers
const $ = (s, sc=document) => sc.querySelector(s);
const $$ = (s, sc=document) => Array.from(sc.querySelectorAll(s));

// Elements
const body = document.body;
const toggleMode = $('#toggleMode');
const searchInput = $('#searchInput');
const searchWrap = $('#searchWrap');
const btnTop = $('#btnTop');
const fabWa = $('#fabWa');
const listPage = $('#listPage');
const detailPage = $('#detailPage');
const btnBack = $('#btnBack');
const detailTitle = $('#detailTitle');
const detailMeta = $('#detailMeta');
const detailBody = $('#detailBody');
const commentForm = $('#commentForm');
const commentList = $('#commentList');
const quoteBox = $('#quoteBox');
const siteFooter = $('#siteFooter');

// Articles inserted here (5 paragraf x 5 kalimat each)
const articles = {
  artikel1: {
    title: "Guru Inovatif dan Kreatif adalah Investasi untuk Masa Depan",
    meta: "Topik: Guru • 10 menit baca",
    body: `
      <p>Guru adalah sosok penting dalam membentuk karakter generasi muda. Mereka tidak hanya bertugas menyampaikan ilmu, tetapi juga menanamkan nilai-nilai kehidupan. Di tengah perkembangan zaman yang cepat, peran guru menjadi semakin kompleks dan menantang. Guru dituntut untuk mampu menyesuaikan diri dengan perubahan agar dapat relevan bagi siswanya. Oleh karena itu, guru yang inovatif dan kreatif menjadi kunci dalam pendidikan modern.</p>

      <p>Guru inovatif mampu menciptakan metode pembelajaran yang menarik dan efektif. Mereka menggunakan teknologi, permainan edukatif, dan media interaktif untuk meningkatkan pemahaman siswa. Hal ini membuat suasana belajar menjadi lebih hidup dan menyenangkan. Dengan begitu, siswa tidak hanya menghafal materi, tetapi juga memahami konsep secara mendalam. Kreativitas guru dapat menumbuhkan rasa ingin tahu dan semangat belajar yang tinggi pada murid.</p>

      <p>Selain itu, guru kreatif mampu menyesuaikan pendekatan pembelajaran sesuai dengan kebutuhan siswa. Setiap anak memiliki gaya belajar yang berbeda, ada yang visual, auditori, maupun kinestetik. Guru yang peka terhadap perbedaan ini dapat menyampaikan materi dengan cara yang tepat. Dengan begitu, siswa merasa diperhatikan dan lebih mudah menyerap pelajaran. Keberagaman metode pengajaran membuat proses belajar menjadi inklusif dan adil.</p>

      <p>Guru inovatif juga berperan sebagai motivator yang menginspirasi siswa. Mereka tidak hanya mengajarkan ilmu pengetahuan, tetapi juga memberikan teladan dalam sikap dan perilaku. Guru yang kreatif mampu membimbing siswa menghadapi tantangan zaman, seperti perkembangan teknologi dan perubahan sosial. Dengan bimbingan seperti ini, siswa lebih siap menghadapi dunia nyata. Mereka tumbuh menjadi pribadi yang mandiri, kritis, dan berkarakter kuat.</p>

      <p>Dari uraian tersebut, jelas bahwa guru inovatif dan kreatif adalah investasi berharga bagi masa depan bangsa. Kehadiran mereka mampu membentuk generasi yang cerdas, tangguh, dan siap menghadapi tantangan global. Pendidikan yang diberikan bukan hanya soal akademik, tetapi juga pembentukan karakter. Guru yang berinovasi terus-menerus akan selalu relevan dalam mendidik generasi baru. Oleh karena itu, sudah sepatutnya guru diberikan dukungan penuh agar terus berkembang.</p>
    `
  },

  artikel2: {
    title: "Pergaulan Murid dan Dinamika Pemikiran Mereka",
    meta: "Topik: Murid • 9 menit baca",
    body: `
      <p>Pergaulan murid di sekolah merupakan bagian penting dari perkembangan sosial mereka. Melalui interaksi sehari-hari, murid belajar mengenal diri sendiri dan orang lain. Pergaulan yang sehat dapat membentuk sikap positif dan keterampilan sosial yang baik. Sebaliknya, pergaulan yang salah bisa berdampak negatif bagi perkembangan mental dan akademik. Oleh karena itu, memahami dinamika pemikiran murid dalam pergaulannya menjadi hal yang sangat penting.</p>

      <p>Murid pada dasarnya memiliki rasa ingin tahu yang tinggi terhadap lingkungannya. Mereka belajar banyak hal melalui teman sebaya, baik yang positif maupun yang negatif. Dalam proses ini, pemikiran mereka sering kali dipengaruhi oleh pengalaman sosial yang dialami. Jika lingkungan pergaulannya baik, maka sikap dan perilakunya cenderung positif. Sebaliknya, lingkungan yang kurang sehat bisa menjerumuskan murid ke dalam kebiasaan buruk.</p>

      <p>Pergaulan juga berperan penting dalam pembentukan identitas diri murid. Saat berinteraksi, mereka belajar mengekspresikan pendapat, bekerja sama, dan menghargai perbedaan. Hal ini membantu murid memahami siapa dirinya dan bagaimana posisinya di tengah masyarakat. Selain itu, mereka juga belajar nilai toleransi dan empati. Semua pengalaman tersebut akan membentuk pola pikir yang terbawa hingga dewasa.</p>

      <p>Namun, dinamika pergaulan murid tidak selalu berjalan mulus. Ada kalanya mereka terpengaruh oleh tekanan kelompok yang bisa mengubah cara berpikir. Misalnya, murid yang awalnya rajin bisa menjadi malas jika lingkungannya tidak mendukung. Sebaliknya, murid yang kurang percaya diri bisa berkembang jika berada di kelompok yang positif. Oleh sebab itu, bimbingan guru dan orang tua sangat penting dalam mengarahkan pergaulan mereka.</p>

      <p>Dengan demikian, pergaulan murid dan dinamika pemikiran mereka saling berkaitan erat. Interaksi sosial menjadi media penting bagi perkembangan kepribadian dan pola pikir. Jika diarahkan dengan baik, pergaulan dapat menjadi sarana positif untuk membentuk karakter. Namun tanpa arahan, pergaulan bisa memberi dampak negatif pada masa depan murid. Oleh karena itu, semua pihak perlu berperan aktif dalam menciptakan lingkungan pergaulan yang sehat di sekolah.</p>
    `
  }
};

// Mode toggle with animated button
toggleMode.addEventListener('click', () => {
  // add spin class for icon animation
  toggleMode.classList.add('spin');
  setTimeout(()=> toggleMode.classList.remove('spin'), 700);

  const isNight = body.classList.toggle('night');
  // update aria
  toggleMode.setAttribute('aria-pressed', String(isNight));
});

// Navigation: list <-> detail
function showDetail(id){
  const art = articles[id];
  if(!art) return;
  detailTitle.textContent = art.title;
  detailMeta.textContent = art.meta || '';
  detailBody.innerHTML = art.body;
  // clear previous comments for demo? keep persistent in DOM
  listPage.classList.remove('active');
  detailPage.classList.add('active');
  // scroll to content
  setTimeout(()=> {
    const top = document.getElementById('contentArea').getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: Math.max(0, top - 8), behavior: 'smooth' });
  }, 160);
}
function showList(){
  detailPage.classList.remove('active');
  listPage.classList.add('active');
  setTimeout(()=> {
    const top = document.getElementById('contentArea').getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: Math.max(0, top - 8), behavior: 'smooth' });
  }, 160);
}

// attach cards
$$('.card').forEach(card=>{
  card.addEventListener('click', ()=> {
    const id = card.getAttribute('data-target');
    showDetail(id);
  });
  card.addEventListener('keydown', (e)=> {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const id = card.getAttribute('data-target');
      showDetail(id);
    }
  });
});
btnBack.addEventListener('click', showList);

// Back-to-top + fabWa visibility
window.addEventListener('scroll', () => {
  const y = window.scrollY || document.documentElement.scrollTop;
  btnTop.style.display = y > 240 ? 'flex' : 'none';

  const doc = document.documentElement;
  const nearBottom = (doc.scrollTop + window.innerHeight) > (doc.scrollHeight - 240);
  if(nearBottom) fabWa.classList.add('show'); else fabWa.classList.remove('show');
});
btnTop.addEventListener('click', ()=> window.scrollTo({ top:0, behavior:'smooth' }));

// Search filter (works)
searchInput.addEventListener('input', ()=> {
  const q = searchInput.value.trim().toLowerCase();
  $$('.card').forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    card.style.display = title.includes(q) ? 'block' : 'none';
  });
});
// also allow Enter to focus first result
searchInput.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter') {
    const first = $$('.card').find(c => c.style.display !== 'none');
    if(first) first.focus();
  }
});

// Comments: prepend to list
commentForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = $('#commentName').value.trim();
  const text = $('#commentText').value.trim();
  if(!name || !text) return;
  const div = document.createElement('div');
  div.className = 'comment';
  const when = new Date().toLocaleString();
  div.innerHTML = `<strong>${escapeHtml(name)}</strong><small style="display:block;color:var(--muted);margin-bottom:6px">${when}</small><div>${escapeHtml(text)}</div>`;
  commentList.prepend(div);
  commentForm.reset();
  // small animation
  div.animate([{transform:'scale(.98)',opacity:0},{transform:'scale(1)',opacity:1}],{duration:260,easing:'ease-out'});
});

// simple sanitize
function escapeHtml(s){ return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }

// Quotes rotating
const quotes = [
  "Pendidikan adalah senjata paling ampuh untuk mengubah dunia. – Nelson Mandela",
  "Belajar tanpa berpikir itu sia-sia, berpikir tanpa belajar itu berbahaya. – Confucius",
  "Masa depan milik mereka yang mempersiapkan diri hari ini. – Malcolm X",
  "Guru yang baik itu seperti lilin, membakar dirinya untuk menerangi orang lain.",
  "Ilmu adalah cahaya, dan cahaya itu akan menuntun kehidupan."
];
let qIndex = 0;
function rotateQuote(){
  quoteBox.style.opacity = 0;
  setTimeout(()=> {
    quoteBox.textContent = quotes[qIndex];
    quoteBox.style.opacity = 1;
    qIndex = (qIndex + 1) % quotes.length;
  }, 600);
}
setInterval(rotateQuote, 5000);
rotateQuote(); // initial

// initial view
showList();