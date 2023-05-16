// import { IDSHeader } from "@/components/ids/header/MastHead";
// import styles from "./styles/MastHead.module.scss";
import {HeaderComponent} from '../../header/HeaderComponent'
export const Header = (): JSX.Element => {
  return (
    <>
      {/* <IDSHeader className={styles.HeaderWrapper}>
        <div slot="title">Sizer</div>
      </IDSHeader> */}
      <HeaderComponent title={"Sizer"} />
    </>
  );
};
