import type { FC } from "react";
import { PageHero } from "@/components/blocks/PageHero";
import { TextUnderlined } from "@/components/ui/TextUnderlined";
import Page from "@/components/layout/Page";

interface ArticlesProp {}

const Articles: FC<ArticlesProp> = () => {
  return (
    <Page>
      <main>
        <PageHero
          title={
            <>
              <TextUnderlined text="Explore" /> Voucherland
            </>
          }
        />
      </main>
    </Page>
  );
};

export { Articles };
