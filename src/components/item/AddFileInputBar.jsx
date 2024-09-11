import './AddFileInputBar.css';
import plusIcon from '../../assets/ic_plus.svg';

function AddFileInputBar() {
  return (
    <section>
      <label htmlFor="file">
        <div className="btn-upload">
          <img src={plusIcon} alt="플러스 아이콘" />
          <span className="btn-upload-description">이미지 등록</span>
        </div>
      </label>
      <input type="file" name="file" id="file" />
    </section>
  );
}

export default AddFileInputBar;
