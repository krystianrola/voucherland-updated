import type { FC } from "react";
import Page from "@/components/layout/Page";
import { PageHero } from "@/components/blocks/PageHero";
import { TextUnderlined } from "@/components/ui/TextUnderlined";

const Contact: FC = () => {
  return (
    <Page>
      <PageHero
        title={
          <>
            Cooperation is <TextUnderlined text="key" />
          </>
        }
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        align="left"
      />
    </Page>
  );
};

export { Contact };
