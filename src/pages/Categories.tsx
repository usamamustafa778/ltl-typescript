import { CategoriesHeader, Category, Footer, Nav } from "../components";

export default function Categories() {
  return (
    <div className="webPage">
      <Nav />
      <CategoriesHeader />
      <Category
        img="/img/Japenese6000.png"
        title="Japenese Core 6000"
        titleDes="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quos"
        icon="/img/grammer.png"
        courses="62"
        series="7"
        des="Learn the 6,000 most common Japanese words. Each item features an example sentence and audio from two popular Japanese voice talents. Master these 6,000 words to master Japanese!"
      />
      <Category
        img="/img/SimplifiedJapeneseCore.png"
        title="Simplified Japenese Core"
        titleDes="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quos"
        icon="/img/core.png"
        courses="62"
        series="7"
        des="This category covers the top 2,000 most common Chinese words and 1,220 common words and expressions necessary for reading Chinese newspapers and magazines. Note: all content in this category is in simplified Chinese."
      />
      <Category
        img="/img/TraditionalJapeneseCore.png"
        title="Traditional Japenese Core"
        titleDes="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quos"
        icon="/img/specific.png"
        courses="62"
        series="7"
        des="This category covers the top 2,000 most common Chinese words and 1,220 common words and expressions necessary for reading Chinese newspapers and magazines. Note: all content in this category is in simplified Chinese."
      />
      <Category
        img="/img/EnglishVocabulary.png"
        title="English Vocabulary"
        titleDes="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quos"
        icon="/img/grammer.png"
        courses="62"
        series="7"
        des="Learn the 6,000 most common Japanese words. Each item features an example sentence and audio from two popular Japanese voice talents. Master these 6,000 words to master Japanese!"
      />
      <Footer />
    </div>
  );
}
