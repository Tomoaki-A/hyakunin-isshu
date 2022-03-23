## 百人一首App
Vercel環境
https://hyakunin-isshu.vercel.app/


## Next.js base プロジェクト


## tailwind css

```
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

tailwind.config.js

```
 content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

globals.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## SWR

```
yarn add swr
```

utils/fetcher.js

```
export const fetcher = async(url) => {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error("fetch error");
  }

  const json = await res.json();
  return json;
}
```

\_app.jsx

```
import {fetcher} from "src/utils/fetcher"

 <SWRConfig
      value={{
        fetcher:{{fetcher}}
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>

```

## Sass

```
yarn add sass
```
