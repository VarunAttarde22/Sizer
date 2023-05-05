import { Header } from "./header/Header";
import { Title } from "./title/Title";
import styles from "./styles/Layout.module.scss";

export const Layout = ({ children }: any): JSX.Element => (
  <div className={styles.LayoutWrapper}>
    <Title />
    <Header />
    <main>{children}</main>
  </div>
);
