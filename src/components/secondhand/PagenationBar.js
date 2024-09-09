import prevPageIcon from "../../assets/arrow_left_active.svg";
import nextPageIcon from "../../assets/arrow_right_active.svg";

export default function PagenationBar() {
  return (
    <nav>
      <ul>
        <li>
          <img src={prevPageIcon} alt="이전 페이지" />
        </li>
        {[1, 2, 3].map((page) => (
          <li>{page}</li>
        ))}
        <li>
          <img src={nextPageIcon} alt="다음 페이지" />
        </li>
      </ul>
    </nav>
  );
}
