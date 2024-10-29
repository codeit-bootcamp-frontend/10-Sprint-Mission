import BestItemsSection from "../../components/items/marketPage/BestItemsSection";
import AllItemsSection from "../../components/items/marketPage/AllItemsSection";
import { Container } from "@/styles/CommonStyles";

const MarketPage = () => {
  return (
    <Container>
      <BestItemsSection />
      <AllItemsSection />
    </Container>
  );
};

export default MarketPage;
