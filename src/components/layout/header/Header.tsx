import { IDSHeader } from "@/components/ids/header/MastHead";
import styles from "./styles/MastHead.module.scss";

export const Header = (): JSX.Element => {
  return (
    <>
      <IDSHeader className={styles.HeaderWrapper}>
        <div slot="title">Sizer</div>
      </IDSHeader>
    </>
  );
};
