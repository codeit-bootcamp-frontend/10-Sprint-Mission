import "./AddItemFormSection.css";

export default function AddItemFormSection() {
  return (
    <section className="addItemForm">
      <form className="form">
        <fieldset className="form__head">
          <h1 className="form__title">상품 등록하기</h1>
          <button className="form__submitButton">등록</button>
        </fieldset>
        <fieldset className="form__body">
          <label className="form__label">상품 이미지</label>
          <div>
            <input hidden type="file" accept="image/*"></input>
            <button className="form__imageInput" type="button">
              이미지 등록
            </button>
            <div>
              <img src="" alt="" />
              <button type="button" />
            </div>
          </div>
          <label className="form__label">상품명</label>
          <input
            className="form__input"
            type="text"
            placeholder="상품명을 입력해 주세요"
          ></input>
          <label className="form__label">상품 소개</label>
          <textarea
            className="form__input"
            placeholder="상품 소개를 입력해 주세요"
          ></textarea>
          <label className="form__label">판매 가격</label>
          <input
            className="form__input"
            type="text"
            placeholder="판매 가격을 입력해 주세요"
          ></input>
          <label className="form__label">태그</label>
          <input
            className="form__input"
            type="text"
            placeholder="태그를 입력해 주세요"
          ></input>
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
