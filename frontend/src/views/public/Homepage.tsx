import type { FC } from "react";
import Page from "@/components/layout/Page";
import { HomeHero } from "@/components/blocks/HomeHero";

interface HomepageProp {}

const Homepage: FC<HomepageProp> = () => {
  return (
    <Page>
      <HomeHero />
    </Page>
  );
};

export { Homepage };
