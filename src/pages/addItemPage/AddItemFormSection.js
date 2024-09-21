export default function AddItemFormSection() {
  return (
    <section className="addItemFormSection">
      <form>
        <fieldset>
          <legend>
            <h1>상품 등록하기</h1>
          </legend>
          <button>등록</button>
        </fieldset>
        <fieldset>
          <label>상품 이미지</label>
          <div>
            <input type="file" accept="image/*"></input>
            <button type="button">이미지 등록</button>
            <div>
              <img src="" alt="" />
              <button type="button" />
            </div>
          </div>
          <label>상품명</label>
          <input type="text" placeholder="상품명을 입력해 주세요"></input>
          <label>상품 소개</label>
          <textarea placeholder="상품 소개를 입력해 주세요"></textarea>
          <label>판매 가격</label>
          <input type="text" placeholder="판매 가격을 입력해 주세요"></input>
          <label>태그</label>
          <input type="text" placeholder="태그를 입력해 주세요"></input>
          {[1].map((tag) => (
            <div key={tag}>
              <span>#</span>
              <button type="button"></button>
            </div>
          ))}
        </fieldset>
      </form>
    </section>
  );
}
