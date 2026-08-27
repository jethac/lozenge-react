import {
  Tree,
  TreeBranch,
  TreeItem,
  TreeItemMeta,
  TreeItemTitle,
} from "../../src/components/Tree";
import { Lozenge } from "../../src/components/Lozenge";

export const meta = { id: "tree", title: "Tree" };

export default function TreeSection() {
  return (
    <div className="d-flex gap-4" style={{ flexWrap: "wrap", alignItems: "flex-start" }}>
      {/* File tree: independent branches, nested levels, selected leaf */}
      <Tree style={{ minWidth: 240 }}>
        <TreeBranch open label="scss">
          <TreeBranch open label="components">
            <TreeItem selected aria-current="true">
              _tree.scss
            </TreeItem>
            <TreeItem>_list.scss</TreeItem>
          </TreeBranch>
          <TreeItem>_tokens.scss</TreeItem>
          <TreeItem>lozenge.scss</TreeItem>
        </TreeBranch>
        <TreeBranch label="docs">
          <TreeItem href="#tree">tree.html</TreeItem>
        </TreeBranch>
        <TreeItem>package.json</TreeItem>
      </Tree>

      {/* Railed tree with block rows: epic > story breakdown */}
      <Tree railed style={{ minWidth: 300, flex: "0 1 380px" }}>
        <TreeBranch
          open
          block
          label={
            <>
              <TreeItemTitle>
                Runtime theme axes <Lozenge status="inprogress">In progress</Lozenge>
              </TreeItemTitle>
              <TreeItemMeta>
                <span>LOZ-1</span>
                <span>·</span>
                <span>4 stories</span>
              </TreeItemMeta>
            </>
          }
        >
          <TreeItem block>
            <TreeItemTitle>
              Accent-hue dial <Lozenge status="success">Done</Lozenge>
            </TreeItemTitle>
            <TreeItemMeta>
              <span>LOZ-2</span>
              <span>·</span>
              <span>3 points</span>
            </TreeItemMeta>
          </TreeItem>
          <TreeItem block>
            <TreeItemTitle>
              Density switch <Lozenge status="default">To do</Lozenge>
            </TreeItemTitle>
            <TreeItemMeta>
              <span>LOZ-3</span>
              <span>·</span>
              <span>2 points</span>
            </TreeItemMeta>
          </TreeItem>
        </TreeBranch>
        <TreeItem block>
          <TreeItemTitle>
            Docs relaunch <Lozenge status="new">New</Lozenge>
          </TreeItemTitle>
          <TreeItemMeta>
            <span>LOZ-9</span>
            <span>·</span>
            <span>unestimated</span>
          </TreeItemMeta>
        </TreeItem>
      </Tree>
    </div>
  );
}
