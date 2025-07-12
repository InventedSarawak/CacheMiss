export const SITE = {
  website: "https://vedant-blog-kappa.vercel.app/", // replace this with your deployed domain
  author: "Vedant Kesarwani",
  profile: "https://vedant-kesarwani.vercel.app/",
  desc: "A big bag of yaps and ramblings.",
  title: "CacheMiss",
  ogImage: "cachemiss-og.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Calcutta", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
