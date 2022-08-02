import styles from './App.module.scss';
import BookingTable from "./components/BookingTable";
import Login from './components/Login'
import getUserInfo from './service/auth-service'
import {createSignal, onMount} from "solid-js";

function App() {
    const [userInfo, setUserInfo] = createSignal("");
    onMount(async () => {
        await getUserInfo().then((res) => {setUserInfo(res); console.log(userInfo()); console.log("HEJ!"); });
    });
  return (
      <div class={styles.App}>
          <Show when={userInfo() === "" && !userInfo()}>
          <Login />
          </Show>
          <Show when={userInfo() !== "" && userInfo()}>
        <BookingTable />
          </Show>
      </div>
  );
}

export default App;
