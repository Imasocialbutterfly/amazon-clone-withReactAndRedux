import { Carousel, CarouselCategory, CarouselProduct, HomePageCard } from "./";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"We have a surprise"}
            img={"../images/home_grid_1.jpg"}
            link={"See terms and conditions"}
          />
          <HomePageCard
            title={"Best Deals to come"}
            img={"../images/home_grid_2.jpg"}
            link={"See terms and conditions"}
          />
          <HomePageCard
            title={"One of the trendiest products"}
            img={"../images/home_grid_3.jpg"}
            link={"Check out our latest products"}
          />
          <HomePageCard
            title={"Unlimited streaming"}
            img={"../images/home_grid_4.jpg"}
            link={"Start streaming now"}
          />
          <HomePageCard
            title={"More titles to explore"}
            img={"../images/home_grid_5.jpg"}
            link={"Browse kindle unlimited"}
          />
          <HomePageCard
            title={"Spring Sales"}
            img={"../images/home_grid_6.jpg"}
            link={"Se the deals"}
          />
          <div className="m-3 pt-8">
            <img className="xl:hidden" src="../images/banner_image_2.jpg" />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px]">
          <img className="h-[100%] m-auto" src={"../images/banner_image.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
