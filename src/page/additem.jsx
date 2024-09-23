import styled from "styled-components";
import { useState } from "react";
import Additemheader from "../component/additem/AdditemHeader";
import ItemImage from "../component/additem/ItemImage";
import Itemname from "../component/additem/ItemName";
import Itemintro from "../component/additem/ItemIntro";
import Itemprice from "../component/additem/ItemPrice";
import Itemtag from "../component/additem/ItemTag";

const Container = styled.div`
  width: 1200px;
  margin-top: 24px;
  margin-right: 360px;
  margin-left: 360px;
  margin-bottom: 69px;
`;

const Additem = () => {
  const [Item, setItem] = useState({
    image: false,
    name: false,
    intro: false,
    price: false,
    tag: false,
  });

  const isButtonActive =
    Item.image && Item.intro && Item.name && Item.price && Item.tag;

  return (
    <Container>
      <Additemheader isButtonActive={isButtonActive} />
      <main>
        <ItemImage setItem={setItem} />
        <Itemname setItem={setItem} />
        <Itemintro setItem={setItem} />
        <Itemprice setItem={setItem} />
        <Itemtag setItem={setItem} />
      </main>
    </Container>
  );
};

export default Additem;
