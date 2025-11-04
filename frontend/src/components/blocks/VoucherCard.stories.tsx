import { Meta, StoryObj } from "@storybook/react-vite";
import { VoucherCard as VoucherCardComponent } from "./VoucherCard";

const meta: Meta<typeof VoucherCardComponent> = {
  component: VoucherCardComponent,
  title: "blocks/ Voucher Card",
};

export default meta;

export const VoucherCard: StoryObj<typeof VoucherCardComponent> = {
  args: {
    voucher: {
      name: "voucher",
      description: "voucher description",
    },
  },
};

export const VoucherCardGroup: StoryObj<typeof VoucherCardComponent> = {
  render: () => {
    const vouchers = [
      {
        name: "Cucumber",
        description: "voucher description",
      },
      {
        name: "Cucumber",
        description:
          "voucher description voucher description voucher description voucher description",
      },
      {
        name: "Cucumber",
        description: "voucher description",
      },
    ];

    return (
      <div className="flex gap-3">
        {vouchers.map((voucher) => (
          <VoucherCardComponent voucher={voucher} />
        ))}
      </div>
    );
  },
};
