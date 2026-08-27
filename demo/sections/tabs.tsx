import {
  Tab,
  TabPane,
  TabPanes,
  Tabs,
  Tabset,
  TabsetTab,
} from "../../src/components/Tabs";

export const meta = { id: "tabs", title: "Tabs" };

export default function TabsSection() {
  return (
    <>
      {/* Link recipe: plain strip — you wire the switching */}
      <Tabs>
        <Tab href="#tabs" active>
          Details
        </Tab>
        <Tab href="#tabs">Comments</Tab>
        <Tab href="#tabs">History</Tab>
        <Tab href="#tabs" disabled>
          Worklog
        </Tab>
      </Tabs>

      {/* Tabset recipe: zero-JS pane switching on hidden radios + :has() */}
      <div style={{ marginTop: 16 }}>
        <Tabset defaultValue="details">
          <Tabs as="div">
            <TabsetTab value="details">Details</TabsetTab>
            <TabsetTab value="comments">Comments</TabsetTab>
            <TabsetTab value="history">History</TabsetTab>
          </Tabs>
          <TabPanes>
            <TabPane>
              <p>
                Issue details: <strong>LOZ-42</strong> — port the tab strip to
                React while keeping the radio inputs as the behavior layer.
              </p>
            </TabPane>
            <TabPane>
              <p>2 comments. Arrow keys switch tabs — no JavaScript.</p>
            </TabPane>
            <TabPane>
              <p>Created 2 days ago. Moved to In Progress yesterday.</p>
            </TabPane>
          </TabPanes>
        </Tabset>
      </div>
    </>
  );
}
