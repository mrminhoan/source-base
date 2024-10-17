import {WrapperConfig} from "@components"
import { LoadedAleCore } from "@utils";
import "./style/style.css"
const App = LoadedAleCore(() => import('./App'));

try {
  (async () => {
    await WrapperConfig({
      children: <App />,
    });
  })();
} catch (error) {}
