import { PageHero } from "@/components/blocks/PageHero";
import Page from "@/components/layout/Page";
import Section from "@/components/layout/Section";
import { Tabs } from "@/components/ui/Tabs";

const Account = () => {
  const username = "Krystian";

  return (
    <Page>
      <PageHero title={`Hi ${" " + username}, How are you?`} variant="account" />
      <Section>
        <Tabs.Root defaultValue="vouchers" variant="button">
          <Tabs.List>
            <Tabs.Trigger value="vouchers">
              <div>vouchers</div>
            </Tabs.Trigger>
            <Tabs.Trigger value="settings">
              <div>settings</div>
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="vouchers">
            <div>vouchers</div>
          </Tabs.Content>
          <Tabs.Content value="settings">
            <div>settings</div>
          </Tabs.Content>
        </Tabs.Root>
      </Section>
    </Page>
  );
};

export { Account };
