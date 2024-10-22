import style from "styled-components";



const Upload = style.div`
  display: flex;
  justify-content: space-between;
`;

const UploadText = style.div``

const Button = style.button`
  width: 74px;
  height: 42px;
  border: 1px solid #9CA3AF;
	border-radius: 8px;
`;

const UploadItem = () => {
	return (
		<>
			<Upload>
				<UploadText>상품 등록하기</UploadText>
				<Button>등록</Button>
			</Upload>
		</>
	);
};

export default UploadItem;
