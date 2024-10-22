import style from "styled-components";
import UploadItem from "../components/addItem/UploadItem";
import UploadImage from "../components/addItem/UploadImage";
import ItemName from "../components/addItem/ItemName";
import ItemInfo from "../components/addItem/ItemInfo";

const AddItemContainer = style.div`
	width: 100%;
	display: flex;
	justify-content: center;
`

const AddItemPageBox = style.div`
	width: 1200px;
`;

function AddItemPage() {
	return (
		<AddItemContainer>
			<AddItemPageBox>
				<UploadItem></UploadItem>
				<UploadImage></UploadImage>
				<ItemName></ItemName>
				<ItemInfo></ItemInfo>
			</AddItemPageBox>
		</AddItemContainer>
	);
}

export default AddItemPage;
