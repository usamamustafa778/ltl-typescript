module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#292779",
        secondary: "#FFB800",
        green: "#BDFF00",
      },
      backgroundImage: {
        banner: "url(/public/img/banner-bg.png)",
        dp: "url(/public/img/dp.jpg)",
        post: "linear-gradient(#0003, #0009),url(/public/img/cover.jpg)",
      },
      gridTemplateColumns: {
        listItem: "35px 1fr",
        body: "200px 1fr",
        itemsSentences: "350px 1fr",
        blogSideLeft: "48px 1fr 40px",
        blogSideRight: "48px 1fr 120px",
        blogs: "1fr 200px",
        closeBlogs: "1fr 80px",
      },
    },
  },
  plugins: [],
};
