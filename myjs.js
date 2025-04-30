const tmdbPopular = "https://api.themoviedb.org/3/movie/popular",
  tmdbDiscover = "https://api.themoviedb.org/3/discover/movie",
  tmdbApi = "fc6800402ffd747e928d3b0837704dc4",
  tmdbBgUrl = "https://image.tmdb.org/t/p/original/",
  tmdbPosterUrl = "https://image.tmdb.org/t/p/w500",
  myInput = document.getElementById("myInput"),
  searchBtn = document.getElementById("searchBtn"),
  myAd = "http://ak.stikroltiltoowi.net/4/8771585";
document.querySelector(".logo").addEventListener("click", () => {
  window.open("index.html"), (window.location.href = myAd);
}),
  document.querySelectorAll(".etoVip").forEach((e) => {
    e.addEventListener("click", () => {
      (document.getElementById("vipPlayer").style.backgroundColor = "green"),
        (document.getElementById("freePlayer").style.backgroundColor = "grey");
    });
  }),
  document.querySelectorAll(".etoFree").forEach((e) => {
    e.addEventListener("click", () => {
      (document.getElementById("freePlayer").style.backgroundColor = "green"),
        (document.getElementById("vipPlayer").style.backgroundColor = "grey");
    });
  });
const modalClose = document.getElementById("modalClose");
modalClose.addEventListener("click", () => {
  (myModal.style.display = "none"), window.open(myAd), (myIframe.src = "");
}),
  document.querySelectorAll(".videoSources button").forEach((e) => {
    e.addEventListener("click", () => {
      window.open(myAd),
        document.querySelectorAll(".videoSources details").forEach((e) => {
          e.removeAttribute("open");
        });
    });
  });
const genreIds = {
  action: 28,
  adventure: 12,
  animation: 16,
  comedy: 35,
  crime: 80,
  drama: 18,
  fantasy: 14,
  family: 10751,
  horror: 27,
  history: 36,
  musical: 10402,
  romance: 10749,
  scifi: 878,
  sports: 18,
  thriller: 53,
  war: 10752,
  western: 37,
};
let currentGenreId = null,
  currentPage = 1,
  totalPagesForGenre = 500,
  currentSearchQuery = null,
  isSearching = !1,
  currentYear = null;
const videasyLink = "https://player.videasy.net/movie/",
  vidgeLink = "https://vidbinge.dev/embed/movie/",
  oneoneoneLink = "https://111movies.com/movie/",
  vidfastLink = "https://vidfast.pro/movie/",
  vidsrcLink = "https://vidsrc.xyz/embed/movie/",
  superembedLink = "https://multiembed.mov/directstream.php?video_id=",
  vidlinkLink = "https://vidlink.pro/movie/",
  moviesapiLink = "https://moviesapi.club/movie/",
  twoembedLink = "https://www.2embed.cc/embed/",
  vidvipLink = "https://vidsrc.vip/embed/movie/",
  videasyBtn = document.getElementById("videasyBtn"),
  vidgeBtn = document.getElementById("vidgeBtn"),
  oneoneoneBtn = document.getElementById("oneoneoneBtn"),
  vidfastBtn = document.getElementById("vidfastBtn"),
  vidsrcBtn = document.getElementById("vidsrcBtn"),
  superembedBtn = document.getElementById("superembedBtn"),
  vidlinkBtn = document.getElementById("vidlinkBtn"),
  moviesapiBtn = document.getElementById("moviesapiBtn"),
  twoembedBtn = document.getElementById("twoembedBtn"),
  vidvipBtn = document.getElementById("vidvipBtn"),
  myIframe = document.getElementById("myIframe"),
  myModal = document.getElementById("myModal");
