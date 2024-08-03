import Post from "./components/post/Post";
import Layout from "./layout/layout";
import iPhone14ProMax from "./assets/image/iphone-14-pro-max.jpg";
import GalaxyZFold4 from "./assets/image/galaxy-z-fold-4.jpg";
import Pixel7Pro from "./assets/image/google-pixel-7-pro.jpg";
import OnePlus10Pro from "./assets/image/OnePlus-10-pro.webp";
import Xperia1IV from "./assets/image/Sony-Xperia-1-IV.webp";

function App() {
  return (
    <Layout>
      <div className="container mx-auto p-8 bg-gray-100">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Our Featured Smartphones
          </h1>
          <p className="text-gray-600 mt-4">
            Discover our exclusive collection of luxury smartphones.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Post
            title="iPhone 14 Pro Max"
            description="The iPhone 14 Pro Max is the pinnacle of Apple's smartphone technology, featuring a stunning Super Retina XDR display, advanced camera system, and powerful A16 Bionic chip."
            price={1.5}
            pricebadge="K"
            image={iPhone14ProMax}
          />
          <Post
            title="Samsung Galaxy Z Fold 4"
            description="The Samsung Galaxy Z Fold 4 redefines versatility with its foldable design, expansive display, and cutting-edge features, offering a premium experience in both tablet and phone modes."
            price={2.0}
            pricebadge="K"
            image={GalaxyZFold4}
          />
          <Post
            title="Google Pixel 7 Pro"
            description="The Google Pixel 7 Pro combines sleek design with the purest Android experience, featuring an incredible camera system powered by Google's advanced computational photography."
            price={1.1}
            pricebadge="K"
            image={Pixel7Pro}
          />
          <Post
            title="OnePlus 10 Pro"
            description="The OnePlus 10 Pro offers exceptional performance with its Snapdragon 8 Gen 1 processor, stunning 120Hz display, and Hasselblad-tuned cameras for an unbeatable user experience."
            price={0.9}
            pricebadge="K"
            image={OnePlus10Pro}
          />
          <Post
            title="Sony Xperia 1 IV"
            description="The Sony Xperia 1 IV stands out with its 4K HDR OLED display, professional-grade camera features, and robust performance, making it a top choice for content creators and media enthusiasts."
            price={1.3}
            pricebadge="K"
            image={Xperia1IV}
          />
        </div>
      </div>
    </Layout>
  );
}

export default App;
