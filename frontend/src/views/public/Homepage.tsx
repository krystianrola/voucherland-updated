import type { FC } from "react";
import Page from "@/components/layout/Page";
import { HomeHero } from "@/components/blocks/HomeHero";
import Section from "@/components/layout/Section";
import { StatisticItem } from "@/components/blocks/StatisticItem";
import { SectionTitle } from "@/components/blocks/SectionTitle";
import { Swiper } from "@/components/ui/Swiper";
import { SkeletonCard } from "@/components/blocks/SkeletonCard";
import VoucherSlider from "@/components/blocks/VoucherSlider";

interface HomepageProp {}

const Homepage: FC<HomepageProp> = () => {
  return (
    <Page>
      <HomeHero />

      {/* <Section>
        <SectionTitle title="Vouchers of the day" />
        <div className="p-1">
          <VoucherSlider />
        </div>
      </Section> */}

      <Section className="h-svh lg:h-fit flex flex-col lg:flex-row justify-between lg:px-20 ">
        <StatisticItem name="#vouchersUsed" value={22000} />
        <StatisticItem name="#collaborations" value={1300} />
        <StatisticItem name="#activeUsers" value={985} />
      </Section>
    </Page>
  );
};

export { Homepage };
