import PrimaryButton from '../PrimaryButton';
import Textarea from '../Textarea';
import './Enquiry.css';

export default function Enquiry() {
  return (
    <section className="Enquiry">
      <Textarea
        label="문의"
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        heightSize="small"
      />
      <div className="Enquiry-btn-wrapper">
        <PrimaryButton text="등록" disabled={true} />
      </div>
    </section>
  );
}
