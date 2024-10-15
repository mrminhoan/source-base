import {WrapperConfig} from "@components"
import { LoadedAleCore } from "@utils";
const App = LoadedAleCore(() => import('./App'));

try {
  (async () => {
    await WrapperConfig({
      children: <App />,
    });
  })();
} catch (error) {}
