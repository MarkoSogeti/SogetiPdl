import styles from "./App.module.scss";
import BookingTable from "./components/BookingTable";
import Login from "./components/Login";
import getUserInfo from "./service/auth-service";
import { createSignal, onMount } from "solid-js";

function App() {
  const [userInfo, setUserInfo] = createSignal("");
  onMount(async () => {
    await getUserInfo().then((res) => {
      setUserInfo(res);
    });
  });
  return (
    <div class={styles.App}>
      <BookingTable userInfo={userInfo().userDetails} />
    </div>
  );
}

export default App;
