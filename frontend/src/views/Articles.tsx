import type { FC } from "react";
import { PageHero } from "../components/blocks/PageHero";
import { TextUnderlined } from "../components/ui/TextUnderlined";

interface ArticlesProp {}

const Articles: FC<ArticlesProp> = () => {
  return (
    <main>
      <PageHero
        title={
          <>
            <TextUnderlined text="Explore" /> Voucherland
          </>
        }
      />
    </main>
  );
};

export { Articles };
