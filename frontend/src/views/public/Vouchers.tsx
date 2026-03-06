import type { FC } from "react";
import Page from "@/components/layout/Page";
import { PageHero } from "@/components/blocks/PageHero";

interface VouchersProp {}

const Vouchers: FC<VouchersProp> = () => {
  return (
    <Page>
      <PageHero title="Daily new deals" variant="search">
        <div>search</div>
      </PageHero>
    </Page>
  );
};

export { Vouchers };