document.addEventListener("DOMContentLoaded", function () {
  function e(e, t, n) {
    (myIframe.src = `${e}${t}`),
      (videasyBtn.style.backgroundColor = "black"),
      (vidgeBtn.style.backgroundColor = "black"),
      (oneoneoneBtn.style.backgroundColor = "black"),
      (vidfastBtn.style.backgroundColor = "black"),
      (vidsrcBtn.style.backgroundColor = "black"),
      (superembedBtn.style.backgroundColor = "black"),
      (vidlinkBtn.style.backgroundColor = "black"),
      (moviesapiBtn.style.backgroundColor = "black"),
      (twoembedBtn.style.backgroundColor = "black"),
      (vidvipBtn.style.backgroundColor = "black"),
      (n.style.backgroundColor = "green");
  }
  function t(e, t) {
    (isSearching = !0), (currentSearchQuery = e);
    const n = `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApi}&query=${encodeURIComponent(
      e
    )}&page=${t}`;
    (currentYear = null),
      (currentGenreId = null),
      fetch(n)
        .then((e) => e.json())
        .then((e) => {
          o(e), (totalPagesForGenre = e.total_pages ? e.total_pages : 399), r();
        })
        .catch((e) => console.log(e));
  }
  videasyBtn.addEventListener("click", () => {
    myIframe.setAttribute(
      "sandbox",
      "allow-same-origin allow-forms allow-scripts"
    ),
      e(videasyLink, n, videasyBtn);
  }),
    vidgeBtn.addEventListener("click", () => {
      myIframe.setAttribute(
        "sandbox",
        "allow-same-origin allow-forms allow-scripts allow-presentation"
      ),
        e(vidgeLink, n, vidgeBtn);
    }),
    oneoneoneBtn.addEventListener("click", () => {
      myIframe.setAttribute(
        "sandbox",
        "allow-same-origin allow-forms allow-scripts"
      ),
        e(oneoneoneLink, n, oneoneoneBtn);
    }),
    vidfastBtn.addEventListener("click", () => {
      myIframe.setAttribute(
        "sandbox",
        "allow-same-origin allow-forms allow-scripts"
      ),
        e(vidfastLink, n, vidfastBtn);
    }),
    vidsrcBtn.addEventListener("click", () => {
      myIframe.removeAttribute("sandbox"), e(vidsrcLink, n, vidsrcBtn);
    }),
    superembedBtn.addEventListener("click", () => {
      myIframe.removeAttribute("sandbox"), e(superembedLink, n, superembedBtn);
    }),
    vidlinkBtn.addEventListener("click", () => {
      myIframe.removeAttribute("sandbox"), e(vidlinkLink, n, vidlinkBtn);
    }),
    moviesapiBtn.addEventListener("click", () => {
      myIframe.removeAttribute("sandbox"), e(moviesapiLink, n, moviesapiBtn);
    }),
    twoembedBtn.addEventListener("click", () => {
      myIframe.removeAttribute("sandbox"), e(twoembedLink, n, twoembedBtn);
    }),
    vidvipBtn.addEventListener("click", () => {
      myIframe.removeAttribute("sandbox"), e(vidvipLink, n, vidvipBtn);
    });
  let n = null;
  function o(t) {
    const o = [
        document.getElementById("rowImage1"),
        document.getElementById("rowImage2"),
        document.getElementById("rowImage3"),
        document.getElementById("rowImage4"),
        document.getElementById("rowImage5"),
        document.getElementById("rowImage6"),
        document.getElementById("rowImage7"),
        document.getElementById("rowImage8"),
        document.getElementById("rowImage9"),
        document.getElementById("rowImage10"),
        document.getElementById("rowImage11"),
        document.getElementById("rowImage12"),
        document.getElementById("rowImage13"),
        document.getElementById("rowImage14"),
        document.getElementById("rowImage15"),
        document.getElementById("rowImage16"),
        document.getElementById("rowImage17"),
        document.getElementById("rowImage18"),
        document.getElementById("rowImage19"),
        document.getElementById("rowImage20"),
      ],
      d = [
        document.getElementById("rowTitle1"),
        document.getElementById("rowTitle2"),
        document.getElementById("rowTitle3"),
        document.getElementById("rowTitle4"),
        document.getElementById("rowTitle5"),
        document.getElementById("rowTitle6"),
        document.getElementById("rowTitle7"),
        document.getElementById("rowTitle8"),
        document.getElementById("rowTitle9"),
        document.getElementById("rowTitle10"),
        document.getElementById("rowTitle11"),
        document.getElementById("rowTitle12"),
        document.getElementById("rowTitle13"),
        document.getElementById("rowTitle14"),
        document.getElementById("rowTitle15"),
        document.getElementById("rowTitle16"),
        document.getElementById("rowTitle17"),
        document.getElementById("rowTitle18"),
        document.getElementById("rowTitle19"),
        document.getElementById("rowTitle20"),
      ];
    document.querySelectorAll(".col");
    o.forEach((o, d) => {
      if (t.results && t.results[d] && t.results[d].poster_path) {
        (o.src = tmdbPosterUrl + t.results[d].poster_path),
          o.replaceWith(o.cloneNode(!0));
        document.getElementById(o.id).addEventListener("click", () => {
          (n = t.results[d].id),
            (myModal.style.display = "flex"),
            window.scrollTo({ top: 0, behavior: "smooth" }),
            (document.querySelector(
              ".iframeCon"
            ).style.backgroundImage = `url('${
              tmdbBgUrl + t.results[d].backdrop_path
            }')`),
            (document.getElementById("modalImg").src =
              tmdbPosterUrl + t.results[d].poster_path),
            (document.getElementById("modalTitle").textContent =
              t.results[d].title),
            (document.getElementById("modalOverview").textContent =
              t.results[d].overview),
            (document.getElementById(
              "modalRating"
            ).textContent = `Rating: ${t.results[d].vote_average.toFixed(
              1
            )}/10`),
            (document.getElementById("modalYear").textContent =
              t.results[d].release_date),
            e(oneoneoneLink, n, oneoneoneBtn),
            (document.getElementById("vipPlayer").style.backgroundColor =
              "green"),
            myIframe.setAttribute(
              "sandbox",
              "allow-same-origin allow-forms allow-scripts"
            );
        });
      } else {
        const e = o.closest(".col");
        e && (e.style.display = "none");
      }
    }),
      d.forEach((e, n) => {
        if (t.results && t.results[n] && t.results[n].title) {
          const o = t.results[n].title,
            d = t.results[n].release_date
              ? t.results[n].release_date.substring(0, 4)
              : "N/A";
          e.textContent = `${o} (${d})`;
        } else e.textContent = "not available";
      });
  }
  function d(e, t) {
    return `<li class="page-item ${
      t ? "active" : ""
    }"><a class="page-link" href="#" data-page="${e}">${e}</a></li>`;
  }
  function r() {
    !(function (e, t, n) {
      let o = "";
      const l = document.getElementById("pagination-container"),
        m = document.getElementById("previous-page"),
        a = document.getElementById("next-page");
      if (
        (m.classList.remove("disabled"),
        1 === e && m.classList.add("disabled"),
        (m.querySelector("a").onclick = function () {
          return e > 1 && (e--, r()), !1;
        }),
        t <= 7)
      )
        for (let n = 1; n <= t; n++) o += d(n, n === e);
      else {
        let n, r;
        e <= Math.ceil(3.5)
          ? ((n = 1), (r = 7))
          : e + Math.floor(3.5) >= t
          ? ((n = t - 7 + 1), (r = t))
          : ((n = e - Math.floor(3.5)), (r = e + Math.floor(3.5))),
          (o += d(1, 1 === e)),
          n > 2 &&
            (o +=
              '<li class="page-item disabled"><span class="page-link">...</span></li>');
        for (let l = n; l <= r; l++) l > 1 && l < t && (o += d(l, l === e));
        r < t - 1 &&
          (o +=
            '<li class="page-item disabled"><span class="page-link">...</span></li>'),
          t > 1 && (o += d(t, e === t));
      }
      a.classList.remove("disabled"),
        e === t && a.classList.add("disabled"),
        (a.querySelector("a").onclick = function () {
          return e < t && (e++, r()), !1;
        }),
        (l.innerHTML = m.outerHTML + o + a.outerHTML);
    })(currentPage, totalPagesForGenre),
      (function () {
        const e = document.getElementById("pagination-container"),
          t = e.querySelectorAll(".page-item:not(.disabled) a.page-link");
        t.forEach((e) => {
          e.onclick = function (e) {
            e.preventDefault();
            const t = parseInt(this.dataset.page);
            isNaN(t) || ((currentPage = t), r());
          };
        });
      })(),
      isSearching
        ? t(currentSearchQuery, currentPage)
        : (function (e, t = currentGenreId, n = currentYear) {
            let d;
            (isSearching = !1),
              n
                ? ((d = `${tmdbDiscover}?api_key=${tmdbApi}&primary_release_year=${n}&page=${e}`),
                  (currentGenreId = null))
                : t
                ? ((d = `${tmdbDiscover}?api_key=${tmdbApi}&with_genres=${t}&page=${e}`),
                  (currentYear = null))
                : ((d = `${tmdbDiscover}?api_key=${tmdbApi}&primary_release_year=2025&page=${e}`),
                  (currentYear = null)),
              fetch(d)
                .then((e) => e.json())
                .then((e) => {
                  o(e),
                    (totalPagesForGenre = e.total_pages ? e.total_pages : 399),
                    r();
                })
                .catch((e) => console.log(e));
          })(currentPage, currentGenreId, currentYear);
  }
  [
    document.getElementById("twenty-twentyfive"),
    document.getElementById("twenty-twentyfour"),
    document.getElementById("twenty-twentythree"),
    document.getElementById("twenty-twentytwo"),
    document.getElementById("twenty-twentyone"),
    document.getElementById("twenty-twenty"),
    document.getElementById("twenty-nineteen"),
    document.getElementById("twenty-eighteen"),
    document.getElementById("twenty-seventeen"),
    document.getElementById("twenty-sixteen"),
    document.getElementById("twenty-fifteen"),
    document.getElementById("twenty-fourteen"),
    document.getElementById("twenty-thirteen"),
    document.getElementById("twenty-twelve"),
    document.getElementById("twenty-eleven"),
    document.getElementById("twenty-ten"),
    document.getElementById("two-thousandnine"),
    document.getElementById("two-thousandeight"),
    document.getElementById("two-thousandseven"),
    document.getElementById("two-thousandsix"),
    document.getElementById("two-thousandfive"),
    document.getElementById("two-thousandfour"),
    document.getElementById("two-thousandthree"),
    document.getElementById("two-thousandtwo"),
    document.getElementById("two-thousandone"),
    document.getElementById("two-thousand"),
  ].forEach((e) => {
    e.addEventListener("click", function (e) {
      e.preventDefault();
      const t = this.textContent.trim();
      (document.getElementById("latesth1").textContent = t),
        (currentYear = t),
        (currentGenreId = null),
        (currentPage = 1),
        r();
    });
  }),
    fetch(`${tmdbPopular}?api_key=${tmdbApi}`)
      .then((e) => e.json())
      .then((e) => {
        const t = document.getElementById("dynamicBg"),
          n = document.getElementById("prev"),
          o = document.getElementById("next");
        let d = 0;
        (t.style.backgroundImage = `url(${
          tmdbBgUrl + e.results[0].backdrop_path
        })`),
          o.addEventListener("click", () => {
            d++,
              d >= e.results.length && (d = 0),
              (t.style.backgroundImage = `url(${
                tmdbBgUrl + e.results[d].backdrop_path
              })`);
          }),
          n.addEventListener("click", () => {
            d--,
              d < 0 && (d = e.results.length - 1),
              (t.style.backgroundImage = `url(${
                tmdbBgUrl + e.results[d].backdrop_path
              })`);
          });
        const r = [
            "featured-title1",
            "featured-title2",
            "featured-title3",
            "featured-title4",
            "featured-title5",
            "featured-title6",
            "featured-title7",
            "featured-title8",
          ].map((e) => document.getElementById(e)),
          l = [
            "featuredOverview1",
            "featuredOverview2",
            "featuredOverview3",
            "featuredOverview4",
            "featuredOverview5",
            "featuredOverview6",
            "featuredOverview7",
            "featuredOverview8",
          ].map((e) => document.getElementById(e)),
          m = [
            "featuredDate1",
            "featuredDate2",
            "featuredDate3",
            "featuredDate4",
            "featuredDate5",
            "featuredDate6",
            "featuredDate7",
            "featuredDate8",
          ].map((e) => document.getElementById(e));
        r.forEach((t, n) => {
          e.results &&
            e.results[n] &&
            e.results[n].title &&
            (t.textContent = e.results[n].title);
        }),
          l.forEach((t, n) => {
            e.results &&
              e.results[n] &&
              e.results[n].overview &&
              (t.textContent = e.results[n].overview);
          }),
          m.forEach((t, n) => {
            e.results &&
              e.results[n] &&
              e.results[n].release_date &&
              (t.textContent = e.results[n].release_date);
          });
      })
      .catch((e) => console.log(e));
  document.getElementById("pagination-container"),
    document.getElementById("previous-page"),
    document.getElementById("next-page");
  const l = {
    action: document.getElementById("action"),
    adventure: document.getElementById("adventure"),
    animation: document.getElementById("animation"),
    comedy: document.getElementById("comedy"),
    crime: document.getElementById("crime"),
    drama: document.getElementById("drama"),
    fantasy: document.getElementById("fantasy"),
    family: document.getElementById("family"),
    horror: document.getElementById("horror"),
    history: document.getElementById("history"),
    musical: document.getElementById("musical"),
    romance: document.getElementById("romance"),
    scifi: document.getElementById("scifi"),
    sports: document.getElementById("sports"),
    thriller: document.getElementById("thriller"),
    war: document.getElementById("war"),
    western: document.getElementById("western"),
  };
  Object.keys(l).forEach((e) => {
    l[e].addEventListener("click", () => {
      (document.getElementById("latesth1").textContent = e.toUpperCase()),
        (currentGenreId = genreIds[e]),
        (currentYear = null),
        (currentPage = 1),
        r();
    });
  }),
    searchBtn.addEventListener("click", () => {
      document.getElementById("latesth1").textContent = myInput.value;
      const e = myInput.value;
      e
        ? ((currentPage = 1), t(e, currentPage))
        : alert("Please enter a movie title to search.");
    }),
    r();
});
